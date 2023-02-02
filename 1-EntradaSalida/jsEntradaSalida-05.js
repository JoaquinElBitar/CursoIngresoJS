/*Joaquin ElBitar
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let edadIngresada; //Declaracion de variable
	let nombreIngresado;
	let mensaje

	nombreIngresado = document.getElementById("txtIdNombre").value;

	edadIngresada = document.getElementById("txtIdEdad").value;

	mensaje = "Tu nombre es " +nombreIngresado+" y tienes "+edadIngresada;
	
	alert(mensaje);
}

/*Joaquin ElBitar
Ejercicio 5.bis: 
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan */

{

}