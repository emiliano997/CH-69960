import express from "express";

const app = express();

// Puerto
const PORT = 5000;

// Configuración
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// "Base de datos" de la frase
const frase = ["Frase", "Inicial"];

// Endpoints - Rutas
// GET frase
app.get("/api/frase", (req, res) => {
  res.json({
    frase: frase.join(" "),
  });
});

// GET palabra
app.get("/api/palabra/:pos", (req, res) => {
  const { pos } = req.params;

  if (isNaN(Number(pos))) {
    return res.status(400).json({
      error: "El parámetro 'pos' debe ser un número",
    });
  }

  if (Number(pos) < 0 || Number(pos) > frase.length) {
    return res.status(404).json({
      error: "En esa posición no hay palabra",
    });
  }

  res.json({
    buscada: frase[Number(pos) - 1],
  });
});

// POST palabra
app.post("/api/palabra", (req, res) => {
  const { palabra } = req.body;

  if (!palabra) {
    return res.status(400).json({
      error: "Falta el parámetro 'palabra'",
    });
  }

  frase.push(palabra);

  res.json({
    agregada: palabra,
    pos: frase.length,
  });
});

// PUT palabra
app.put("/api/palabra/:pos", (req, res) => {
  const { pos } = req.params;
  const { palabra } = req.body;

  if (isNaN(Number(pos))) {
    return res.status(400).json({
      error: "El parámetro 'pos' debe ser un número",
    });
  }

  if (Number(pos) < 0 || Number(pos) > frase.length) {
    return res.status(404).json({
      error: "En esa posición no hay palabra",
    });
  }

  const anterior = frase[Number(pos) - 1];
  frase[Number(pos) - 1] = palabra;

  res.json({
    actualizada: palabra,
    anterior,
  });
});

// DELETE palabra
app.delete("/api/palabra/:pos", (req, res) => {
  const { pos } = req.params;

  if (isNaN(Number(pos))) {
    return res.status(400).json({
      error: "El parámetro 'pos' debe ser un número",
    });
  }

  if (Number(pos) < 0 || Number(pos) > frase.length) {
    return res.status(404).json({
      error: "En esa posición no hay palabra",
    });
  }

  frase.splice(Number(pos) - 1, 1);

  res.json({
    mensaje: "Palabra eliminada",
  });
});

app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto http://localhost:${PORT}`
  );
});
