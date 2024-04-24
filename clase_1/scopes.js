// Ámbito (Scope) global
// let nombre = "Mateo";

// function getNombre() {
//   // Ambito (Scope) local
//   // let nombre = "Sebastian";

//   // Accedo a la variable del scope global
//   // nombre = "Sebastian";

//   console.log("Funcion", nombre);
//   // return nombre;
// }

// getNombre();

// console.log("Global", nombre);

// Template string
// dentro de template string puedo escribir javascript

const nombre = "Fabrizio";

console.log("Nombre:", nombre); // Pasarlo como otro parametro en el console.log
console.log("Nombre: " + nombre); // Concatenar
console.log(`Nombre: ${nombre}`); // Template string

// Operador ternario: condicion (nombre === "Fabrizio"), if (?) else (:)
console.log(`¿Se llama Fabrizio? ${nombre === "Fabrizio" ? true : false}`);
console.log(`Edad: ${1995 - 2024}`);
