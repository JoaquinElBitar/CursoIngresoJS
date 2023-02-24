/*Joaquin ElBitar
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero = true;
	respuesta='si';

	while(respuesta == "si" || respuesta == "Si") 
	{
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	
		//Validar que ingresaron un numero 
			while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 10);
			{
				numeroIngresado = parseInt(prompt("Error: Ingrese un número entre 0 y 10."));
			} 
			if(banderaDelPrimero == true) 
			{ 
				numeroMaximo = numeroIngresado;
				numeroMinimo = numeroIngresado;
				banderaDelPrimero = false	
			}else if(numeroMaximo < numeroIngresado)
			{ //numeroIngresado > numeroMaximo
				numeroMaximo = numeroIngresado;
			}else if(numeroMinimo > numeroIngresado)
			{ //numeroIngresado < numeroMinimo
				numeroMinimo = numeroIngresado;
			}
		respuesta=prompt("desea continuar?");
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimmo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN
