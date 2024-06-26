import { Router } from "express";
import { studentModel } from "../models/student.model.js";

const router = Router();

router.get("/", async (req, res) => {
  const { page, limit } = req.query;

  try {
    const students = await studentModel.paginate({}, { limit, page });
    // console.log(students);

    // const response = {
    //   students,
    //   nextLink: "/?page=" + (page + 1) + "&limit=" + limit,
    //   prevLink: "/?page=" + (page - 1) + "&limit=" + limit,
    // };

    res.render("students", { students });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Ejemplo endpoint /api/products
router.get("/students", async (req, res) => {
  const { page, limit, query } = req.query;

  try {
    const students = await studentModel.paginate(
      { group: query },
      { limit, page }
    );
    // console.log(students);

    res.json({
      status: "success",
      ...students,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
