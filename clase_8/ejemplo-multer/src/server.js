import express from "express";
import userRoutes from "./routes/user.routes.js";
import petRoutes from "./routes/pet.routes.js";
import path from "path";
import __dirname from "./dirname.js";
import { logger } from "./middlewares/logger.js";

const app = express();

const PORT = 5000;

// Configuración de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Con path.resolve obtengo la ruta absoluta y, por medio de una ruta relativa, obtengo la carpeta public
// app.use("/static", express.static(path.resolve(__dirname, "../public")));
app.use(express.static(path.resolve(__dirname, "../public")));

// Custom middleware
app.use(logger);

// Implementación de las rutas
app.use("/api/user", userRoutes);
app.use("/api/pet", petRoutes);

// Capturaria los errores con este middleware
// app.use(function (error, req, res) {
//   console.log(error);
//   res.json({
//     error: "Hubo un error",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running on Port http://localhost:${PORT}`);
});
