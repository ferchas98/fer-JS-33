//let nombres = ["fer", "auro", "dama"];
let nombres = [
  {
    name: "fer",
    lastname: "ocampo",
  },
  {
    name: "auro",
    lastname: "rodriguez",
  },
  {
    name: "dama",
    lastname: "olmos",
  },
];

nombres.forEach((item, index, arr) => {
  //console.log(item);
  //console.log(index);
  //console.log(arr);

  //let firstLetter = item.charAt(0);
  let fullname = `${nombres[index].name} ${nombres[index].lastname} `;
  //console.log(firstLetter);
  console.log(fullname);
});

nombres.forEach((koder) => {
  let fullname = `${koder.name} ${koder.lastname} `;
  console.log(fullname);
});

// const getfullnames = (koders) => {
//   let kodernames = [];
//   koders.forEach((koder) => {
//     let fullname = `${koder.name} ${koder.lastname} `;
//     fullname.push(kodernames);
//     return getfullnames();
//   });
//   console.log(getfullnames(koders));
// };
