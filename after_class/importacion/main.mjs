let operacion = "restar";

if (operacion === "sumar") {
  // import("./modulo.mjs").then((modulo) => {
  //   console.log(modulo.sumar(2, 3));
  // });
  const { sumar } = await import("./modulo.mjs");
  console.log(sumar(2, 3));
} else if (operacion === "restar") {
  const { restar } = await import("./modulo.mjs");
  console.log(restar(2, 3));
}
