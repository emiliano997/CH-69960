// console.log("Tarea 1");

// let resultado;

// // Simulación de asincronismo
// setTimeout(() => {
//   console.log("Tarea 2");
//   resultado = true;
// }, 2000);

// if (resultado) {
//   console.log("Tarea 3");
// } else {
//   console.log(resultado);
// }

// Resolver el asincronismo
function resolverTarea2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarea 2");
      resolve(true);
    }, 2000);
  });
}

function resolverTarea3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarea 3");
      resolve(true);
    }, 2000);
  });
}

console.log("Tarea 1");

resolverTarea2().then((resultado) => {
  // Para ejecutar la tarea 3, espero a que la tarea 2 finalice exitosamente
  if (resultado) {
    // console.log("Tarea 3");
    resolverTarea3().then((resultado) => {
      if (resultado) {
        // ...
      }
    });
  }
});
