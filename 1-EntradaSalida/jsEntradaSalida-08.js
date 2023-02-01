/*Joaquin ElBitar
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numDividendo; //Declarar variables
	let numDivisor;
	let numDividendoTexto;
	let numDivisorTexto;
	let mensaje;

	numDividendoTexto = document.getElementById("txtIdNumeroDividendo").value; //Obtener id value

	numDivisorTexto = document.getElementById("txtIdNumeroDivisor").value; 

	numDividendo = parseInt(numDividendoTexto); //Parsear los numeros

	numDivisor = parseInt(numDivisorTexto);
	
	mensaje = "El resto es " + (numDividendo / numDivisor); 

	alert(mensaje);
}
