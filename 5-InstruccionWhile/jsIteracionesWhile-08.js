/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//Declaro
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let i;
	let mensaje;
	let numeroIngresado

	//Inicializo
	i = 0
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "SI" || "Si" || "si")
	{
		contador = contador + 1;
		numeroIngresado = parseInt(prompt("Ingrese un numreo"))
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error ingrese un numero"))
		}
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
