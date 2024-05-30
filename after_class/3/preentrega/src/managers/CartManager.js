import { productManager } from "./ProductManager.js";
import Cart from "../classes/Cart.js";
import __dirname from "../dirname.js";
import fs from "fs";
import path from "path";

class CartManager {
  constructor(path) {
    this.path = path;

    if (fs.existsSync(this.path)) {
      try {
        this.carts = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      } catch (error) {
        this.carts = [];
      }
    } else {
      this.carts = [];
    }
  }

  async createCart() {
    const latestId =
      this.carts.length > 0 ? this.carts[this.carts.length - 1].id + 1 : 1;

    const newCart = new Cart(latestId);

    this.carts.push(newCart);

    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.carts, null, "\t")
      );

      console.log("Se creo el carrito correctamente");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCart(idCart) {
    if (isNaN(Number(idCart))) {
      console.log("El id debe ser un número");
      throw new Error("El id debe ser un número");
    }

    const cart = this.carts.find((cart) => cart.id === Number(idCart));

    if (!cart) {
      throw new Error("No se encontro el carto");
    }

    return cart;
  }

  async addProductToCart(idCart, idProduct) {
    const cart = await this.getCart(idCart);

    if (!cart) {
      throw new Error("No se encontro el carto");
    }

    const product = await productManager.getProductById(idProduct);

    if (!product) {
      throw new Error("No se encontro el producto");
    }

    const productInCart = cart.products.find(
      (product) => product.productId === idProduct
    );

    if (productInCart) {
      console.log("Ya existe el producto en el carrito");

      cart.products.forEach((product) => {
        if (product.productId === idProduct) {
          product.quantity += 1;
        }
      });
    } else {
      cart.products.push({ productId: idProduct, quantity: 1 });
    }

    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.carts, null, "\t")
      );
      console.log("Se agrego el producto correctamente");
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const cartManager = new CartManager(
  path.resolve(__dirname, "./data/carts.json")
);
