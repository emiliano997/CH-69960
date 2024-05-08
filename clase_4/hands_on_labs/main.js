// Importación en commonjs
const crypto = require("crypto");

class UsersManager {
  static users = [];

  static crearUsuario(nombre, apellido, username, password) {
    const hashPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user = {
      nombre,
      apellido,
      username,
      password: hashPassword,
    };

    // Se accede por medio de la clase porque es una propiedad static
    UsersManager.users.push(user);
  }

  static mostrarUsuarios() {
    UsersManager.users.forEach((user) => {
      console.log(user);
    });
  }

  static validarUsuario(username, password) {
    const user = UsersManager.users.find((user) => user.username === username);

    if (!user) {
      console.log("Usuario no existe");
      return;
    }

    const hashPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    console.log("User password: ", user.password);
    console.log("New Password: ", hashPassword);

    if (user.password !== hashPassword) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    console.log("Logueado");
  }
}

// Pruebas
UsersManager.crearUsuario("Federico", "Rossi", "federo", "1234");
UsersManager.crearUsuario("Matias", "Miron", "matimi", "56789");
UsersManager.crearUsuario("Ana", "Salas", "anita", "asdasdadas");

UsersManager.mostrarUsuarios();

UsersManager.validarUsuario("federo", "1234");
UsersManager.validarUsuario("matimi", "dasdadas");
UsersManager.validarUsuario("fulanito", "123353");
