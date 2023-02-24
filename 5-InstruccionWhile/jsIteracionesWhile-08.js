/*Joaquin ElBitar
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//Declaro
	//let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let mensaje;
	let numeroIngresado;
	let negativos;

	//Inicializo
	//contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=0;
	respuesta='si';

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numreo"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error ingrese un numero"));
		}
				
		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}else if(numeroIngresado < 0)
		{
			multiplicacionNegativos = numeroIngresado * numeroIngresado;
		}
	respuesta=prompt("Desea continuar? 'Si' o 'No'");

	}
	mensaje = "La suma de los positivos es " + sumaPositivos;
	negativos = "La multiplicacion de negativos es " + multiplicacionNegativos;

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
