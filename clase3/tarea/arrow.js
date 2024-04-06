//Filtrado de Números Pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtrarNumerosPares = (numeros) =>
  numeros.filter((numero) => numero % 2 === 0);

console.log(filtrarNumerosPares(numeros));

//Cálculo del Área de un Círculo
const calcularAreaCirculo = (radio) => Math.PI * radio * radio;

console.log(calcularAreaCirculo(5));

//Concatenación de Nombres
const nombres = ["Juan", "María", "Carlos", "Ana"];

const concatenarNombres = (nombres) => nombres.join(", ");

console.log(concatenarNombres(nombres));
