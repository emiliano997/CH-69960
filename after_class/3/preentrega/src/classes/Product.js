class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.id = 0;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.status = true;
  }
}

export default Product;
