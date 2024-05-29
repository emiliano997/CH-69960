// Va a servir como cliente de socket.io
const socket = io();

socket.emit("message", "Hola, soy el cliente");

// Recibimos mensajes del servidor
socket.on("serverMessage", (data) => {
  console.log(data);
});

socket.on("serverMessage2", (data) => {
  console.log(data);
});

socket.on("serverMessage3", (data) => {
  console.log(data);
});
