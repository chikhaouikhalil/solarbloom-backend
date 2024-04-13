import express from "express";
import cors from "cors";
import {
  addSectionToGarden,
  changePassword,
  deleteSection,
  getPlantsData,
  getUserData,
  signIn,
  signUp,
  updateSectionMode,
  updateUserData,
} from "./controllers.js";
import { connectToServer } from "./mongodb.js";
import { errorHandler, notFound } from "./errorMiddlewares.js";

const app = express();

await connectToServer();

app.use(cors());
app.disable("etag");
app.use(express.json({ limit: "50mb" }));

// CREATE NEW USER
app.post("/users/signup", signUp);

// SIGN IN USER
app.post("/users/signin", signIn);

// CREATE AND GET USER DATA
app.get("/users/user-data", getUserData);

// UPDATE USER DATA
app.put("/users/update-user", updateUserData);

// CHANGE USER PASSWORD
app.put("/users/change-password", changePassword);

// get plants
app.get("/plants", getPlantsData);

// add section to garden
app.post("/add-section", addSectionToGarden);

// delete section from garden
app.delete("/delete-section", deleteSection);

// update section data
app.put("/update-section-mode", updateSectionMode);

// HANDLE UNDEFINED ROUTES AND ERRORS
app.use(notFound);
app.use(errorHandler);

// SERVER LISTEN
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
