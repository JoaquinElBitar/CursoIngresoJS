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