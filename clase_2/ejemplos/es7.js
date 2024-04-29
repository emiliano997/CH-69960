// ** -> Exponencial

let x = 2 ** 5;
console.log(x);

// Array.includes() -> Verifica si el elemento existe en el array

const nombres = ["Marta", "Emanuel", "Martin", "Leonardo"];

// Forma tradicional
// for (let i = 0; i < nombres.length; i++) {
//   if (nombres[i] === "Martin") {
//     console.log("Martin está en la clase");
//   }
// }

// Forma moderna
console.log(nombres.includes("Emanul"));
if (nombres.includes("Martin")) {
  console.log("Martin está en el array");
}
