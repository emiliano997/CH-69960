// Va a servir como cliente de socket.io
const socket = io();

// socket.emit("message", "Hola, soy el cliente");

// // Recibimos mensajes del servidor
// socket.on("serverMessage", (data) => {
//   console.log(data);
// });

// socket.on("serverMessage2", (data) => {
//   console.log(data);
// });

// socket.on("serverMessage3", (data) => {
//   console.log(data);
// });

const input = document.getElementById("input");
const enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
  socket.emit("message", input.value);

  input.value = "";
});

socket.on("mensajes", (mensajes) => {
  const mensajesUl = document.getElementById("mensajes");

  mensajesUl.innerHTML = "";

  mensajes.forEach((mensajes) => {
    const li = document.createElement("li");
    li.innerText = `${mensajes.socketid}: ${mensajes.mensaje}`;

    mensajesUl.appendChild(li);
  });
});
