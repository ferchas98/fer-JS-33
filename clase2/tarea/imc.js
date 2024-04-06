function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);

  if (isNaN(imc) || !isFinite(imc)) {
    return "Error: Los valores ingresados no son válidos.";
  } else {
    return imc;
  }
}

function clasificarIMC(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc <= 18.5 && imc < 24.9) {
    return "Peso saludable";
  } else if (imc <= 25 && imc < 29.9) {
    return "Sobrepeso";
  } else if (imc <= 30) {
    return "Obesidad";
  }
}

//opcion 1
// function resultado(peso, altura) {
//   let imc = calcularIMC(peso, altura);
//   let clasificacion = clasificarIMC(imc);

//   console.log("Su IMC es:", imc);
//   console.log("Clasificación:", clasificacion);
// }

// resultado(98, 1.82);

//opcion 2
function resultado() {
  let peso = 97; // Kilogramos
  let altura = 1.82; // Metros

  let imc = calcularIMC(peso, altura);
  let clasificacion = clasificarIMC(imc);

  console.log("Su IMC es:", imc);
  console.log("Clasificación:", clasificacion);
}

resultado();
