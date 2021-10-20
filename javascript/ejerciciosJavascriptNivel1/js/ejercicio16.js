
let matricula = prompt("Ingrese la matrícula");
let nota1 = prompt("Ingrese la nota 1");
let nota2 = prompt("Ingrese la nota 2");
let nota3 = prompt("Ingrese la nota 3");
let nota4 = prompt("Ingrese la nota 4");
let nota5 = prompt("Ingrese la nota 5");

const cantidadDeNotas = 5;
const aprobado = "Aprobado";
const reprobado = "Reprobado";

let promedioDeNotas = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5)) / 5;

if(promedioDeNotas >= 7){
    alert("Matrícula: "+matricula+", Nota: "+promedioDeNotas+", Condición: "+aprobado);
}else{
    alert("Matrícula: "+matricula+", Nota: "+promedioDeNotas+", Condición: "+reprobado);
}