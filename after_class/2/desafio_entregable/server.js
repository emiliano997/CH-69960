// Proyecto Ejemplo Express
// const express = require("express");
// const ProductManager = require("./ProductManager.js");
import express from "express";
import ProductManager from "./ProductManager.js";

// console.log(ProductManager.getProducts());

// Creamos nuestra app backend
const app = express();

// Definimos el puerto
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1> Bienvenido a mi API </h1>");
});

// Endpoint - Ruta - Url
app.get("/products", (req, res) => {
  res.json(ProductManager.getProducts());
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = ProductManager.getProductById(id);

  if (!product) {
    return res.status(404).json({
      error: "No se encontro el producto",
    });
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto http://localhost:${PORT}`);
});
