// const fs = require("fs");
import fs from "fs";

// Clase Product
class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.id = 0;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

// Clase Product Manager
class ProductManager {
  // path -> Ruta del archivo de persistencia
  constructor(path) {
    this.path = path;

    // Chequeamos que el archivo exista
    if (fs.existsSync(this.path)) {
      try {
        // Si existe leemos el contenido
        this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      } catch (error) {
        // Si hubo un error, creamos un array vacío
        this.products = [];
      }
    } else {
      // Si no existe, creamos un array vacío
      this.products = [];
    }
  }

  async addProduct(product) {
    // Valida que todos los campos contengan datos
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    // Valida que el código no exista en el array
    // if (this.products.some((p) => p.code === product.code)) {
    //   console.log("El código ya existe");
    //   return;
    // }

    // [1, 2, 3, 4] -> [1, 3, 4] -> [1, 3, 4, 4] ❌
    // const newId = this.products.length + 1; ❌

    // [1, 2, 3, 4] -> [1, 2, 3] -> [1, 2, 3, 4] ✅
    // Primero chequemos que el array no esté vacio
    if (this.products.length > 0) {
      // Sino esta vacio le asignamos el id del último elemento + 1
      // Toma el id del último elemento
      const newId = this.products[this.products.length - 1].id + 1;
      product.id = newId;
    } else {
      // Si esta vacio le asignamos el id 1 para el primer producto
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
      console.log(error);
    }
  }

  getProducts() {
    // Devolvemos el array de productos
    return this.products;
  }

  getProductById(idProduct) {
    if (isNaN(Number(idProduct))) {
      console.log("El id debe ser un número");
      return;
    }

    // Buscamos el producto por su id
    const product = this.products.find(
      (product) => product.id === Number(idProduct)
    );

    if (!product) {
      return "No se encontro el producto";
    }

    return product;
  }

  deleteProduct(idProduct) {
    // Obtenemos el indice del producto
    const productIndex = this.products.findIndex(
      (product) => product.id === idProduct
    );

    if (productIndex === -1) {
      console.log("No se encontro el producto");
      return;
    }

    // Eliminamos el producto
    //  0  1  2
    // [1, 2, 3] -> [1] === (indice) 0
    // productIndex == 0
    // 1 -> Quiero eliminarlo
    this.products.splice(productIndex, 1);

    try {
      fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );

      console.log("Se elimino el producto correctamente");
    } catch (error) {
      console.log(error);
    }
  }

  updateProduct(idProduct, product) {
    // Obtenemos el indice del producto
    const productIndex = this.products.findIndex(
      (product) => product.id === idProduct
    );

    const productOld = this.products[productIndex];

    if (productIndex === -1) {
      console.log("No se encontro el producto");
      return;
    }

    // Actualizamos el producto
    // Si algun campo coincide con productOld, lo sobreescribimos
    this.products[productIndex] = {
      ...productOld,
      ...product,
    };

    try {
      fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );

      console.log("Se actualizo el producto correctamente");
    } catch (error) {
      console.log(error);
    }
  }
}

// module.exports = new ProductManager("./data/products.json");
export default new ProductManager("./data/products.json");

// Pruebas
// const manager = new ProductManager("./data/products.json");

// Add Product ✅
// manager.addProduct(
//   new Product("Product 1", "Description 1", 100, "image 1", "0001A", 10)
// );
// manager.addProduct(
//   new Product("Product 2", "Description 2", 200, "image 2", "0002B", 20)
// );
// manager.addProduct(
//   new Product("Product 3", "Description 3", 300, "image 3", "0003C", 30)
// );
// manager.addProduct(
//   new Product("Product 4", "Description 4", 400, "image 4", "0004D", 40)
// );

// Get Products ✅
// console.log(manager.getProducts());

// Get Product By Id ✅
// console.log(manager.getProductById(50));

// Delete Product ✅
// manager.deleteProduct(3);

// Update Product ✅
// manager.updateProduct(1, {
//   title: "Product 1 Updated",
// });
