/*Joaquin ElBitar
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedioFinal de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

    //escope de la variable: la variable vive y muere entre las llaves que se la declara
    
function Sumar () 
{
	let productoUno; //Declaracion de variables
    let productoDos;
    let productoTres;
    let mensaje;
    let suma;

//Solo en una sola linea de codigo pido el numero y lo parseo 
    productoUno = parseInt(document.getElementById("txtIdPrecioUno").value); 

    productoDos = parseInt(document.getElementById("txtIdPrecioDos").value);

    productoTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = productoUno + productoDos +productoTres
 //Asignar ecuacion y mensaje
    mensaje = "La Suma De Los Productos Es " + suma;

    console.log(mensaje);

}

function Promedio () 
{
    let productoUno; 
    let productoDos;
    let productoTres;
    let mensaje;
    let suma;
    let promedioFinal;

    productoUno = parseInt(document.getElementById("txtIdPrecioUno").value); 

    productoDos = parseInt(document.getElementById("txtIdPrecioDos").value);

    productoTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = productoUno + productoDos + productoTres;

    promedioFinal = suma/3;

    mensaje = "El Promedio Es " + promedioFinal;
    
    console.log(mensaje);
}
function PrecioFinal () 
{
    let productoUno; 
    let productoDos;
    let productoTres;
    let mensaje;
    let suma;
    let IVA;
    let precioFinal;

    productoUno = parseInt(document.getElementById("txtIdPrecioUno").value); 

    productoDos = parseInt(document.getElementById("txtIdPrecioDos").value);

    productoTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    IVA = 21;
 
    suma = productoUno + productoDos + productoTres;

        // 4) agregar el 21 % NO ESTA HECHO 
        
        // forma larga 
        // precioIVA = sumaPrecios * IVA / 100; 
        // precioFinal = sumaPrecios + precioIVA; 
                           //30 + (30*21/100) 
        //otra forma; 
        //precioFinal = sumaPrecios *( 1 + IVA/100); 

    precioFinal = suma + suma * IVA / 100;

    mensaje= "El Precio Final Del Producto Es " + precioFinal;

    console.log(mensaje);
}