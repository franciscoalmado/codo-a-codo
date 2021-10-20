
let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let numero3 = prompt("Ingrese el tercer número");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

if(numero1 > numero2 && numero1 > numero3){
    alert("El mayor es: "+numero1);
}
if(numero2 > numero1 && numero2 > numero3){
    alert("El mayor es: "+numero2);
}
if(numero3 > numero1 && numero3 > numero2){
    alert("El mayor es: "+numero3);
}
if(numero1 == numero2 && numero1 == numero3){
    alert("Los números son iguales");
}