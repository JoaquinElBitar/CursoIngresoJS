/*Joaquin ElBitar
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	let i;
	let numeroIngresado; 
	let contadorDivisores; 
	let primo;
	let noPrimo;

	contadorDivisores = 0; 

	numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error Ingrese un numero valido"));
		}

	for( i = 2; i < numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			contadorDivisores = contadorDivisores +1; 
		}
		if(contadorDivisores != 0 || numeroIngresado <= 1)
		{
			numeroIngresado = noPrimo;
		}else 
		{	
			numeroIngresado = primo;
		}
	}//FIN FOR

	alert(noPrimo + " no es primo"); 
	alert(primo + " es primo"); 
}//FIN DE LA FUNCIÓN