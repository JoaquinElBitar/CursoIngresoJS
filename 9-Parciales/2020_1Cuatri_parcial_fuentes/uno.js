/*Joaquin ElBitar
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	//Declaro
	let tipoProducto;
	let precioProducto;
	let cantidadProdcuto;
	let marca;
	let fabricante;  
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let precioAlcoholMasBarato;
	let cantidadAlcoholMasBarato;
	let fabricanteAlcoholMasBarato;
	let banderaDelAlcohol;
	let mayorCantidad;
	let promedio;
	let mensaje;
	
	//Inicio
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;
	banderaDelAlcohol = true

	//Inicio el for
	for (i = 0; i < 5; i++)
	{
	//Pedir datos por promt
	tipoProducto = prompt("Ingrese el producto deseado. barbijo. jabon o alcohol");
	//Valido con while
	// while(tipoProducto != barbijo && tipoProducto != jabon && tipoProducto != alcohol)
	// {
	// 	tipoProducto = prompt("Error, producto no valido. Ingrese 'barbijo'o'jabon'o'alcohol");
	// }
	//Parsear producto
		precioProducto = parseInt(prompt("Ingrese un precio entre '100 y 300'"));
	//Valido con while
	while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
	{
		precioProducto = parseInt(prompt("Error ingrese un precio valido"));
	}
	cantidadProdcuto = parseInt(prompt("Ingrese la cantidad deseada"));
	while(isNaN(cantidadProdcuto) || cantidadProdcuto < 1 || cantidadProdcuto > 1000)
	{
		cantidadProdcuto = parseInt(prompt("Error ingrese una cantidad valida"));
	}
	//Vuelvo a pedir datos por promt 
	marca = prompt("Ingrese una marca");
	while(!isNaN(marca))
	{
		marca = prompt("Error: Ingrese una marca valida");
	}

	fabricante = prompt("Ingrese un fabricante");
	while(!isNaN(fabricante))
	{
		fabricante = prompt("Error Ingrese un fabricante valido");
	}
	switch(tipoProducto)
	{
		case "barbijo":
			contadorBarbijo = contadorBarbijo + 1;
			acumuladorBarbijo = acumuladorBarbijo + cantidadProdcuto;
			break;
		case "jabon":
			contadorJabon = contadorJabon + 1;
			acumuladorJabon = acumuladorJabon + cantidadProdcuto;
			break;
		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		case "alcohol":
	}		if(banderaDelAlcohol == true || precioProducto < precioAlcoholMasBarato)
			{
				precioAlcoholMasBarato = precioProducto;
				cantidadAlcoholMasBarato = acumuladorAlcohol;
				fabricanteAlcoholMasBarato = fabricante;
				banderaDelAlcohol = false;
			}
			contadorAlcohol = contadorAlcohol + 1;
			acumuladorAlcohol = acumuladorAlcohol + cantidadProdcuto;
			break;

	}//FIN FOR
	
	//b) Del tipo con mas unidades, el promedio por compra
	if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
		{
			mayorCantidad = "Barbijo";
			promedio = acumuladorBarbijo / contadorBarbijo;	

		}else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon  > acumuladorAlcohol)
		{
			mayorCantidad = "Jabon";
			promedio = acumuladorJabon / contadorJabon;

		}else if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
		{
			mayorCantidad = "Alcohol";
			promedio = acumuladorAlcohol / contadorAlcohol;
		}
	// switch(cantidadProdcuto)
	// 	{
	// 		case "barbijo":
	// 		acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol;
	// 		mayorCantidad = "Barbijo" + acumuladorBarbijo;
	// 		break;
	// 		case "jabon":
	// 		acumuladorJabon > acumuladorBarbijo && acumuladorJabon  > acumuladorAlcohol;
	// 		mayorCantidad =  "Jabon" + acumuladorJabon;
	// 		break;
	// 		case "alcohol":
	// 		acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol  > acumuladorJabon;
	// 		mayorCantidad =  "Alcohol" + acumuladorAlcohol ;
	   //{//FIN SWIICH

	//c) Cuántas unidades de jabones hay en total
	console.log("Cantidad de el acohol mas barato: " + cantidadAlcoholMasBarato + " su fabricante es " + fabricanteAlcoholMasBarato);
	console.log("Hay mayor cantidad de " + mayorCantidad + " y el promedio de su compra es " + promedio);
	console.log("Cantidad total de jabon: " + acumuladorJabon);


}
