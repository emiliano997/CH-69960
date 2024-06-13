import { Router } from "express";
import { io } from "../server.js";

const router = Router();

// Products Database
export const products = [];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      error: "El producto no existe",
    });
  }

  res.json(product);
});

router.post("/", (req, res) => {
  const { id, title, price } = req.body;

  if (!id || !title || !price) {
    return res.status(400).json({
      error: "Los campos id, title y price son obligatorios",
    });
  }

  const productExists = products.find((product) => product.id === Number(id));

  if (productExists) {
    return res.status(400).json({
      error: "El producto ya existe",
    });
  }

  const product = {
    id,
    title,
    price,
  };

  products.push(product);

  io.emit("products", products);
  res.status(201).json(product);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  const productDB = products.find((product) => product.id === Number(id));

  if (!productDB) {
    return res.status(404).json({ message: "Product not found" });
  }

  const index = products.indexOf(productDB);
  products[index] = product;

  io.emit("products", products);
  return res.json(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const productDB = products.find((product) => product.id === Number(id));

  if (!productDB) {
    return res.status(404).json({ message: "Product not found" });
  }

  const index = products.indexOf(productDB);
  products.splice(index, 1);

  io.emit("products", products);
  return res.json({ message: "Product deleted" });
});

export default router;
