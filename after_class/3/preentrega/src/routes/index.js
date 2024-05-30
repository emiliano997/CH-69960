import { Router } from "express";
import productRoutes from "./product.routes.js";
import cartRoutes from "./cart.routes.js";

const router = Router();

router.use("/products", productRoutes);
router.use("/carts", cartRoutes);

export default router;
