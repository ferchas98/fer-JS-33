//metodos de seleccion de DOM

//por ID
let koderList = document.getElementById("koder-list");
console.log(koderList);

//por Clase
let koderList2 = document.getElementsByClassName("list-group-item");
console.log(koderList2);

//por TagName
let koderList3 = document.getElementsByTagName("li");
console.log(koderList3);

//solo los li de koder-list QuerySelector
let koderList4 = document.querySelector("#koder-list .list-group-item");
let koderList5 = document.querySelectorAll("#koder-list .list-group-item");
console.log(koderList4);
console.log(koderList5);
