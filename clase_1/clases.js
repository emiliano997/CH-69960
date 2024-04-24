// Class
// Molde, plantilla
class Persona {
  nombre;
  edad;
  direccion;

  static sangre = true;

  constructor(nombre, edad, direccion) {
    // this -> Hace referencia a la instancia, es decir, al objeto que se crea
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  getTieneSangre() {
    return Persona.sangre;
  }

  saludar() {
    return `Hola soy ${this.nombre}`;
  }
}

// Objeto
// Creación del molde o plantilla
// new -> Un nuevo objeto basado en el molde
// Persona -> El molde
// persona1 -> Objeto

// Instanciar
const persona1 = new Persona("Luca", 23, "Calle falsa 123");
const persona2 = new Persona("Fabrizio", 20, "Avenida Siempreviva 123");

console.log(persona1.getTieneSangre());
console.log(persona2.saludar());
console.log(Persona.sangre);
