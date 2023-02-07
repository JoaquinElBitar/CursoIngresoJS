/*Joaquin ElBitar
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
 */
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad <=12 || edad >=18)
	{
	alert("No sos adolecente")
	}
	
}//FIN DE LA FUNCIÓN