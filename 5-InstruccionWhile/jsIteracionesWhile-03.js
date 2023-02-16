/*Joaquin ElBitar
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let mensaje;

	//Pido el dato 
	claveIngresada = prompt("ingrese el número clave.");
	
	//Añado la iteracion
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error: Ingrese la contraseña correcta");

	}//FIN DEL SWITCH

	mensaje = "Ingreso la clave correcta"
	alert(mensaje);


}//FIN DE LA FUNCIÓN

