
let precio = prompt("Indique el precio del producto");
precio = parseInt(precio);

let precioBase = 100;
let descuento = 15;
let montoAPagar = 0;

if(precio > precioBase){
    montoAPagar = precio - (precio * (descuento / 100));
    console.log("El monto a pagar, con descuento es: "+montoAPagar+" $");
}else{
    montoAPagar = precio;
    console.log("El monto a pagar es: "+montoAPagar+" $");
}