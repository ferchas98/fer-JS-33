//primera forma
function saludo() {
  console.log("Hola fer");
}
saludo();

//segunda forma
function saludos(nombre) {
  console.log(nombre);
}
saludos("Hola ferchas");

//no usar “var“
const a = 1 + 2;
let b = 2 + 2;

var c = 3 + 2;

function valores() {
  console.log(a);
  console.log(b);
  console.log(c);

  var c = 4;
}
valores();
