/*Joaquin ElBitar
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	//tomo el mes
	let mesDelAnio
	let mensaje

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		default :
			mensaje = "Falta para el invierno"
			break;
		case "Julio" :
		case "Agosto" :
			mensaje = "Abrigate que hace frio"
			break; 
		case "Septiembre" :
		case "Octubre" :
		case "Noviembre" : 
		case "Diciembre" :
			mensaje = "Ya pasamos el frio, ahora calor!!!"
			break;
	}//Aca termina el swtich

		alert(mensaje)




}//FIN DE LA FUNCIÓN