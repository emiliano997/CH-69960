// Foreach casero argento
function paCadaUno(lista, operacion) {
  for (let i = 0; i < lista.length; i++) {
    // Es el callback que le envio cuando llamo a la función paCadaUno
    operacion(lista[i]);
  }
}

// Map casero
function mapeando(lista, operacion) {
  const nuevaLista = [];

  for (let i = 0; i < lista.length; i++) {
    // Es el callback que le envio cuando llamo a la función paCadaUno
    const resultado = operacion(lista[i]);
    nuevaLista.push(resultado);
  }

  return nuevaLista;
}

const nombres = ["Fabrizio", "Luis", "Dalmiro", "Sonia"];

function mostrarNombres(nombre) {
  console.log(nombre);
}

// Uso del callback
// Callback: Es una función anónima que se pasa por parametro
// elemento == lista[i]
// Parametros: lista (nombres), operacion (función anónima)
// paCadaUno(nombres, (elemento) => {
//   const numero = 1;
//   console.log("Nombre:", elemento, numero);
// });
// paCadaUno(nombres, mostrarNombres);

// Ejemplo operaciones
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

function realizarOperacion(numero1, numero2, operacion) {
  const resultado = operacion(numero1, numero2);
  console.log(resultado);
  return resultado;
}

realizarOperacion(3, 5, (a, b) => a + b);
realizarOperacion(3, 5, restar);
realizarOperacion(3, 5, multiplicacion);
realizarOperacion(3, 5, division);

// Ejemplo
// Callback
function algoQuePuedeFallar(error, respuesta) {
  // Chequea que el error exista
  if (error) return "Hubo un error";

  console.log(respuesta);
}

function ejecucioDeAlgunaOperacion() {
  try {
    // ...Operaciones
    algoQuePuedeFallar(null, "Resultado");
  } catch (error) {
    algoQuePuedeFallar(error);
  }
}
