const canes = [
  {
    nombre: "Rex",
    tipo: "Perro",
    edad: 4,
    vacunado: true,
    direccion: {
      calle: "Calle del Parque",
      numero: 23,
      colonia: "San José",
      codigoPostal: 78900,
    },
  },
  {
    nombre: "Bella",
    tipo: "Perro",
    edad: 6,
    vacunado: true,
    direccion: {
      calle: "Avenida Libertad",
      numero: 56,
      colonia: "El Bosque",
      codigoPostal: 78500,
    },
  },
  {
    nombre: "Max",
    tipo: "Perro",
    edad: 3,
    vacunado: false,
    direccion: {
      calle: "Callejón del Puente",
      numero: 12,
      colonia: "Villa Hermosa",
      codigoPostal: 78850,
    },
  },
  {
    nombre: "Rocky",
    tipo: "Perro",
    edad: 2,
    vacunado: false,
    direccion: {
      calle: "Camino Real",
      numero: 34,
      colonia: "Las Palmas",
      codigoPostal: 78600,
    },
  },
];

// 1. Obtener una lista con la edad en años perrunos
const edadPerruna = canes.map((cane) => ({ ...cane, edad: cane.edad * 7 }));

// 2. Contar la cantidad de canes vacunados
let cantidadVacunados = 0;
canes.forEach((cane) => {
  if (cane.vacunado) cantidadVacunados++;
});

// 3. Obtener una lista con nombre y dirección completa
const direcciones = canes.map(
  (cane) =>
    `${cane.nombre}: ${cane.direccion.calle} #${cane.direccion.numero}, ${cane.direccion.colonia}, ${cane.direccion.codigoPostal}`
);

// 4. Calcular la edad promedio en años humanos
const edadPromedio =
  canes.reduce((total, cane) => total + cane.edad, 0) / canes.length;

// 5. Cambiar el valor de la propiedad "vacunado" a "Si" o "No"
const vacunadoTexto = canes.map((cane) => ({
  ...cane,
  vacunado: cane.vacunado ? "Si" : "No",
}));

// 6. Obtener una lista solo con los nombres de los canes
const nombres = canes.map((cane) => cane.nombre);

console.log("1. Edad en años perrunos:", edadPerruna);
console.log("2. Cantidad de canes vacunados:", cantidadVacunados);
console.log("3. Direcciones completas:", direcciones);
console.log("4. Edad promedio en años humanos:", edadPromedio);
console.log("5. Vacunado (Si/No):", vacunadoTexto);
console.log("6. Nombres de los canes:", nombres);
