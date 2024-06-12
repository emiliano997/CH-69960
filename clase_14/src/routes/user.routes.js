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

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;

    if (!first_name || !last_name || !email) {
      res.status(400).json({ error: "Faltan datos" });
    }

    // Forma 1
    // const user = new userModel({
    //   first_name,
    //   last_name,
    //   email,
    // });

    // await user.save();

    // Forma 2
    const user = await userModel.create({
      first_name,
      last_name,
      email,
    });

    return res.json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email } = req.body;

    console.log(first_name, last_name, email);

    const user = await userModel.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
    });

    return res.json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findByIdAndDelete(id);

    return res.json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
