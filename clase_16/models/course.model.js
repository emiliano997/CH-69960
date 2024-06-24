import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  title: String,
  description: String,
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  topics: {
    type: Array,
    default: [],
  },
  professor: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  students: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    default: [],
  },
});

courseSchema.pre("find", function () {
  this.populate("students");
  this.populate("professor");
});

export const courseModel = model("Course", courseSchema);
