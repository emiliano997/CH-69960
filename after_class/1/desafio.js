const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

// Obtener todos los tipos de producto
const tiposProducto = [];

objetos.forEach((lista) => {
  Object.keys(lista).forEach((tipo) => {
    if (!tiposProducto.includes(tipo)) {
      tiposProducto.push(tipo);
    }
  });
});

console.log(tiposProducto);

// Obtener el total de productos vendidos

let total = 0;

objetos.forEach((lista) => {
  Object.values(lista).forEach((valor) => {
    total += valor;
  });
});

console.log(total);

// Listar productos repetidos
const productosRepetidos = {};

objetos.forEach((lista) => {
  Object.keys(lista).forEach((tipo) => {
    if (productosRepetidos[tipo]) {
      productosRepetidos[tipo] += 1;
    } else {
      productosRepetidos[tipo] = 1;
    }
  });
});

console.log(productosRepetidos);
