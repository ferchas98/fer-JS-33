const canes = [
  {
    nombre: "Rex",
    tipo: "Perro",
    edad: 4,
    vacunado: true,
    pais: "México",
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
    pais: "México",
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
    pais: "Colombia",
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
    pais: "Ecuador",
    direccion: {
      calle: "Camino Real",
      numero: 34,
      colonia: "Las Palmas",
      codigoPostal: 78600,
    },
  },
];

/*
    1.- Necesito conocer la edad promedio de todos los perros
    2.- Necesito obtener una lista de perros basados en el país al que pertenecen
    3.- Necesito una lista de los códigos postales de los perros
    4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
    */

const sumaEdades = canes.reduce((suma, perro) => suma + perro.edad, 0);
const promedioEdades = sumaEdades / canes.length;
console.log("Edad promedio de todos los perros:", promedioEdades);

const perrosPorPais = {};
canes.forEach((perro) => {
  perrosPorPais[perro.pais] = perrosPorPais[perro.pais] || [];
  perrosPorPais[perro.pais].push(perro);
});
console.log("Perros por país:", perrosPorPais);

const codigosPostales = canes.map((perro) => perro.direccion.codigoPostal);
console.log("Códigos postales de los perros:", codigosPostales);

const paisesUnicos = canes.map((perro) => perro.pais);
const paisesSinRepetidos = paisesUnicos.filter(
  (pais, index) => paisesUnicos.indexOf(pais) === index
);
console.log("Países de los perros sin repetidos:", paisesSinRepetidos);
