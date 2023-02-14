/*Joaquin ElBitar
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */
function mostrar()
{
	let ciudad;
	let mensaje;

	ciudad = document.getElementById("txtIdDestino").value;

	switch(ciudad) {
		case "Bariloche" :
			mensaje = "Ustes esta en el oeste"
			break;
		case "Ushuaia" :
			mensaje = "Ustes esta en el sur"
			break;
		case "Cataratas" :
			mensaje = "Ustes esta en el norte"
			break;
		case "Mar del plata" :
			mensaje = "Usted esta en el este"
			break;
		
	}//FIN DEL SWITCH

	alert(mensaje)

}//FIN DE LA FUNCIÓN