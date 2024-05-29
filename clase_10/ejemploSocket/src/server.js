import express from "express";
import path from "path";
import __dirname from "./dirname.js";
import handlebars from "express-handlebars";
import viewsRoutes from "./routes/views.routes.js";

const app = express();

// PORT
const PORT = 5000;

// App Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../public")));

// Handlebars Configuration
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// Routes
app.use("/", viewsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
