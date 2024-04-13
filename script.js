import { connectToServer, getDb } from "./mongodb.js";
import { PLANTS } from "./plants.js";

const addplants = async () => {
  await connectToServer();
  const db = getDb();
  await db.collection("plants").deleteMany({});
  await db.collection("plants").insertMany(PLANTS);
  console.log("kammalt");
};

addplants();
