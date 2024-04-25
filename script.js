import { connectToServer, getDb } from "./mongodb.js";

import { newPlants } from "./newPlants.js";

const addplants = async () => {
  await connectToServer();
  const db = getDb();
  await db.collection("plants").deleteMany({});
  await db.collection("plants").insertMany(newPlants);
  console.log("kammalt");
};

addplants();
