// .mjs -> Módulo de JavaScript

// import http from "http";

// String.trim()

const texto = "               dasds                                         ";

if (texto.trim().length > 0) {
  console.log(texto.trim());
} else {
  console.log("El string esta vacio");
}
console.log(texto.trim());

// Array.flat()

const estudiante1 = {
  nombre: "Federico",
  apellido: "Rossi",
  edad: 24,
  curso: "Programación Backend",
  carrera: "Full Stack Developer",
  colores: ["Azul", "Verde"],
};

const array = Object.entries(estudiante1);

// console.log(array.flat());
