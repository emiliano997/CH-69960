import { Router } from "express";
import { studentModel } from "../models/student.model.js";

const router = Router();

router.get("/", async (req, res) => {
  const { page, limit } = req.query;

  try {
    const students = await studentModel.paginate({}, { limit, page });
    // console.log(students);
    res.render("students", { students });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
