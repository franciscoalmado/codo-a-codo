
let base = prompt("Ingrese base del triángulo");
let altura = prompt("Ingrese altura del triángulo");

let superficie = (parseInt(base) * parseInt(altura)) / 2;
let perimetro = parseInt(base) + parseInt(altura) + Math.sqrt((Math.pow(parseFloat(base),2)) + (Math.pow(parseFloat(base),2)));

console.log("La superficie es: "+superficie);
console.log("El perímetro es: "+perimetro);