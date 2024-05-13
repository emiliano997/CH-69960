// const fs = require("fs/promises")
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "/data/textoP.txt");

// const operaciones = async () => {}

async function operaciones() {
  // Otras operaciones sincronas

  const objeto = {
    nombre: "Juan",
    apellido: "Gigena",
    edad: 25,
  };

  try {
    // JSON.stringify(objeto) -> Convierte el objeto a texto plano
    // null -> es porque no le pasamos ninguna funcion
    // '\t' -> Es para darle formato al objeto dentro el archivo de texto
    await fs.promises.writeFile(filePath, JSON.stringify(objeto, null, "\t"));

    let resultado = await fs.promises.readFile(`${filePath}`, "utf-8");
    console.log(resultado);
    console.log(JSON.parse(resultado));

    // JSON.parse(resultado) -> Convierte texto en formato JSON a objeto de JavaScript
    const resultadoObjeto = JSON.parse(resultado);
    console.log(resultadoObjeto.edad);

    // await fs.promises.appendFile(filePath, "\nMás información desde promesas");

    resultado = await fs.promises.readFile(`${filePath}`, "utf-8"); // Se cortó la ejecución aca porque salió un error
    console.log(resultado);
    // console.log(JSON.stringify(resultado));
    // console.log(JSON.parse(resultado)); // Esto devuelve un error porque no cumple con el formato json

    // await fs.promises.unlink(filePath)
    // await fs.promises.truncate(filePath);
  } catch (error) {
    console.log("Hubo un error", error);
  } finally {
    console.log("Esto se ejecuta siempre");
  }
}

operaciones();
