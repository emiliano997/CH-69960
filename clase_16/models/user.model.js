import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: String,
  gender: String,
});

// Agregar indices
// userSchema.index({ first_name: 1, last_name: 1 }, { unique: true });
// userSchema.index({ email: "text" });

export const userModel = model("users", userSchema);
