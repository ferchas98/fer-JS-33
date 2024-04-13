const somestring = "the evil that men do";

const countVocals = (frase) => {
  const regex = /[AEIOUaeiouÁÉÍÓÚáéíóúüÜ]/i;
  const longitud = frase.length;
  let total = 0;

  for (let i = 0; i < longitud; i++) {
    let esVocal = regex.test(frase.charAt(i));

    esVocal ? total++ : "";
  }
  return total;
};

// Buscar todas las coincidencias en el texto
let test1 = countVocals(somestring);
let test2 = countVocals("Amor de mis amores");
console.log(test1);
console.log(test2);
