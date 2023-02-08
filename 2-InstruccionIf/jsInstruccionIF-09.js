/*Joaquin ElBitar 
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	//Definir variable
	let numRandom;
	let mensaje;

	//Generar un numero random entre 1 y 10 
	numRandom = Math.ceil((Math.random() * 10 )) //La función Math.floor() redondea al entero inferior. 
	//La funcion Math.ceil() redondea al entero superior

	mensaje = "Numero random: " + numRandom;

	console.log(mensaje)

}//FIN DE LA FUNCIÓN
