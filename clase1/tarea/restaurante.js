function esPar(numero) {
  return numero % 2 === 0;
}

function gestionarOrdenes(diaDelMes, cantidadOrdenes, montoPrevisto) {
  console.log("Día del mes:", diaDelMes);
  console.log("Cantidad de órdenes:", cantidadOrdenes);
  console.log("Monto previsto:", montoPrevisto);

  const proporcionCumplidas = cantidadOrdenes / montoPrevisto;

  if (esPar(diaDelMes)) {
    console.log("¡Hoy es un día par!");
    if (cantidadOrdenes > montoPrevisto) {
      console.log(
        "La demanda superó el monto previsto. Se espera una mayor demanda mañana."
      );
    } else {
      console.log(
        "La cantidad de órdenes fue menor a la prevista. Se puede reducir la capacidad mañana."
      );
    }
  } else {
    console.log("Hoy es un día impar.");
    if (cantidadOrdenes > montoPrevisto) {
      console.log(
        "La demanda superó el monto previsto. Se espera una mayor demanda mañana."
      );
    } else {
      console.log(
        "La cantidad de órdenes fue menor o igual a la prevista. Se puede mantener la capacidad para mañana."
      );
    }
  }

  console.log(
    "Proporción de órdenes cumplidas respecto al total previsto:",
    proporcionCumplidas * 100 + "%"
  );
}

gestionarOrdenes(2, 50, 40);
