import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";

// MongoDB Data
const user = "test_coder";
const password = "123";
// const cluster = "curso-nodejs";
const dbName = "ch69960";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

mongoose
  .connect(
    // `mongodb://localhost:27017/${dbName}`, -> Conexión local
    `...`
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
