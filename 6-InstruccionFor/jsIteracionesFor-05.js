/*Joaquin ElBitar
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	let i;
    let numeroIngresado;

    for(i = 0; i = 9 ; i++)
    {   
        numeroIngresado = parseInt(prompt("Ingrese el numero 9"));
        while(isNaN(numeroIngresado) || numeroIngresado < 8 || numeroIngresado > 10)
            {
                numeroIngresado = parseInt(prompt("Error: Ingrese el numero 9"));
            }
        if(numeroIngresado == 9)
        {
            break;
        }
    }



}//FIN DE LA FUNCIÓN