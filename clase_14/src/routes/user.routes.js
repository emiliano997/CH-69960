import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();

    // console.log(users);

    res.json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
