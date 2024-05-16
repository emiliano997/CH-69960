// Desafio: Almacenar fecha y hora

// Importamos fileSystem
const fs = require("fs");

// Obtenemos la fecha
const fecha = new Date();

// Formateamos la fecha
const fechaFormateada = fecha.toLocaleString();

// Escribimos la fecha en el archivo
fs.writeFile("fecha.txt", fechaFormateada, (error) => {
  if (error) {
    console.log(error);
  }

  // Leemos la fecha desde el archivo
  fs.readFile("fecha.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }

    console.log(data);
  });
});
