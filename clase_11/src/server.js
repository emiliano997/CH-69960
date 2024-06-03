import express from "express";
import { Server } from "socket.io";
import __dirname from "./dirname.js";
import path from "path";

// Creamos nuestra app
const app = express();

// PORT
const PORT = 5000;

// App Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../public")));

const httpServer = app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

// Socket.io configuration
const io = new Server(httpServer);

const messages = [];

io.on("connection", (socket) => {
  // Lógica de buscar el usuario
  // if (socket.handshake.auth.name !== "Juan") {
  //   socket.disconnect();
  // }

  console.log("Nuevo cliente conectado:", socket.id);

  // Manejamos los mensajes que recibimos
  socket.on("message", (data) => {
    messages.push(data);
    io.emit("messages", data);
  });

  // Manejamos cuando un cliente inicia sesión
  socket.on("inicio", (data) => {
    io.emit("inicio", data);
    socket.broadcast.emit("connected", data);
  });

  socket.emit("messages", messages);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});
