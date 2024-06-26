import mongoose from "mongoose";
import { orderModel } from "./models/order.model.js";

async function main() {
  await mongoose.connect("mongodb://localhost:27017/mongoAvanzado");

  // Insert Many
  // const result = await orderModel.insertMany([
  //   {
  //     name: "Pepperoni",
  //     size: "small",
  //     price: 19,
  //     quantity: 10,
  //     date: "2021-05-01",
  //   },
  //   {
  //     name: "Pepperoni",
  //     size: "medium",
  //     price: 20,
  //     quantity: 20,
  //     date: "2021-05-02",
  //   },
  //   {
  //     name: "Pepperoni",
  //     size: "large",
  //     price: 21,
  //     quantity: 30,
  //     date: "2021-05-03",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "small",
  //     price: 12,
  //     quantity: 15,
  //     date: "2021-05-04",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "medium",
  //     price: 13,
  //     quantity: 50,
  //     date: "2021-05-05",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "large",
  //     price: 14,
  //     quantity: 10,
  //     date: "2021-05-06",
  //   },
  //   {
  //     name: "Vegan",
  //     size: "small",
  //     price: 17,
  //     quantity: 10,
  //     date: "2021-05-07",
  //   },
  //   {
  //     name: "Vegan",
  //     size: "medium",
  //     price: 18,
  //     quantity: 10,
  //     date: "2021-05-08",
  //   },
  // ]);
  // console.log(result);

  // Find
  // const orders = await orderModel.find();
  // console.log(orders);

  // Aggregations
  const size = "large";

  const result = await orderModel.aggregate([
    {
      // Stage 1: Buscar todos los pedidos que coincidan con el tamaño
      $match: {
        size,
      },
    },
    {
      // Stage 2: Agrupar los pedidos
      $group: {
        _id: "$name",
        price: {
          $avg: "$price",
        },
        totalSells: {
          $sum: "$quantity",
        },
        size: { $first: "$size" },
      },
    },
    {
      // Stage 3: Ordenar los resultados por ventas
      $sort: {
        totalSells: -1,
      },
    },
    {
      // Stage 4: Agrupar en un nuevo grupo
      // $$ROOT -> Hace referencia al resultado de la operacion anterior
      $group: {
        _id: "banana", // Inserto un id generico para crear el grupo
        orders: {
          $push: "$$ROOT",
        },
      },
    },
    {
      // Stage 5: Crear un nuevo documento
      $project: {
        _id: 0, // Elimino el id generado en el paso anterior
        orders: "$orders",
      },
    },
    {
      // Stage 6: Insertar el nuevo documento en otra colección
      $merge: {
        into: "reports",
      },
    },
  ]);
  console.log(result);
}

main();
