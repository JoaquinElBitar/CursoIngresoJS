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

/*Joaquin ElBitar
Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El resto de los numeros (el primero en modulo del segundo)*/

{
let numUno;
let numDos;
let suma;
let mensaje;
let promedio;

numUno = document.getElementById("txtIdNumeroDividendo").value; 

numDos = document.getElementById("txtIdNumeroDivisor").value; 

numUno = parseInt(numUno);

numDos = parseInt(numDos);

suma = numUno + numDos;

mensaje = "La Suma Es " + suma;

alert(mensaje);

promedio = suma/2;

mensaje = "El Promedio Es: " + promedio;

alert(mensaje);

modulo = numUno % numDos;

mensaje = "El Modulo Es: " + modulo;

alert(mensaje);









}
