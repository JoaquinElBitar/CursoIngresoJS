/*Joaquin ElBitar
	Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
 */
	function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad > 17)
	{
	alert("Sos mayor de edad");
	}else
	{alert("Sos menor de edad")}

}//FIN DE LA FUNCIÓN