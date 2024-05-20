// const express = require("express");
import express from "express";

// Creamos nuestra App
const app = express();

// Configuramos nuestro server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PORT
const PORT = 5000;

// Datos en memoria
const users = [];
let id = 1;

// Endpoints - Rutas
// GET users
// Obtener usuarios
app.get("/users", (req, res) => {
  res.json(users);
});

// POST users
// Agregar usuarios
app.post("/users", (req, res) => {
  console.log(req.body);

  const { username, full_name, age } = req.body;

  if (!username || !full_name || !age) {
    return res
      .status(400) // Error del cliente
      .json({
        message: "username and full_name are required", // Devolemos un mensaje de error
      });
  }

  // Validamos que el nombre de usuario no exista
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({
      message: "username already exists",
    });
  }

  const user = {
    id: id,
    username,
    full_name,
    age,
  };

  id++;

  users.push(user);

  res.status(201).json({
    message: "User created successfully",
  });
});

// PUT users
// Actualizar usuarios
// app.put("/users/:id", (req, res) => {})
app.put("/users/:username", (req, res) => {
  // Obtengo el username de req.params
  const { username } = req.params;

  // Obtengo los datos a actualizar de req.body
  const { full_name, age } = req.body;

  // Busco el usuario a actualizar
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // Actualizo el usuario
  user.full_name = full_name || user.full_name;
  user.age = age || user.age;

  // Actualizo el usuario dentro del array
  const userIndex = users.findIndex((user) => user.username === username);
  users[userIndex] = user;

  res.json({
    message: "User updated successfully",
  });
});

// DELETE user
// Eliminar usuario
// app.delete("/users/:id", (req, res) => {})
app.delete("/users/:username", (req, res) => {
  // Obtengo el username de req.params
  const { username } = req.params;

  // Busco el usuario a eliminar
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // Elimino el usuario del array
  const userIndex = users.findIndex((user) => user.username === username);
  users.splice(userIndex, 1);

  res.json({
    message: "User deleted successfully",
  });
});

// Listen de la App
app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto http://localhost:${PORT}`
  );
});
