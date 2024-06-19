import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./dirname.js";
import path from "path";
import taskRouter from "./routes/task.routes.js";
import viewRouter from "./routes/view.routes.js";
import mongoose from "mongoose";

const app = express();

const PORT = 5000;

// MongoDB connection
mongoose
  .connect(`mongodb://127.0.0.1:27017/taskDB`)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Server config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars config
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));

// Routes
app.use("/api/tasks", taskRouter);
app.use("/", viewRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
