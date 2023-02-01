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