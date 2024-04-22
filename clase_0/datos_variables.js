// Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas),
// mostrar esos valores por consola, incrementar la edad en 1,
// agregar una serie a la lista y volver a mostrarlas.

// let -> Declaro la variable
// nombre -> Nombre de la variable
// = -> Asigno la variable
// "Emiliano" -> Dato de la variable
let nombre = "Emiliano";
let edad = 27;
let precio = 500.1;
let series = [
  "The chosen",
  "Game of Thrones",
  "Vikingos",
  "Breaking Bad",
  "Lost",
];
let peliculas = ["Francotirador", "Rambo", "Dune", "Submarine"];

console.log(nombre);
console.log(edad);
console.log(precio);
console.log(series);
console.log(peliculas);

// Consola
// cd -> Change Directory (Cambiar de carpeta)
// ls -> Listar elementos de una carpeta
// cd .. -> Ir a la carpeta anterior
// node .\datos_variables.js -> Ejecutar un archivo de JavaScript

// Incrementar numero en 1
// edad = edad + 1
// edad += 1
edad++;
console.log(edad);

// Agregar elementos a un array
peliculas.push("ET");
console.log(peliculas);
