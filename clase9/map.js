let number = [2, 4, 6];

let mapeo = number.map((item, index, arr) => {
  let resultado = item * item;
  console.log(resultado);
  return resultado;
});
