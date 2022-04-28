//PRIMERA PARTE EJERCICIO ASINCRONICO

var titulo = document.querySelector("#hola").innerHTML;
var parrafo = document.querySelector("#parrafo").innerHTML;
console.log(titulo.textContent = "Chau");

document.querySelector("#hola").innerHTML = parrafo
document.querySelector("#parrafo").innerHTML = titulo

var parrafo2 = document.querySelector("#parrafo2")

var parrafo3 = document.createElement("p");

parrafo3.textContent = "Generacion de elemento P"


document.body.appendChild(parrafo3);

console.log(parrafo3.textContent)

//PARTE DE EJERCICIO ASINCRONO
// DIV CON ESTILOS

var divstyle = document.querySelector("#divstyle");
//Div con estilos
divstyle.style ="width:90px;height:40px;background:red;"
// no devuelve nada
 //divstyle.classList.add("width:90px;height:40px;background:red")

var quitar = document.querySelector(".square");

//Esto quita la clase square : var quitando = quitar.classList.remove("square");

//console.log(quitando)

//Cada 1 segundo se fija si tiene la clase
  setInterval(function () {quitar.classList.toggle('square')}, 1000);
