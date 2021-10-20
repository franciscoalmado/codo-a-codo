
let sueldo = prompt("Ingrese el sueldo del trabajador");

let porcentajeDeAumento = 15;

let resultado = parseInt(sueldo) + (parseInt(sueldo) * (porcentajeDeAumento / 100));

console.log("El nuevo sueldo con aumento es : "+resultado);