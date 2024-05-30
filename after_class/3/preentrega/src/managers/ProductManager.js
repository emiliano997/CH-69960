import fs from "fs";
import __dirname from "../dirname.js";
import path from "path";

class ProductManager {
  constructor(path) {
    this.path = path;

    if (fs.existsSync(this.path)) {
      try {
        this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      } catch (error) {
        this.products = [];
      }
    } else {
      this.products = [];
    }
  }

  async addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("Todos los campos son obligatorios");
      throw new Error("Todos los campos son obligatorios");
    }

    if (this.products.some((p) => p.code === product.code)) {
      console.log("El código ya existe");
      throw new Error("El código ya existe");
    }

    if (this.products.length > 0) {
      const newId = this.products[this.products.length - 1].id + 1;
      product.id = newId;
    } else {
      product.id = 1;
    }

    this.products.push(product);

    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );

      console.log("Se agrego el producto correctamente");
    } catch (error) {
      throw new Error(error);
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(idProduct) {
    if (isNaN(Number(idProduct))) {
      console.log("El id debe ser un número");
      throw new Error("El id debe ser un número");
    }

    const product = this.products.find(
      (product) => product.id === Number(idProduct)
    );

    if (!product) {
      throw new Error("No se encontro el producto");
    }

    return product;
  }

  async deleteProduct(idProduct) {
    const productIndex = this.products.findIndex(
      (product) => product.id === idProduct
    );

    if (productIndex === -1) {
      throw new Error("No se encontro el producto");
    }

    this.products.splice(productIndex, 1);

    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );

      console.log("Se elimino el producto correctamente");
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProduct(idProduct, product) {
    const productIndex = this.products.findIndex(
      (product) => product.id === Number(idProduct)
    );

    const productOld = this.products[productIndex];

    const newProduct = {
      id: Number(idProduct),
      title: product.title || productOld.title,
      description: product.description || productOld.description,
      price: product.price || productOld.price,
      thumbnail: product.thumbnail || productOld.thumbnail,
      code: product.code || productOld.code,
      stock: product.stock || productOld.stock,
      status: product.status ?? productOld.status,
    };

    this.products[productIndex] = newProduct;

    console.log("Producto:", this.products[productIndex]);

    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );

      console.log("Se actualizo el producto correctamente");
    } catch (error) {
      throw new Error(error);
    }
  }
}

// export default new ProductManager("./data/products.json");
export const productManager = new ProductManager(
  path.resolve(__dirname, "./data/products.json")
);
