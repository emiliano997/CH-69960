import { Router } from "express";
import { products } from "./product.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { products });
});

router.get("/realtimeproducts", (req, res) => {
  res.render("realtimeproducts");
});

export default router;
