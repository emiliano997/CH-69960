import express from "express";
import indexRoutes from "./routes/index.js";

// Creamos nuestra app backend
const app = express();

// Definimos el puerto
const PORT = 5000;

// App configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1> Bienvenido a mi API </h1>");
});

// Endpoints
// app.use("/api/products", productRoutes);
// app.use("/api/carts", cartRoutes);
app.use("/api", indexRoutes);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto http://localhost:${PORT}`);
});
