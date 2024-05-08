// Resultado esperado
// const objeto = {
//   1: 213,
//   2: 231,
//   // ...
// };

// Desafio
// Creamos el objeto vacío
const resultado = {};

// Seteamos el limite y el máximo de rango para obtener el numero random
const limite = 1000;
const maximo = 20;

for (let i = 0; i < limite; i++) {
  // Obtenemos el numero random
  const random = Math.floor(Math.random() * maximo) + 1;

  // Chequeamos que el numero exista en el objeto
  if (resultado[random]) {
    // Si existe, le sumamos 1
    resultado[random] += 1;
  } else {
    // Sino existe, lo creamos en el objeto
    resultado[random] = 1;
  }
}

console.log(resultado);
