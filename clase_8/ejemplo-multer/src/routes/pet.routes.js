import { Router } from "express";
import { uploader } from "../middlewares/multerCustom.js";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  res.json(pets);
});

router.post("/", uploader.single("file"), (req, res) => {
  const { name, age } = req.body;
  console.log(req.body);

  if (!name || !age) {
    return res.status(400).json({
      error: "Los campos username y password son requeridos",
    });
  }

  pets.push({
    name,
    age,
  });

  res.status(201).json({
    pets: {
      name,
      age,
    },
  });
});

// export { router };
export default router;
