const frase = "La mejor forma de predecir el futuro es creándolo";

// 1. Obtener la longitud de la segunda palabra
const longitudSegundaPalabra = (frase) => {
  const palabras = frase.split(" ");
  return palabras.length >= 2
    ? palabras[1].length
    : "Error: La frase no tiene suficientes palabras.";
};

console.log("Longitud de la segunda palabra:", longitudSegundaPalabra(frase));

// 2. Eliminar una palabra por su posición
const eliminarPalabraPorPosicion = (frase, posicion) => {
  const palabras = frase.split(" ");
  return posicion >= 0 && posicion < palabras.length
    ? palabras.filter((_, index) => index !== posicion).join(" ")
    : "Error: La posición especificada está fuera de rango.";
};

console.log(
  "Frase sin la palabra en la posición 2:",
  eliminarPalabraPorPosicion(frase, 2)
);

// 3. Eliminar palabras cortas
const eliminarPalabrasCortas = (frase) => {
  const palabras = frase.split(" ");
  console.log(palabras);
  return palabras.filter((palabra) => palabra.length > 3).join(" ");
};

console.log("Frase sin palabras cortas:", eliminarPalabrasCortas(frase));

// 4. Frase en orden inverso
const fraseEnOrdenInverso = (frase) => {
  const palabras = frase.split(" ");
  return palabras.reverse().join(" ");
};

console.log("Frase en orden inverso:", fraseEnOrdenInverso(frase));
