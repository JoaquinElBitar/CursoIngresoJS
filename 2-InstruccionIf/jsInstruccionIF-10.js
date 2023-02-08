/*Joaquin El Bitar
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	let nota;
	let max;
	let min;
	let mensaje;

	max = 10 ;
	min = 1;
	nota = Math.floor(Math.random() * max) + min;

	if(nota >= 9){

		mensaje = "EXCELENTE! " 
		alert(mensaje + nota);

	}else if(nota >= 4 && nota <=8){

		mensaje = "Estas aprobado "	
		alert(mensaje + nota);
	}else{
		mensaje = "Vamos, la proxima se puede"
		alert(mensaje + nota)
	}

}//FIN DE LA FUNCIÓN
