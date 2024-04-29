class Evento {
  nombre;
  lugar;
  precio;
  capacidad;
  fecha;
  participantes;

  constructor(
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleDateString(),
    participantes = []
  ) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.precio = precio;
    this.capacidad = capacidad;
    this.fecha = fecha;
    this.participantes = participantes;
  }
}

class TicketManager {
  // # -> Variable privada
  #precioBaseGanancia = 1.15;
  eventos;
  id;

  constructor() {
    this.eventos = [];
    this.id = 1;
  }

  getEventos() {
    return this.eventos;
  }

  agregarEvento(evento) {
    evento.precio = evento.precio * this.#precioBaseGanancia;
    evento.id = this.id++;

    this.eventos.push(evento);
  }

  agregarUsuario(idEvento, idUsuario) {
    // Comprobamos que el evento exista
    const evento = this.eventos.find((evento) => evento.id === idEvento);

    if (!evento) {
      console.log("El evento no existe");
      return;
    }

    // Comprobamos que el usuario no esté registrado
    const user = evento.participantes.find((user) => user === idUsuario);

    if (user) {
      console.log("El usuario está registrado");
      return;
    }

    // Obtenemos el id del evento para reemplazar los datos
    const indexEvento = this.eventos.findIndex(
      (evento) => evento.id === idEvento
    );

    // Agregamos el usuario
    evento.participantes.push(idUsuario);

    this.eventos[indexEvento] = evento;

    console.log("Usuario agregado");
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    // Comprobamos que el evento exista
    const evento = this.eventos.find((evento) => evento.id === idEvento);

    if (!evento) {
      console.log("El evento no existe");
      return;
    }

    const nuevoEvento = new Evento(
      evento.nombre,
      nuevaLocalidad,
      evento.precio,
      evento.capacidad,
      nuevaFecha
    );

    nuevoEvento.id = this.id++;

    this.eventos.push(nuevoEvento);

    console.log("Se puso el evento en gira");
  }
}

// Pruebas
const manager = new TicketManager();

const nuevoEvento = new Evento("Charla Dev", "Usina del arte", 250);
const nuevoEvento2 = new Evento("Charla Dev 2", "Usina del arte 3", 300);

manager.agregarEvento(nuevoEvento);
manager.agregarEvento(nuevoEvento2);

// console.log(manager.getEventos());

// Agregar participantes
manager.agregarUsuario(1, 1);
manager.agregarUsuario(1, 1);

// console.log(manager.getEventos());

// Poner evento en gira
manager.ponerEventoEnGira(2, "Puerto madero", "30/04/2024");

console.log(manager.getEventos());
