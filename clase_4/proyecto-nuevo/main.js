// Importamos la librería
// import moment from 'moment' // "type": module
const moment = require("moment"); // commonjs

// console.log(moment());

// Desafio generico final
const fechaActual = moment();
const fechaNacimiento = moment("1997-01-19");

if (fechaNacimiento.isValid()) {
  let dias = fechaActual.diff(fechaNacimiento, "years");
  console.log(dias);
}
