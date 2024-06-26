import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const studentSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
});

studentSchema.plugin(mongoosePaginate);

export const studentModel = model("students", studentSchema);

// Ejemplo de uso
// studentModel.paginate({}, { limit: 5, page: 1})
