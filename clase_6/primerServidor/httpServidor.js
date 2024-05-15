// Primer servidor con http
const http = require("http");

// Creamos el servidor
// Pero todavía no está funcionando
const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.end("Mi primer servidor en Backend");
  }

  if (request.url === "/saludo") {
    // Consulto a un servidor

    // Obtengo los datos y devuelvo un objeto personalizado

    // Obtengo la cuenta de los datos del servidor

    response.end("Saludo desde el servidor");
  }
});

// Numero de puerto
// Puertos recomendables
// 3000
// 5000
// 8000
// 8080
const PORT = 5000;

// "Levantamos" nuestro servidor
server.listen(PORT, () => {
  console.log(`Server running on Port http://localhost:${PORT}`);
});
