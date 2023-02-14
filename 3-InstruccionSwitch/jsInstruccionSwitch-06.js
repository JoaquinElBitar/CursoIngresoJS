/*Joaquin ElBitar
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".function mostrar() */

function mostrar()
{
	let hora;
	let mensaje;

	hora = document.getElementById("txtIdHora").value;

	if(hora >=0 && hora <=24) {
		switch(hora) {
			case "7":
			case "8":
			case "9":
			case "10":
			case "11":
				mensaje = "Es de manana";
				break;
			case "12":
			case "13":
			case "14":
			case "15":
			case "16":
			case "17":
			case "18":
			case "19":
				mensaje = "Es de tarde";
				break;
			default:
				mensaje = "Es de noche";
		}
	} else{
		mensaje = "La hora no existe";

	}//FIN DEL SWITCH

	alert(mensaje);


}//FIN DE LA FUNCIÓN