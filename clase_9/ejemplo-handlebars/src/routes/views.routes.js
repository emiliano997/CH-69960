import { Router } from "express";

const router = Router();

const users = [
  {
    nombre: "Leonardo",
    apellido: "Valdez",
    edad: 24,
    correo: "leonardo@gmail.com",
    telefono: "+34 999 999 999",
  },
  {
    nombre: "Juan",
    apellido: "Gigena",
    edad: 21,
    correo: "juan@gmail.com",
    telefono: "+34 999 999 999",
    isAdmin: false,
  },
  {
    nombre: "Pedro",
    apellido: "Valdez",
    edad: 22,
    correo: "pedro@gmail.com",
    telefono: "+34 999 999 999",
    isAdmin: false,
  },
  {
    nombre: "Juan",
    apellido: "Valdez",
    edad: 23,
    correo: "juan@gmail.com",
    telefono: "+34 999 999 999",
    isAdmin: true,
  },
  {
    nombre: "Pedro",
    apellido: "Gigena",
    edad: 24,
    correo: "pedro@gmail.com",
    telefono: "+34 999 999 999",
    isAdmin: true,
  },
];

router.get("/", (req, res) => {
  const data = {
    nombre: "Marta",
    alumnos: [
      {
        nombre: "Juan",
        edad: 20,
      },
      {
        nombre: "Pedro",
        edad: 21,
      },
    ],
  };

  res.render("index", data);
});

router.get("/profile", (req, res) => {
  const user = users[Math.floor(Math.random() * users.length)];

  res.render("profile", user);
});

router.get("/users", (req, res) => {
  res.render("users", { users, style: "/style.css" });
});

router.get("/desafio", (req, res) => {
  const users = [
    {
      nombre: "Leonardo",
      apellido: "Valdez",
      edad: 24,
      correo: "leonardo@gmail.com",
      telefono: "+34 999 999 999",
    },
    {
      nombre: "Juan",
      apellido: "Gigena",
      edad: 21,
      correo: "juan@gmail.com",
      telefono: "+34 999 999 999",
    },
    {
      nombre: "Pedro",
      apellido: "Valdez",
      edad: 22,
      correo: "pedro@gmail.com",
      telefono: "+34 999 999 999",
    },
    {
      nombre: "Juan",
      apellido: "Valdez",
      edad: 23,
      correo: "juan@gmail.com",
      telefono: "+34 999 999 999",
    },
    {
      nombre: "Pedro",
      apellido: "Gigena",
      edad: 24,
      correo: "pedro@gmail.com",
      telefono: "+34 999 999 999",
    },
  ];

  const user = users[Math.floor(Math.random() * users.length)];

  res.render("desafio", {
    nombre: user.nombre,
    apellido: user.apellido,
    edad: user.edad,
    correo: user.correo,
    telefono: user.telefono,
  });
});

export default router;
