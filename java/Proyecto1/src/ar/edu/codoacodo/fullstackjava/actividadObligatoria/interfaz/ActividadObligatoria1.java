package ar.edu.codoacodo.fullstackjava.actividadObligatoria.interfaz;

import java.util.Scanner;

public class ActividadObligatoria1 {
	
	static Scanner teclado = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		System.out.println("Bienvenido al curso Full Stack Java de Codo a Codo: \n");
		mostrarMensaje(teclado);
	}
	
	private static void mostrarMensaje(Scanner teclado){

	    System.out.println("Ingrese su nombre");
	    String nombre = teclado.next();
	    
	    System.out.println("Ingrese su apellido");
	    String apellido = teclado.next();

	    System.out.println("Ingrese su edad");
	    int edad = teclado.nextInt();

	    System.out.println("Ingrese su hobbie");
	    String hobbie = teclado.next();

	    System.out.println("Ingrese su editor de código preferido");
	    String editor = teclado.next();

	    System.out.println("Ingrese sistema operativo que usa");
	    String sistemaOperativo = teclado.next();
	    
	    System.out.println("\n");
	    System.out.println("**************************************");
	    System.out.println("Resumen de la información del alumno: ");
	    System.out.println("Nombre: "+nombre);
	    System.out.println("Apellido: "+apellido);
	    System.out.println("Edad: "+edad);
	    System.out.println("Hobbie: "+hobbie);
	    System.out.println("Editor: "+editor);
	    System.out.println("Sistema operativo: "+sistemaOperativo);
	    System.out.println("**************************************");
	}
}