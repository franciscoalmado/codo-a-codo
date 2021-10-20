
let numeros = [];
let numero = 0;
let i = 0;
let salir = -1;

do{
    numeros[i] = parseInt(prompt("Ingrese un número"));
    if(numeros[i] != salir){
        for (i; i < numeros.length; i++){        
            numero = numeros[i];
            console.log("Posición "+i+" : "+numeros[i]);
        }
    }
}while(numeros[i] != salir);