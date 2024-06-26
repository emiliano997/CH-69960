import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
});

export const studentModel = model("students", studentSchema);
