import { Router } from "express";
import { taskModel } from "../models/task.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await taskModel.find();
    console.log(tasks);
    res.render("index", { tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
