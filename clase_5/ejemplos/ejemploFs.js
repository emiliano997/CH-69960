// Trabajamos con FileSystem (fs)
// import fs from "fs" // Importación de tipo modulo
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "/data/texto.txt");

// Creo y escribo en el archivo texto.txt
fs.writeFileSync(filePath, "Mi primer archivo con javascript");

if (fs.existsSync(filePath)) {
  console.log("El archivo existe");

  // Leo el contenido codificado en utf-8
  let content = fs.readFileSync(filePath, "utf-8");

  console.log(content);

  // Agrego contenido al archivo
  fs.appendFileSync(filePath, "\nOtra información super importante");

  fs.appendFileSync(
    filePath,
    `Mas información dentro del archivo
  
    Otro texto
  `
  );

  content = fs.readFileSync(filePath, "utf-8");

  console.log(content);

  // Eliminamos el archivo
  // fs.unlinkSync(filePath);

  // Eliminar el contenido
  fs.truncateSync(filePath);
}
