/*Joaquin ElBitar
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let sexo;

	sexoIngresado = prompt("ingrese 'f' ó 'm'.");

	while(sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("Error: Ingrese 'f' para femenino o 'm' para masculino")
	}//FIN WHILE
	switch(sexoIngresado)
	{
		case "f" :
		case "F" :
			sexo = "Femenino"
			break;
		case "m" :
		case "M" :
			sexo = "Masculino"
			break;
	}//FIN SWITCH
mensaje = "Su sexo es " + sexo;
document.getElementById("txtIdSexo").value = mensaje;
	
}//FIN DE LA FUNCIÓN
