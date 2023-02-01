/* Joaquin ElBitar
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let datoIngresado //Declaracion de variable

	//Pido el dato
	datoIngresado = prompt("Cuál Es Tu Nombre?");
	
	//Busco acceder a la caja de texto
	document.getElementById("txtIdNombre").value = datoIngresado

}

