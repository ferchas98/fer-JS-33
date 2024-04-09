//funcion flecha
const suma = (a, b) => a + b;
console.log(suma(2, 3));

//this y scope
let hola = {
  nombre: "fernando",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};
hola.saludar();

//this y arrow function
let hey = {
  nombre: "damaris",
  saludar: () => {
    console.log(`Hola ${this.nombre}`);
  },
};
hey.saludar();
