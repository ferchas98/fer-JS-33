let data = [
  ["Israel", "Salinas", 34],
  ["Charles", "Silva", 27],
  ["Naomi", "Lopez", 27],
  ["David", "Moranchel", 28],
];

// Lista de nombres completos
let names = data.map((person) => `${person[0]} ${person[1]}`);

// Mayor y menor edad
// let ages = data.map((person) => person[2]);
// let maxAge = Math.max(...ages);
// let minAge = Math.min(...ages);

let ages = data.map((person) => person[2]);

let [minAge, maxAge] = ages.reduce(
  ([min, max], age) => {
    if (age < min) {
      min = age;
    }
    if (age > max) {
      max = age;
    }
    return [min, max];
  },
  [Infinity, -Infinity]
);

// Reestructurar la data
let restructuredData = data.map((person) => {
  return {
    name: person[0],
    lastname: person[1],
    age: person[2],
  };
});

console.log("Lista de nombres completos:", names);
console.log("Mayor edad:", maxAge);
console.log("Menor edad:", minAge);
console.log("Data reestructurada:", restructuredData);
