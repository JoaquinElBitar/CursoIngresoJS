/*Joaquin ElBitar
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let impSueldo;    //Declarar variables
	let impResultado;
	let mensaje;
	let porcentaje;

	porcentaje = 10/100

	impSueldo= document.getElementById("txtIdSueldo").value;    //Obtener id value

	impSueldo = parseInt(impSueldo);  //Parsear los numeros 

	mensaje = "El Resultado Es " + (impSueldo + impSueldo *porcentaje);

	document.getElementById("txtIdResultado").value = mensaje;
}
