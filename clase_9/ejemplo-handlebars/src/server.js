import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./dirname.js";
import viewsRoutes from "./routes/views.routes.js";
import path from "path";

const app = express();

// PORT
const PORT = 5000;

// Configuración de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../public")));

// Configuramos el engine de handlebars
app.engine(
  "hbs",
  handlebars.engine({
    // Configuro la extension de las plantillas
    extname: "hbs",
    // Plantilla por defecto
    defaultLayout: "main",
  })
);

// Seteamos el engine en express
app.set("view engine", "hbs"); // Configura el motor de plantillas
app.set("views", `${__dirname}/views`); // Setea la carpeta de las plantillas

// Rutas
// app.get("/", (req, res) => {
//   const data = {
//     nombre: "Marta",
//     alumnos: [
//       {
//         nombre: "Juan",
//         edad: 20,
//       },
//       {
//         nombre: "Pedro",
//         edad: 21,
//       },
//     ],
//   };

//   res.render("index", data);
// });

// app.get("/desafio", (req, res) => {
//   const users = [
//     {
//       nombre: "Leonardo",
//       apellido: "Valdez",
//       edad: 24,
//       correo: "leonardo@gmail.com",
//       telefono: "+34 999 999 999",
//     },
//     {
//       nombre: "Juan",
//       apellido: "Gigena",
//       edad: 21,
//       correo: "juan@gmail.com",
//       telefono: "+34 999 999 999",
//     },
//     {
//       nombre: "Pedro",
//       apellido: "Valdez",
//       edad: 22,
//       correo: "pedro@gmail.com",
//       telefono: "+34 999 999 999",
//     },
//     {
//       nombre: "Juan",
//       apellido: "Valdez",
//       edad: 23,
//       correo: "juan@gmail.com",
//       telefono: "+34 999 999 999",
//     },
//     {
//       nombre: "Pedro",
//       apellido: "Gigena",
//       edad: 24,
//       correo: "pedro@gmail.com",
//       telefono: "+34 999 999 999",
//     },
//   ];

//   const user = users[Math.floor(Math.random() * users.length)];

//   res.render("desafio", {
//     nombre: user.nombre,
//     apellido: user.apellido,
//     edad: user.edad,
//     correo: user.correo,
//     telefono: user.telefono,
//   });
// });

// Configuramos las rutas
app.use("/", viewsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port http://localhost:${PORT}`);
});
