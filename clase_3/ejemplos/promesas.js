// Primera promesa
function sumar(a, b) {
  return new Promise((resolve, reject) => {
    if (a <= 0 || b <= 0) {
      // reject en este caso corta la función
      reject(`Los numeros menores a 1 no son permitidos`);
    }
    if ((a + b) % 2 === 0) {
      // Resultado esperado
      resolve(a + b);
    } else {
      // Resultado no esperado
      reject(a + b);
    }
  });
}

// En teoria deberia devolver pending
// const resultado = sumar(5, 6);
// console.log(resultado);

// Esperamos a que la promesa se cumpla

// sumar(5, 10)
//   .then((respuesta) => console.log(respuesta)) // Se ejecuta cuando la promesa se cumple
//   .catch((error) => console.log(error)) // Se ejecuta cuando hay un error en la promesa o no se cumple
//   .finally(() => {
//     console.log("Esto se ejecuta siempre");
//   });

// Ejemplo de .then encadenado
sumar(2, 10)
  .then((resultado) => {
    console.log(resultado);
    return resultado * 6; // Otra promesa
    // return `El resultado es par ${resultado}`;
  })
  .then((numero) => {
    return numero / 2;
  })
  .then((resultado) => {
    console.log(resultado);
  });
