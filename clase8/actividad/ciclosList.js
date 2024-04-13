const users = [
  {
    name: "Alice",
    lastname: "Johnson",
    age: 28,
    gender: "Female",
    country: "USA",
  },
  {
    name: "Bob",
    lastname: "Smith",
    age: 32,
    gender: "Male",
    country: "Canada",
  },
  {
    name: "Carlos",
    lastname: "Gomez",
    age: 24,
    gender: "Male",
    country: "Mexico",
  },
  {
    name: "Daniela",
    lastname: "Martinez",
    age: 30,
    gender: "Female",
    country: "Colombia",
  },
  {
    name: "Erik",
    lastname: "Svensson",
    age: 29,
    gender: "Male",
    country: "Sweden",
  },
  {
    name: "Fiona",
    lastname: "O'Donnell",
    age: 35,
    gender: "Female",
    country: "Ireland",
  },
  {
    name: "Gautam",
    lastname: "Patel",
    age: 27,
    gender: "Male",
    country: "India",
  },
  {
    name: "Hana",
    lastname: "Kim",
    age: 22,
    gender: "Female",
    country: "South Korea",
  },
  {
    name: "Ivan",
    lastname: "Petrov",
    age: 34,
    gender: "Male",
    country: "Russia",
  },
  {
    name: "Julia",
    lastname: "Santos",
    age: 25,
    gender: "Female",
    country: "Brazil",
  },
];

/*
    1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
       - crear una nueva lista donde se van a guardar los nombres completos y que inicialice vacio
       - buscar por cada posicion los nombres y apellidos de la lista de los usuarios , deben de contener valores tipo string
         -si no son tipo string, no los agrega en la nueva lista (paso1)
         -crear una variable donde se guarde el total
       - agregar los nombres y apellidos a la nueva lista del paso 1
       - regresar los valores de la nueva lista de los nombres completos


    2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
       - crear una nueva lista donde se van a guardar todos los usuarios que tengan como genero "Male"
       - buscar por cada posicion de los usuarios su genero y que concuerde con male, deben de contener valores tipo string
         -si no son tipo string, no los agrega en la nueva lista (paso2)
         -crear una variable donde se guarde el total
       - agregar los usuarios que sean de genero male a la nueva lista del paso 1
       - regresar los valores de la nueva lista de los usuarios con genero male


    3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
- crear una nueva lista donde se van a guardar todos los usuarios que tengan como genero "Female"
       - buscar por cada posicion de los usuarios su genero y que concuerde con Female, deben de contener valores tipo string
         -si no son tipo string, no los agrega en la nueva lista (paso2)
         -crear una variable donde se guarde el total
       - agregar los usuarios que sean de genero Female a la nueva lista del paso 1
       - regresar los valores de la nueva lista de los usuarios con genero Female

    4.- Necesitamos saber la edad promedio de los usuarios
    5.- Necesitamos saber la mayor edad
    6.- Necesitamos saber la menor edad


    hacer una lista de usuarios que contengan nombre y apellido
*/

// 1.- Lista con únicamente los nombres completos de cada usuario
const getFullNames = (users) => {
  const fullNames = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.name && user.lastname) {
      fullNames.push(`${user.name} ${user.lastname}`);
    }
  }
  return fullNames;
};

const getMales = (users) => {
  const males = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.gender === "Male") {
      males.push(user);
    }
  }
  return males;
};

const getFemales = (users) => {
  const females = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.gender === "Female") {
      females.push(user);
    }
  }
  return females;
};

const getAverageAge = (users) => {
  let totalAge = 0;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age) {
      totalAge += user.age;
    }
  }
  return totalAge / users.length;
};

const getMaxAge = (users) => {
  let maxAge = users[0].age;
  for (let i = 1; i < users.length; i++) {
    const user = users[i];
    if (user.age && user.age > maxAge) {
      maxAge = user.age;
    }
  }
  return maxAge;
};

const getMinAge = (users) => {
  let minAge = users[0].age;
  for (let i = 1; i < users.length; i++) {
    const user = users[i];
    if (user.age && user.age < minAge) {
      minAge = user.age;
    }
  }
  return minAge;
};

const fullNames = getFullNames(users);
const males = getMales(users);
const females = getFemales(users);
const averageAge = getAverageAge(users);
const maxAge = getMaxAge(users);
const minAge = getMinAge(users);

console.log("Nombres completos:", fullNames);
console.log("Usuarios con género Male:", males);
console.log("Usuarios con género Female:", females);
console.log("Edad promedio de los usuarios:", averageAge);
console.log("Usuarios de mayor edad:", maxAge);
console.log("Usuarios de menor edad:", minAge);
