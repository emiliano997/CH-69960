// setTimeout
// Nos permite ejecutar una función luego de que se cumpla un tiempo definido por nosotros
// function saludar() {
//   console.log("Hola coder backend");
// }

// // Se ejecuta luego de 2 segundos
// const temporizador = setTimeout(() => {
//   saludar();

//   console.log("Otras operaciones");
// }, 1000);

// console.log("Tarea 1");
// console.log("Tarea 2");
// console.log("Tarea 3");

// setTimeout(() => {
//   // Para limpiar el timeout anterior
//   clearTimeout(temporizador);
//   console.log("Se evito que el primer timeout se ejecute");
// }, 500);

// setInterval
// Ejecuta una función en un intervalo de tiempo
let contador = 0;

const intervalo = setInterval(() => {
  console.log("Estoy dentro de un intervalo");
  contador++;

  if (contador == 3) {
    clearInterval(intervalo);
  }
}, 1000);

console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");

// setTimeout(() => {
//   console.log("Me canse del intervalo asique lo detengo");

//   clearInterval(intervalo);
// }, 2500);
