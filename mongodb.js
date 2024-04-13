import { MongoClient } from "mongodb";

var _db;

// CONNECT TO DB
export const connectToServer = async () => {
  try {
    const client = await new MongoClient(
      "mongodb+srv://chikhaouikhl:21459708Az@cluster0.ntqal.mongodb.net/?retryWrites=true&w=majority"
    );
    await client.connect();
    console.log("connected to DB");
    _db = client.db(process.env.DB_NAME);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// GET DB TO INTERACT
export const getDb = () => {
  return _db;
};
