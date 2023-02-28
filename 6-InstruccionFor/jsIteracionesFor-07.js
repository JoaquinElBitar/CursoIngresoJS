/*Joaquin ElBitar
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	//Declrar variables
	let numeroIngresado;
	let divisores;
	let contadorDivisores;

	//Iniciar variables
	 
	contadorDivisores = 0;
	//Parsear numero
	numeroIngresado=parent(prompt("Ingrese un numero"));

	//Inicialziar for
	for (let i = 0; i < numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0){
			contadorDivisores = contadorDivisores + 1;
		}
	}
console.log("La cantidad de divisores de ") + numeroIngresado + " es " + contadorDivisores
 

}//FIN DE LA FUNCIÓN