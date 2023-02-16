/*Joaquin ElBitar
al presionar el botón mostrar 12 repeticiones 
con números ASCENDENTE, desde el 1 al 125.
 a)Y contar los numeros impares 
 b)contar los numeros pares
 c)El total de la suma de los numero impares
 d)El total de la suma de los numeros pares
 e)
 */
// function mostrar()
// {
// 	//declaro variable
// 	let i;
// 	let contadorNumerosPares;
// 	let contadorNumerosImpares;
// 	let acumuladorNumerosImpares;
// 	let acumuladorNumerosPares;
// 	let mayorNumeroImpar; 

// 	//inicializo variable
// 	i = 11;
// 	contadorNumerosPares = 0;
// 	contadorNumerosImpares = 0;
// 	acumuladorNumerosPares = 0; 
// 	acumuladorNumerosImpares = 0;
// 	mayorNumeroImpar = 1;

// 	while(i < 126 && i > 10)
// 	{
// 		if(i%2 != 0)
// 		{//  
// 			//a)Y contar los numeros impares 
// 			contadorNumerosImpares = contadorNumerosImpares +1;
// 			//c)El total de la suma de los numero impares
// 			acumuladorNumerosImpares = acumuladorNumerosImpares + i;   
			
// 			if(i > mayorNumeroImpar)
// 			{
// 				mayorNumeroImpar = i;
// 			}
			
// 		}else{
// 			//b)contar los numeros pares
// 			contadorNumerosPares = contadorNumerosPares + 1;
// 			//d)El total de la suma de los numeros pares
// 			acumuladorNumerosPares = acumuladorNumerosPares + i;
// 		}
// 		//modificar la variable para que no entre en bucle
// 		i = i + 1;
// 		console.log(i); //no entra la variable mensaje 

		

// 	}//FIN DE WHILE

// 	console.log("La cantidad de numero impares es: " + contadorNumerosImpares);
// 	console.log("La cantidad de numero pares es: " + contadorNumerosPares);
// 	console.log("El total de la suma de impares es " + acumuladorNumerosImpares);
// 	console.log("El total de la suma de pares es " + acumuladorNumerosPares);
// 	console.log("El mayor de los numeros impares es " + mayorNumeroImpar);


	//alert('interacion while');

	//while genera la linea de codigo muchas veces
	//do-while genera automaticamente la primera vez
	//for cantidad finita de veces

	// let edad;
	// let mensaje;

	// edad = parseInt(prompt("Ingrese una edad valida"))

	// //validacion
	// while(isNaN(edad) || edad < 0 || edad > 103 )
	// {
	// 	edad = parseInt(prompt("Error: Ingrese una edad valida entre 0 y 103"));
	// }

	// alert("Felicitaciones pusiste bien la edad");

//}//FIN DE LA FUNCIÓN

/*Joaquin ElBitar
 edad y nombre , informar el nombre de la persona mas vieja y la mas joven */
function mostrar()
{
	let banderaDelPrimero;
	let edad;
	let edadViejos;
	let edadJovenes;
	let nombre;
	let nombreMayor;
	let nombreJoven;
	let respuesta;
	let mensaje;

	respuesta = "Si";
	banderaDelPrimero = true;

	while(respuesta == "Si" || respuesta == "si" || respuesta == "SI")
	{
		nombre = prompt("Ingrese su nombre");
		edad = parseInt(prompt("Ingrese su edad"));

		while(isNaN(edad))
		{
			edad = parseInt(prompt("Error: Ingrese una edad valida"));
		}
		if(banderaDelPrimero == true)
		{
			edadViejos = edad;
			edadJovenes = edad;
			nombreMayor = nombre;
			nombreJoven = nombre;
			banderaDelPrimero = false;
		}
		else if(edadViejos < edad)
		{
			nombreMayor = nombre;
			edadViejos = edad;
		}
		else if(edadJovenes > edad)
		{
			nombreJoven = nombre;
			edadJovenes = edad;
		}
		respuesta = prompt("Desea continuar? Ingrese 'Si' o 'No'");

	}//FIN DEL WHILE

	mensaje = "Vos sos " + nombreJoven + " y tenes " + edad; 
	mensaje += " Y " + nombreMayor + " y tiene " + edad;

	console.log(mensaje);
}