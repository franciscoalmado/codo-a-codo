
document.getElementById("boton").onclick = function calcularPrecio() {
    const n1 = 80;
    const n2 = 50;
    const n3 = 15;
    
    var cantidad = document.getElementById("inputEmail6").value;
    cantidad = parseInt(cantidad);

    var opcion = document.getElementById("inputPassword5").value;
    opcion = parseInt(opcion);

    let precioInicial = 200;
    let precioFinal = 0;

    if(opcion == 1){
        precioFinal = (precioInicial - ((precioInicial * n1)/100)) * cantidad;
    }
    if(opcion == 2){
        precioFinal = (precioInicial - ((precioInicial * n2)/100)) * cantidad;
    }
    if(opcion == 3){
        precioFinal = (precioInicial - ((precioInicial * n3)/100)) * cantidad;
    }
    document.getElementById("r2").innerHTML = "Total a pagar: " + precioFinal+" $";   
}
