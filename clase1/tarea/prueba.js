// Función para determinar si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

// Función para determinar si la demanda superó el monto previsto
function superoMontoPrevisto(demanda, montoPrevisto) {
    return demanda > montoPrevisto;
}

// Función principal
function gestionarOrdenes(diaDelMes, cantidadOrdenes, montoPrevisto) {
    console.log("Día del mes:", diaDelMes);
    console.log("Cantidad de órdenes:", cantidadOrdenes);
    console.log("Monto previsto:", montoPrevisto);

    // Calcula la proporción de órdenes cumplidas respecto al total previsto
    const proporcionCumplidas = cantidadOrdenes / montoPrevisto;

    if (esPar(diaDelMes)) {
        console.log("¡Hoy es un día par!");
        if (superoMontoPrevisto(cantidadOrdenes, montoPrevisto)) {
            console.log("La demanda superó el monto previsto. Se espera una mayor demanda mañana.");
        } else {
            console.log("La cantidad de órdenes fue menor a la prevista. Se puede reducir la capacidad mañana.");
        }
    } else {
        console.log("Hoy es un día impar.");
        if (superoMontoPrevisto(cantidadOrdenes, montoPrevisto)) {
            console.log("La demanda superó el monto previsto. Se espera una mayor demanda mañana.");
        } else {
            console.log("La cantidad de órdenes fue menor a la prevista. Se puede reducir la capacidad mañana.");
        }
    }

    console.log("Proporción de órdenes cumplidas respecto al total previsto:", proporcionCumplidas.toFixed(2));
}

// Uso
gestionarOrdenes(2, 50, 40);
