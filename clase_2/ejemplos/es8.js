const estudiante = {
  nombre: "Federico",
  apellido: "Rossi",
  edad: 24,
  curso: "Programación Backend",
  direccion: {
    calle: ["", ""],
    numero: {
      calle1: 123,
    },
  },
  peliculas: [
    {
      titulo: "Narnia",
    },
    {
      titulo: "Xmen",
    },
  ],
};

const estudiante2 = {
  nombre: "Federico",
  apellido: "Rossi",
  edad: 24,
  curso: "Programación Backend",
  direccion: {
    calle: ["", ""],
    numero: {
      calle1: 123,
      entreCalles: [
        {
          nombre: "Mitre",
        },
        {
          nombre: "9 de Julio",
        },
      ],
    },
  },
  peliculas: [
    {
      titulo: "Narnia",
    },
    {
      titulo: "Xmen",
    },
  ],
};

// Object.entries() -> Me devuelve un array de arrays con la clave y el valor
// [[clave, valor], [clave2, valor2], ...]
// console.log(Object.entries(estudiante));

// Object.keys() -> Me devuelve en un array solo las claves del objeto
// console.log(Object.keys(estudiante).length == Object.keys(estudiante2).length);

// Object.values() -> Me devuelve en un array solo los valores del objeto
console.log(Object.values(estudiante2));
