// Función flecha
// const sumarArrow = (a, b) => a + b;

// // const resultado = sumar(10, 5);
// const resultado = sumarArrow(10, 5);

// console.log(resultado);

// function sumar(a, b) {
//   return a + b;
// }

// Reasignables
function mayorDe(n) {
  // Devuelvo una funcion
  return (m) => n < m;
}

const mayorQueDiez = mayorDe(10);

console.log(mayorQueDiez(5));
