console.log("Conectando...");

const socket = io();
// let socket;

const chatbox = document.getElementById("chatbox");
let user;

Swal.fire({
  title: "Bienvenido",
  text: "Escribe tu nombre de usuario",
  input: "text",
  inputValidator: (value) => {
    return !value && "Necesitas escribir un nombre";
  },
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
}).then((value) => {
  user = value.value;
  // socket = io()
  socket.emit("inicio", user);
});

chatbox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    socket.emit("message", {
      user,
      message: chatbox.value, // event.target.value
    });
    chatbox.value = "";
    console.log("Enviando mensaje:", chatbox.value);
  }
});

socket.on("connected", (data) => {
  if (user !== undefined) {
    Swal.fire({
      text: `Nuevo usuario conectado: ${data}`,
      toast: true,
      position: "top-right",
    });
  }
});

// Mostramos los mensajes recibidos
socket.on("messages", (data) => {
  console.log("Mensajes recibidos:", data);
  const messages = document.getElementById("messages");
  let content = "";

  data.forEach((message) => {
    content += `<p>${message.user}: ${message.message}</p>`;
  });

  messages.innerHTML = content;
});
