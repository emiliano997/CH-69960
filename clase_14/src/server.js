import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";

// MongoDB Data
const user = "test_coder";
const password = "123";
// const cluster = "curso-nodejs";
const dbName = "ch69960";

const app = express();

const PORT = 5000;

mongoose
  .connect(
    // `mongodb://localhost:27017/${dbName}`, -> Conexión local
    `mongodb+srv://${user}:${password}@curso-nodejs.de1bv.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=curso-nodejs`
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
