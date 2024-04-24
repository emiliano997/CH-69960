const mostrarLista = (lista) => {
  if (lista.length === 0) return "Lista vacía";

  // Bucle for
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }

  // Metodo de array
  // lista.forEach((elemento) => console.log(elemento));

  // Devolvemos la longitud
  return `La lista tiene ${lista.length} elementos`;
};

// Casos de prueba
console.log(mostrarLista([])); // Lista vacía
console.log(mostrarLista([1, 2, 3]));
console.log(mostrarLista(["Valery", "Manuel", "Pisoni"]));
