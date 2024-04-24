// let -> Variables reasignables
// Ámbito global
// Variable global
// let nombre = "Cesar";

// function cambiarNombre() {
//   // Ámbito de la función
//   if (nombre == "Cesar") {
//     // Ámbito del if
//     // Accedo a la variable "global"
//     nombre = "Leonardo";
//     let edad = 23;

//     // Variable local
//     // let nombre = "Leaonardo";
//     // console.log(nombre);
//   }
//   // ReferenceError: edad is not defined
//   // console.log(edad);
// }

// cambiarNombre();
// console.log(nombre);

// const -> Variables constantes no reasignables

// const fecha = "24/04";

// console.log("Hoy es", fecha);

// TypeError
// fecha = "27/04"

// Mutabilidad
// Arrays y Objetos son mutables
// Uso general de arrays
const numeros = [];

console.log(numeros);

numeros.push(3); // Mutando el array
numeros[0] = 51; // Mutando el array
// numeros = 51 -> Reasignar

console.log(numeros);

const persona = { nombre: "Pedrito" };

// Esto esta bien
persona.nombre = "Santiago";

// Esto esta mal
// persona = { nombre: "Santiago" };

console.log(persona);
