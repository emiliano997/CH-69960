import mongoose from "mongoose";
import { studentModel } from "./models/student.model.js";
import { studentsData } from "./data/students.js";

async function main() {
  await mongoose.connect("mongodb://localhost:27017/mongoAvanzado");

  // Insert Many
  // const result = await studentModel.insertMany(studentsData);

  // Find
  // const students = await studentModel.find();
  // console.log(students);

  // Desafio 1
  // const result = await studentModel.aggregate([
  //   {
  //     $group: {
  //       _id: "$grade",
  //       students: {
  //         $push: "$first_name",
  //         // $push: "$$ROOT", // Inserto el documento completo
  //       },
  //     },
  //   },
  //   {
  //     $sort: {
  //       _id: -1,
  //     },
  //   },
  // ]);
  // // console.log(JSON.stringify(result, null, 2));
  // console.log(result);

  // Desafio 2
  // const result = await studentModel.aggregate([
  //   {
  //     $group: {
  //       _id: "$group",
  //       students: {
  //         $push: "$first_name",
  //       },
  //     },
  //   },
  // ]);
  // console.log(result);

  // Desafio 3
  // const result = await studentModel.aggregate([
  //   {
  //     $match: {
  //       group: "1B",
  //     },
  //   },
  //   {
  //     $group: {
  //       _id: "$group",
  //       total: { $sum: "$grade" },
  //       totalStudents: { $sum: 1 },
  //     },
  //   },
  //   {
  //     $project: {
  //       _id: 0,
  //       promedio: {
  //         $divide: ["$total", "$totalStudents"],
  //       },
  //     },
  //   },
  // ]);
  // console.log(result);

  // Desafio 4
  // const result = await studentModel.aggregate([
  //   {
  //     $match: {
  //       group: "1A",
  //     },
  //   },
  //   {
  //     $group: {
  //       _id: "$group",
  //       average: { $avg: "$grade" },
  //     },
  //   },
  // ]);
  // console.log(result);

  // Desafio 5
  // const result = await studentModel.aggregate([
  //   {
  //     $group: {
  //       _id: "Total",
  //       avg: { $avg: "$grade" },
  //     },
  //   },
  // ]);
  // console.log(result);

  // Desafio 6
  // const result = await studentModel.aggregate([
  //   {
  //     $match: {
  //       gender: "Male",
  //     },
  //   },
  //   {
  //     $group: {
  //       _id: "$gender",
  //       promedio: { $avg: "$grade" },
  //     },
  //   },
  // ]);
  // console.log(result);

  // Desafio 7
  const result = await studentModel.aggregate([
    {
      $match: {
        gender: "Female",
      },
    },
    {
      $group: {
        _id: "$gender",
        promedio: { $avg: "$grade" },
      },
    },
  ]);
  console.log(result);
}

main();
