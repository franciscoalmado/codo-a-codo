
let peso = prompt("Ingrese su peso en kilogramos");
let altura = prompt("Ingrese su altura en metros (Ej: 1.70)");

let bmi = parseInt(peso) / Math.pow(parseFloat(altura),2);

console.log("Tu BMI es "+bmi);