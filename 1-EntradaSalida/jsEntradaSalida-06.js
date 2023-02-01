/*Joaquin ElBitar
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUnoTexto;
	let numeroDosTexto;
	let numUno;
	let numDos;
	let mensaje;

	numeroUnoTexto = document.getElementById("txtIdNumeroUno").value;

	numeroDosTexto = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(numeroUnoTexto);

	numDos = parseInt(numeroDosTexto);

	mensaje = "La Suma Es " + (numUno + numDos);

	alert(mensaje);
}

