// Desafio: Lectura y escritura de archivos

// Primero ejecutamos en la terminal npm init -y para generar el package.json

// Importamos fileSystem
const fs = require("fs");

// Promesas
// Leemos el archivo de package.json
// fs.promises
//   .readFile("package.json", "utf-8")
//   .then((data) => {
//     console.log(data);
//     const dataObjeto = JSON.parse(data);

//     const info = {
//       contenidoStr: data,
//       contenidoObj: dataObjeto,
//       size: data.length,
//     };

//     console.log(info);

//     // Escribimos el archivo de info.json
//     fs.promises
//       .writeFile("info.json", JSON.stringify(info, null, "\t"))
//       .then(() => console.log("Se escribió el archivo"))
//       .catch((error) => console.log(error));
//   })
//   .catch((error) => console.log(error)); // Es buena practica usar el .catch

// Async await
async function operacionPackage(fileName) {
  try {
    // await porque necesito los datos del archivo que estoy obteniendo
    const data = await fs.promises.readFile(fileName, "utf-8");

    console.log(data);

    const dataObjeto = JSON.parse(data);

    const info = {
      contenidoStr: data,
      contenidoObj: dataObjeto,
      size: data.length,
    };

    console.log(info);

    // Escribimos el archivo de info.json
    await fs.promises.writeFile("info.json", JSON.stringify(info, null, "\t"));

    console.log("Se escribió el archivo");
  } catch (error) {
    console.log(error);
  }
}

operacionPackage("package.json");
