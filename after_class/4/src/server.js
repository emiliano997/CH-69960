import express from "express";
import { Server } from "socket.io";
import __dirname from "./dirname.js";
import handlebars from "express-handlebars";
import viewsRoutes from "./routes/view.routes.js";
import productRoutes, { products } from "./routes/product.routes.js";
import path from "path";

const app = express();

const PORT = 5000;

// App configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../public")));

// Handlebars configuration
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
app.use("/api/products", productRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

// Socket.io configuration
export const io = new Server(server);

// socket: Cliente conectado
// io: Servidor de WebSocket
io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado", socket.id);

  socket.emit("products", products);
});
