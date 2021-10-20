
let x = 0;
let suma = 0;
let cantidadDePersonas = 0;

cantidadDePersonas = prompt("Ingrese la cantidad de personas");
cantidadDePersonas = parseInt(cantidadDePersonas);

while ( x < cantidadDePersonas){
  let altura;
  altura = prompt("Ingrese la altura en centímetros(Ej. 175)");
  altura = parseInt(altura);
  suma += altura;
  x = x + 1;
}
let promedio = suma / cantidadDePersonas;
console.log("La altura promedio de las personas es: "+promedio);