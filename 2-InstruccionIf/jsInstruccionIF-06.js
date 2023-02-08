 /*Joaquin ElBitar
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	let edad;
	let mensaje; 

	edad = parseInt(document.getElementById("txtIdEdad").value);
	mensaje = "Es mayor de edad";

	if(edad >= 18)
	{
		mensaje = "Es un adulto";

	}else if (edad >= 13){
		mensaje = "Es un adolecente";
	}else 
	{
		mensaje = "Es un niño";

		alert(mensaje);
	}

} //FIN DE LA FUNCIÓN