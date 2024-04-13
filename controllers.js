import expressAsyncHandler from "express-async-handler";
import { getDb } from "./mongodb.js";
import { ObjectId } from "mongodb";
import { Expo } from "expo-server-sdk";

// SIGN IN
export const signIn = expressAsyncHandler(async (req, res) => {
  const db = getDb();
  const { email, password } = req.body;
  // CHECK DATA
  if (!email || !password) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }
  // FIND USER BY EMAIL
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    res.status(404).json({ message: "No account with provided email" });
    return;
  } else {
    const isMatched = password === user.password;
    if (isMatched) {
      delete user.password;
      res.json(user);
    } else {
      res.status(403).json({ message: "Wrong password" });
    }
  }
});

// SIGNUP
export const signUp = expressAsyncHandler(async (req, res) => {
  const db = getDb();
  const { email, password, firstname, lastname } = req.body;
  // CHECK DATA
  if (!email || !password || !firstname || !lastname) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }
  // CHECK USER EXIST WITH PROVIDED EMAIL
  const user = await db.collection("users").findOne({ email });
  if (user) {
    res.status(409).json({ message: "user exist with provided email" });
    return;
  } else {
    await db.collection("users").insertOne({
      email,
      createdAt: new Date(),
      firstname,
      lastname,
      password,
      garden: [],
    });
    const newUser = await db.collection("users").findOne({ email });
    delete newUser.password;
    res.status(201).json(newUser);
  }
});

// GET USER DATA WITH LOOKUP FOR GARDEN SECTIONS INFO FROM PLANTS
export const getUserData = expressAsyncHandler(async (req, res) => {
  const db = getDb();
  const userId = req.query.user;
  const user = await db
    .collection("users")
    .aggregate([
      { $match: { _id: new ObjectId(userId) } }, // Match the user with the specific UID
      { $unwind: { path: "$garden", preserveNullAndEmptyArrays: true } }, // Unwind the garden array
      {
        $lookup: {
          from: "plants", // The collection to join with
          localField: "garden.plant", // Field from the users collection
          foreignField: "_id", // Field from the plants collection
          as: "garden.plantData", // Output array field
        },
      },
      {
        $unwind: {
          path: "$garden.plantData",
          preserveNullAndEmptyArrays: true,
        },
      }, // Unwind the plantData array
      {
        $group: {
          _id: "$_id", // Group by user ID
          email: { $first: "$email" },
          createdAt: { $first: "$createdAt" },
          firstname: { $first: "$firstname" },
          lastname: { $first: "$lastname" },
          garden: { $push: "$garden" }, // Push back the garden array with expanded plant data
        },
      },
    ])
    .toArray();
  let filteredGarden = user[0].garden.filter(
    (obj) => Object.keys(obj).length !== 0
  );

  res.json({ ...user[0], garden: filteredGarden });
});

//  update or add any field in user data
export const updateUserData = expressAsyncHandler(async (req, res) => {
  const db = getDb();
  const userId = req.query.user;
  await db.collection("users").updateOne(
    { _id: new ObjectId(userId) },
    {
      $set: {
        ...req.body,
      },
    }
  );

  res.status(201).json({ message: "user updated" });
});

//  change user password
export const changePassword = expressAsyncHandler(async (req, res) => {
  const db = getDb();
  const { currentPassword, password } = req.body;
  const userId = req.query.user;
  const user = await db.collection("users").find({ _id: new ObjectId(userId) });
  if (user.password == currentPassword) {
    await db.collection("users").updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          password,
        },
      }
    );
    res.status(201).json({ message: "password updated" });
  } else {
    res.status(403).json({ message: "incorrect password" });
  }
});

// get plants
export const getPlantsData = expressAsyncHandler(async (req, res) => {
  const db = getDb();

  const plants = await db
    .collection("plants")
    .find({})
    .sort({ name: 1 })
    .toArray();

  res.json(plants);
});

//  add plant to user garden

export const addSectionToGarden = expressAsyncHandler(async (req, res) => {
  const db = getDb();
  const { plant, user } = req.body;
  await db.collection("users").updateOne(
    { _id: new ObjectId(user) },
    {
      $push: {
        garden: {
          _id: new ObjectId(),
          createdAt: new Date(),
          plant: new ObjectId(plant),
          mode: "auto",
        },
      },
    }
  );

  res.json({ message: "section with provided plant added to user garden" });
});

// delete plant from user garden
export const deleteSection = expressAsyncHandler(async (req, res) => {
  const db = getDb();
  const { user, plant } = req.query;

  await db.collection("users").updateOne(
    { _id: new ObjectId(user) },
    {
      $pull: {
        garden: {
          _id: new ObjectId(plant),
        },
      },
    }
  );
  res.json({ message: "section removed from user garden" });
});

// update section current mode
export const updateSectionMode = expressAsyncHandler(async (req, res) => {
  const db = getDb();
  const { user, plant } = req.query;

  await db.collection("users").updateOne(
    {
      _id: new ObjectId(user),
      "garden._id": new ObjectId(plant),
    },
    {
      $set: { "garden.$.mode": req.body.mode },
    }
  );
  res.json({ message: "mode of section updated" });
});
