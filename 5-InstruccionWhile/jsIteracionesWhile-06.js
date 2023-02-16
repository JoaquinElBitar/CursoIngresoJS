/*Joaquin ElBitar
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//Declaro variable
	let contador;
	let acumulador;
	let numeroIngresado;
	let i;
	let promedio;
	let mensaje;
	
	//Inicializo variable
	i = 0;
	contador = 0;
	acumulador = 0;

	while(i < 5)
	{
		i = i + 1;
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error ingrese un numero"))
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}//FIN DEL SWITCH

	promedio = acumulador / contador;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;
}//FIN DE LA FUNCIÓN
