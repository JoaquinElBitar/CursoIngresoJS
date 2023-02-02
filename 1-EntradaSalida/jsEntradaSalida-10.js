/*Joaquin ElBitar
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;    //Declarar variables
	let porcentaje;
	let importeFinal;
	let descuento;
	let mensaje;
	
	descuento = -25

	importe = document.getElementById("txtIdImporte").value;    //Obtener id value

	importe = parseFloat(importe);  //Parsear los numeros 
	
	porcentaje = importe * descuento /100;

	importeFinal = importe + descuento

	mensaje = "El Resultado Es " + (importeFinal);

	document.getElementById("txtIdResultado").value = mensaje;

	alert(mensaje);

	}