// spread operator

const estudiante1 = {
  nombre: "Federico",
  apellido: "Rossi",
  edad: 24,
  curso: "Programación Backend",
  carrera: "Full Stack Developer",
};

const estudiante2 = {
  nombre: "Martin",
  apellido: "Kutzner",
  edad: 21,
  curso: "Programación Backend",
};

// Operaciones de actualizacion de datos
const estudiante3 = { ...estudiante1, ...{ nombre: "Ana", color: "Azul" } }; // Devuelve un nuevo objeto

// console.log(estudiante3);

const nombres = ["Pedro", "Juanito", "Fulano"];
const nombres2 = ["Pedro", "Valentin"];

const nombres3 = [...nombres, ...nombres2]; // Agrega los valores, no los reemplaza

// console.log(nombres3);

// Rest operator

// Obtengo los datos que nombro (curso, color) y con el rest (...) obtengo un objeto con
// El resto de las propiedades de este objeto
const { curso, color, ...restoDePropiedades } = estudiante3;

console.log(curso);
console.log(color);
console.log(restoDePropiedades.nombre);
