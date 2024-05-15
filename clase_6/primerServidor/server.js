// Primer servidor en Express.js
const express = require("express");

const app = express(); // Crea una aplicación de express

// Puerto de la aplicación
const PORT = 5000;

// Creamos nuestras rutas
app.get("/", (request, response) => {
  // .send -> Envia texto plano o HTML
  // response.send(`<h1> Mi primer saludo con express </h1>`);

  // .json -> Devuelve los datos en formato json
  response.json({
    nombre: "Belen",
    apellido: "Aguirre",
  });
});

// Params
app.get("/saludo/:tipo/:sueldo", (req, res) => {
  // :tipo -> La clave
  // http://localhost:5000/saludo/jefe -> El valor que ingresa el cliente
  // params: { tipo: "jefe" } -> Objeto params final
  // console.log(req.params);

  // Obtener los datos de req.params
  // const tipo = req.params.tipo;
  // const sueldo = req.params.sueldo;

  const { tipo, sueldo } = req.params; // La mejor forma de obtener los datos

  if (isNaN(sueldo)) {
    res.send("No es un numero valido");
    // Corto el flujo de ejecucion
    return;
  }

  res.send(`Hola ${tipo}! Tu sueldo es de ${sueldo}`);
});

// Query
app.get("/products", (req, res) => {
  const { nombre, precio } = req.query;

  console.log(req.query);
  console.log(nombre, precio);

  const productos = [
    {
      id: 1,
      precio: 100,
      nombre: "Camisa",
      descripcion: "Camisa blanca",
    },
    {
      id: 2,
      precio: 180,
      nombre: "Pantalon",
      descripcion: "Pantalon rayado",
    },
    {
      id: 3,
      precio: 90,
      nombre: "Zapatos",
      descripcion: "Zapatos negros",
    },
    {
      id: 4,
      precio: 200,
      nombre: "Blusa",
      descripcion: "Blusa azul",
    },
  ];

  const newProducts = productos.filter(
    (prod) => prod.nombre === nombre || prod.precio === Number(precio)
  );

  res.json(newProducts);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const idSearch = Number(id);

  if (isNaN(idSearch)) {
    res.json({
      error: "El id no es un numero valido",
    });
    return;
  }

  const productos = [
    {
      id: 1,
      precio: 100,
      nombre: "Camisa",
      descripcion: "Camisa blanca",
    },
    {
      id: 2,
      precio: 180,
      nombre: "Pantalon",
      descripcion: "Pantalon rayado",
    },
    {
      id: 3,
      precio: 90,
      nombre: "Zapatos",
      descripcion: "Zapatos negros",
    },
    {
      id: 4,
      precio: 200,
      nombre: "Blusa",
      descripcion: "Blusa azul",
    },
  ];

  // Simula una busqueda en la base de datos
  const product = productos.find((prod) => prod.id === idSearch);

  if (!product) {
    res.json({
      error: "Product not found",
    });
    return;
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on Port http://localhost:${PORT}`);
});
