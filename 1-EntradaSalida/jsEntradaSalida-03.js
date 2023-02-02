/*Joaquin ElBitar
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	let mensaje;
	//nombreIngresado=txtIdNombre.value; SOLO FUNCIONA EN GOOGLE 
	//    HTML    obtener ID.value
	nombreIngresado = document.getElementById ("txtIdNombre").value;

	mensaje = "Su Nombre Es " + nombreIngresado;

	alert(mensaje);

}

/*Joaquin ElBitar
Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo. */

{

}