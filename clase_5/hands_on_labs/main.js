const fs = require("fs");

class UsersManager {
  constructor(path) {
    this.path = path;

    if (fs.existsSync(path)) {
      try {
        this.data = JSON.parse(fs.readFileSync(path, "utf-8"));
      } catch (error) {
        this.data = [];
      }
    } else {
      this.data = [];
    }
  }

  async guardarUsuario(nombre, apellido, edad, curso) {
    // Validación...

    // const user = { ... }

    this.data.push({
      nombre,
      apellido,
      edad,
      curso,
    });

    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.data, null, "\t")
    );
  }

  consultarUsuarios() {
    console.log(this.data);
  }
}

async function main() {
  const manager = new UsersManager("./data/users.json");

  await manager.guardarUsuario(
    "Leonardo",
    "Valdez",
    "Programación Backend",
    25
  );
  await manager.guardarUsuario(
    "Martin",
    "Kutzner",
    "Progrmaación Frontend",
    21
  );
  await manager.guardarUsuario("Federico", "Rossi", "Data Science", 18);

  manager.consultarUsuarios();
}

main();
