/*Joaquin ElBitar
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{	
	let nombrePersona //Declaracion de variable
	let nombreApellido 
	nombrePersona = prompt ("Cuál Es Tu Nombre?")
	nombreApellido = prompt("Cuál Es Tu Apellido?")
	alert("Su nombre es: " + nombrePersona+" "+ nombreApellido);
}

