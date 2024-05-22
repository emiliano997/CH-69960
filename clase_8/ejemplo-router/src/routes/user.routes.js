import { Router } from "express";

const router = Router();

const users = [];

router.get("/", (req, res, next) => {
  // return next("Error");
  res.json(users);
});

router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    // next("Los campos username y password son requeridos")
    return res.status(400).json({
      error: "Los campos username y password son requeridos",
    });
  }

  users.push({
    username,
    password,
  });

  res.status(201).json({
    user: {
      username,
      password,
    },
  });
});

export default router;
