// Ejemplo 1: Contar los caracteres de una frase
const frase = "La mejor forma de predecir el futuro es creándolo";
const numeroCaracteres = contarCaracteres(frase);

console.log("El número total de caracteres en la frase es:", numeroCaracteres);

function contarCaracteres(frase) {
  return frase.length;
}

// Ejemplo 2: Contar palabras en una frase
function contarLetras(frase) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    const caracter = frase.charAt(i);
    if (
      (caracter >= "a" && caracter <= "z") ||
      (caracter >= "A" && caracter <= "Z")
    ) {
      contador++;
    }
  }
  return contador;
}

const resultado = contarLetras(frase);
console.log("La frase tiene " + resultado + " letras.");

// Ejemplo 3: Contar palabras en una frase
const palabras = frase.split(" ").length;
console.log("Número de palabras en la frase:", palabras);

// Ejemolo 4: Obtener la misma frase pero en mayúsculas
const fraseMayusculas = frase.toUpperCase();
console.log("La frase en mayúsculas:", fraseMayusculas);

// Ejemplo 5: Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
function reemplazarLetraA(frase) {
  let nuevaFrase = "";
  for (let i = 0; i < frase.length; i++) {
    if (
      frase[i] === "a" ||
      frase[i] === "A" ||
      frase[i] === "á" ||
      frase[i] === "Á"
    ) {
      nuevaFrase += "4";
    } else {
      nuevaFrase += frase[i];
    }
  }
  return nuevaFrase;
}

// Ejemplo de uso:
const resultado1 = reemplazarLetraA(frase);
console.log("La nueva frase sustituyendo las a por 4 es: " + resultado1);
