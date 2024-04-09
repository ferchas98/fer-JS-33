const frase = "la mejor forma de predecir el futuro es creándolo";

// 1. Saber cuántos caracteres tiene la frase
const caracteres = frase.length;
console.log("1. Número de caracteres:", caracteres);

// 2. Saber cuántas letras tiene la frase
const letras = frase.replace(/ /g, "").length;
console.log("2. Número de letras:", letras);

// 3. Saber cuántas palabras tiene la frase
const palabras = frase.split(" ").length;
console.log("3. Número de palabras:", palabras);

// 4. Obtener la misma frase pero en mayúsculas
const fraseMayusculas = frase.toUpperCase();
console.log("4. Frase en mayúsculas:", fraseMayusculas);

// 5. Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
const fraseReemplazada = frase
  .replace(/a/g, "4")
  .replace(/A/g, "4")
  .replace(/á/g, "4")
  .replace(/Á/g, "4");
console.log("5. Frase con letras 'a' reemplazadas:", fraseReemplazada);

// Refactorización del código anterior utilizando funciones

// Función para saber cuántos caracteres tiene la frase
function contarCaracteres(frase) {
  return frase.length;
}

// Función para saber cuántas letras tiene la frase
function contarLetras(frase) {
  return frase.replace(/ /g, "").length;
}

// Función para saber cuántas palabras tiene la frase
function contarPalabras(frase) {
  return frase.split(" ").length;
}

// Función para obtener la misma frase pero en mayúsculas
function convertirMayusculas(frase) {
  return frase.toUpperCase();
}

// Función para obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
function reemplazarLetrasA(frase) {
  return frase
    .replace(/a/g, "4")
    .replace(/A/g, "4")
    .replace(/á/g, "4")
    .replace(/Á/g, "4");
}

// Llamadas a las funciones e impresión de resultados
console.log("1. Número de caracteres:", contarCaracteres(frase));
console.log("2. Número de letras:", contarLetras(frase));
console.log("3. Número de palabras:", contarPalabras(frase));
console.log("4. Frase en mayúsculas:", convertirMayusculas(frase));
console.log("5. Frase con letras 'a' reemplazadas:", reemplazarLetrasA(frase));
