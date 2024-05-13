const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "/data/textoCb.txt");

fs.writeFile(filePath, "Escribiendo desde fs con callbacks", (error) => {
  if (error) return console.log("Hubo un problema con el archivo", error);

  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) return console.log("Hubo un problema con el archivo", error);

    console.log(data);

    fs.appendFile(filePath, "\nMás información desde callbacks", (error) => {
      if (error) return console.log("Hubo un problema con el archivo", error);

      fs.readFile(filePath, "utf-8", (error, data) => {
        if (error) return console.log("Hubo un problema con el archivo", error);

        console.log(data);

        // fs.unlink(filePath, (error) => {
        //   if (error)
        //     return console.log("Hubo un problema con el archivo", error);

        //   console.log("Se eliminó el archivo");
        // });

        fs.truncate(filePath, (error) => {
          if (error)
            return console.log("Hubo un problema con el archivo", error);

          console.log("Se eliminó los datos del archivo");
        });
      });
    });
  });
});
