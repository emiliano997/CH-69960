import mongoose from "mongoose";
import { userModel } from "./models/user.model.js";
import { courseModel } from "./models/course.model.js";

const url = "mongodb://localhost:27017/mongoAvanzado";

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/mongoAvanzado");
//   let response = await userModel
//     .find({ first_name: "Celia" })
//     .explain("executionStats");
//   console.log(response);
// }

async function main() {
  await mongoose.connect(url);

  // await courseModel.create({
  //   title: "Programación Backend I",
  //   description: "Curso de Backend Parte 1",
  //   difficulty: "Intermediate",
  //   professor: "Arturo",
  //   topics: ["Backend", "JavaScript", "MongoDB"],
  // });

  const course = await courseModel.findById("667981e8e9643ad1ba8f234b");
  // console.log(course);

  // const student = await userModel.findOne({ first_name: "Frieda" });
  // const professor = await userModel.findOne({ first_name: "Barde" });
  // console.log(student);

  // Agregar estudiante al curso
  // course.students.push({ student: student._id });
  // course.students.push(student._id);
  // course.professor = professor._id;

  // Actualizamos el curso
  // await course.save();

  // Obtener curso con los estudiantes
  const newCourse = await courseModel.find();

  console.log(newCourse[0]);
}

main();
