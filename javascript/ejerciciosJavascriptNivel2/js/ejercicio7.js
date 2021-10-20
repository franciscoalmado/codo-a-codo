
let calificacion = prompt("Ingrese un número del 0 al 4");
calificacion = parseInt(calificacion);

const mala = 0;
const regular = 1;
const buena = 2;
const muyBuena = 3;
const excelente = 4;

if(calificacion == mala){
    console.log("La calificación de la película es Mala");
}
if(calificacion == regular){
    console.log("La calificación de la película es Regular");
}
if(calificacion == buena){
    console.log("La calificación de la película es Buena");
}
if(calificacion == muyBuena){
    console.log("La calificación de la película es Muy Buena");
}
if(calificacion == excelente){
    console.log("La calificación de la película es Excelente");
}
else{
    console.log("EL valor no es válido");
}