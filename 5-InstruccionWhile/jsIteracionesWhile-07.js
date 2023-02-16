/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	//let i;
	let numeroIngresado;
	let mensaje;

	//i = 0;
	contador = 0;
	acumulador = 0;
	respuesta='si';

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI")
	{
		//i = i + 1; 
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error ingrese un numero"))
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;

	respuesta=prompt("Desea continuar? Si");


	}//FIN DEL SWITCH

	promedio = acumulador / contador;
	suma = "El total de la suma es " + acumulador;
	mensaje = "El promedio es " + promedio;


	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = mensaje;

}//FIN DE LA FUNCIÓN
