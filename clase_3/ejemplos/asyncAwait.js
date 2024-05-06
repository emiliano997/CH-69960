// async await
// Siempre se ejecuta dentro de un contexto (función) async

function resolverTarea2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarea 2");
      resolve(true);
    }, 2000);
  });
}

function resolverTarea3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Hubo un error");
      // console.log("Tarea 3");
      // resolve(true);
    }, 2000);
  });
}

// Uso de Async Await
// const resolverTareas = async () => {}
async function resolverTareas() {
  // Siempre usen try catch
  try {
    console.log("Tarea 1");
    const resultado = await resolverTarea2();

    console.log(resultado);

    if (resultado) {
      await resolverTarea3();
    }
  } catch (error) {
    // error -> Es lo que devuelve el reject
    console.log(error);
  }
}

resolverTareas();
