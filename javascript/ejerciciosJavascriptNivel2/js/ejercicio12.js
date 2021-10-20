
let numeros = [];
let numero = 0;
let i = 0;
let suma = 0;
let promedio = 0;
let salir = -1;

do{
    numeros[i] = parseInt(prompt("Ingrese un número"));
    if(numeros[i] != salir){
        for (i; i < numeros.length; i++){        
            numero = numeros[i];
            console.log("Posición "+i+" : "+numeros[i]);
            suma += numeros[i];
        }
    }
}while(numeros[i] != salir);

promedio = suma / (numeros.length-1);

console.log("La suma es: "+suma);
console.log("El promedio es: "+promedio);