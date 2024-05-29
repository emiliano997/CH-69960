import express from "express";
import path from "path";
import __dirname from "./dirname.js";
import handlebars from "express-handlebars";
import viewsRoutes from "./routes/views.routes.js";
import { Server } from "socket.io";

const app = express();

// PORT
const PORT = 5000;

// App Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../public")));

// Handlebars Configuration
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// Routes
app.use("/", viewsRoutes);

const httpServer = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Mensajes
const mensajes = [];

// Socket.io configuration
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado", socket.id);

  // Esperamos al evento "message" enviado por el cliente
  // socket.on("message", (data) => {
  //   console.log(data);
  // });

  // Mensajes del lado del servidor
  // socket.emit("serverMessage", "Hola, soy el servidor"); // Envía al cliente conectado

  // socket.broadcast.emit(
  //   "serverMessage2",
  //   `Hola a todos menos a este socket ${socket.id}`
  // ); // Envía a todos los clientes excepto al cliente desde el cual se envia el mensaje

  // io.emit("serverMessage3", "Hola a todos"); // Envía a todos los clientes

  // Desafio
  socket.on("message", (data) => {
    // console.log(data);

    mensajes.push({
      socketid: socket.id,
      mensaje: data,
    });

    io.emit("mensajes", mensajes);
  });

  io.emit("mensajes", mensajes);
});
