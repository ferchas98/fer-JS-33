//Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
const nombreIniciales = (nombre, fatherName, motherName) => {
  let initialName = nombre.charAt(0);
  let initialFather = fatherName.charAt(0);
  let initialMother = motherName.charAt(0);
  let total = initialName + ". " + initialFather + ". " + initialMother + ".";

  return total;
};

let test = nombreIniciales("Fernando", "Ocampo", "Rodriguez");
console.log(test);

// Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún nombre al azar.
//El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta.
//Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.

let listaNombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Carlos", "Fer"];

function obtenerNombreAlAzar() {
  if (listaNombres.length === 0) {
    console.log("Ya no hay nombres en la lista.");
    return null;
  }

  const indice = Math.floor(Math.random() * listaNombres.length);
  const nombreSeleccionado = listaNombres.splice(indice, 1)[0];
  return nombreSeleccionado;
}

// console.log("Nombre seleccionado:", obtenerNombreAlAzar());
// console.log("Nombres restantes:", listaNombres);

// console.log("Nombre seleccionado:", obtenerNombreAlAzar());
// console.log("Nombres restantes:", listaNombres);

// console.log("Nombre seleccionado:", obtenerNombreAlAzar());
// console.log("Nombres restantes:", listaNombres);

// console.log("Nombre seleccionado:", obtenerNombreAlAzar());
// console.log("Nombres restantes:", listaNombres);

// console.log("Nombre seleccionado:", obtenerNombreAlAzar());
// console.log("Nombres restantes:", listaNombres);

// console.log("Nombre seleccionado:", obtenerNombreAlAzar());
// console.log("Nombres restantes:", listaNombres);

// console.log("Nombre seleccionado:", obtenerNombreAlAzar());
// console.log("Nombres restantes:", listaNombres);

for (let i = 0; i <= 7; i++) {
  const nombre = obtenerNombreAlAzar();
  if (nombre !== null) {
    console.log(`Nombre seleccionado - ${nombre}`);
    console.log("Nombres restantes:", listaNombres);
  } else if (i + 1) {
    console.log(`Ya no hay nombres en la lista.`);
  }
}
