// Closure
// Es cuando una función hija (funcion dentro de otra), hace uso de variables
// de la función padre
function mostrarMensaje() {
  // Propiedad de la función
  let mensaje = "Este es un mensaje";

  function otroMensaje() {
    // Variable de la función padre
    mensaje = "Este es otro mensaje";
    console.log(mensaje);
  }

  otroMensaje();
}

mostrarMensaje();
