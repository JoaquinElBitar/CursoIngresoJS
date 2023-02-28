/*Joaquin ElBitar
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/function mostrar()
{
    let i;
    let numeroIngresado;
    let contadorNumerosPares;
    let acumuladorNumerosPares;
    let romper;

    contadorNumerosPares = 0;
    acumuladorNumerosPares = 0;

    for(i=1;;i++)
    {
        numeroIngresado = parseInt(prompt("Ingrese un numero"));
        while(isNaN(numeroIngresado))
            {
                numeroIngresado = parseInt(prompt("Error: Ingrese un numero valido"));
            }
        if(i%2 != 1)
        {
            contadorNumerosPares = contadorNumerosPares + 1;
            acumuladorNumerosPares = acumuladorNumerosPares + numeroIngresado;
        }
        romper = prompt("Para cortar ingrese 'BREAK' ");
		if (romper == "BREAK")
		{
			break; 
		}
    }
    
    console.log("La cantidad de numero pares es " + contadorNumerosPares);
    console.log(numeroIngresado);


}//FIN DE LA FUNCIÓN

