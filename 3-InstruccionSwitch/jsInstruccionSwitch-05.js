/*Joaquin ElBitar
	Al ingresar una hora, informar:
	Si esta entre las  y las 11 : "Es de mañana." */
	
function mostrar()
{

	let horaDelDia;
	let mensaje;
	
	horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de manñana."
		break;

	}//FIN DEL SWITCH
	
	alert(mensaje);



}//FIN DE LA FUNCIÓN