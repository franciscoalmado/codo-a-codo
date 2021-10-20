
let nota1 = prompt("Ingrese la nota 1");
let nota2 = prompt("Ingrese la nota 2");

nota1 = parseInt(nota1);
nota2 = parseInt(nota2);

if(nota1 > nota2){
    console.log("¿La nota 1 es mayor a la nota 2?: "+true);
}else{
    console.log("¿La nota 1 es mayor a la nota 2?: "+false);
}