// Creamos la clase contador
class Contador {
  responsable;
  contadorIndividual;
  // Contador de instancias
  static contadorGlobal = 0;

  constructor(responsable) {
    // Se crea la instancia
    this.responsable = responsable;
    this.contadorIndividual = 0;

    // Contador.contadorGlobal = Contador.contadorGlobal + 1
    // Contador.contadorGlobal += 1
    // Suma uno cuando se crea una instancia
    Contador.contadorGlobal++;

    console.log("Objeto creado");
  }

  getResponsable() {
    return `El responsable se llama ${this.responsable}`;
  }

  contar = () => {
    this.contadorIndividual++;
  };

  getCuentaIndividual() {
    return this.contadorIndividual;
  }

  getCuentaGlobal() {
    return Contador.contadorGlobal;
  }
}

// Pruebas
const contador_1 = new Contador("Federico Rossi");
const contador_2 = new Contador("Juan Gigena");

contador_1.contar();
contador_1.contar();
contador_1.contar();

contador_2.contar();

// Mostrar los datos
console.log(contador_1.getResponsable());
console.log(contador_1.getCuentaIndividual());

console.log(contador_2.getResponsable());
console.log(contador_2.getCuentaIndividual());

// console.log(Contador.getCuentaGlobal());
console.log(`Hay ${Contador.getCuentaGlobal()} contadores`); // Con Static
// console.log(`Hay ${contador_1.getCuentaGlobal()} contadores`); // Sin static
