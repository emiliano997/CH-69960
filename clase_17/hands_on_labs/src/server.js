import express from "express";
import mongoose from "mongoose";
import path from "path";
import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import __dirname from "./dirname.js";
import viewsRoutes from "./routes/view.routes.js";

const app = express();

// Puerto
const PORT = 5000;

// App Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars config
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);

app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));

// MongoDB connection
mongoose
  .connect(`mongodb://localhost:27017/mongoAvanzado`)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use("/", viewsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
