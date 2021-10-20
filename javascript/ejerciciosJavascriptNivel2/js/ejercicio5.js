
let cantidadDePersonas = prompt("Indique la cantidad de personas a ingresar");
cantidadDePersonas = parseInt(cantidadDePersonas);

let cantidadBase = 8;
let pagoConDescuento = 0.50;
let pagoSinDescuento = 1.50;
let montoAPagar = 0;

if(cantidadDePersonas >= cantidadBase){
    montoAPagar = cantidadDePersonas * pagoConDescuento;
    console.log("El monto a pagar, con descuento es: "+montoAPagar+" $");
}else{
    montoAPagar = cantidadDePersonas * pagoSinDescuento;
    console.log("El monto a pagar es: "+montoAPagar+" $");
}