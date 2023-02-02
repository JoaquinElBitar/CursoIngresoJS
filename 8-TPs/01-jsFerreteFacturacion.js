/*Joaquin ElBitar
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let productoUno; //Declaracion de variables
    let productoDos;
    let productoTres;
    let mensaje;

//Encontrar el ID 
    productoUno = document.getElementById("txtIdPrecioUno").value; 

    productoDos = document.getElementById("txtIdPrecioDos").value;

    productoTres = document.getElementById("txtIdPrecioTres").value;

//Parsear los numero
    productoUno = parseInt(productoUno); 

    productoDos = parseInt(productoDos);

    productoTres = parseInt(productoTres);

 //Asignar ecuacion y mensaje
    mensaje = "La Suma De Los Productos Es " + (productoUno + productoDos + productoTres);

    alert(mensaje);

}

function Promedio () 
{

}
function PrecioFinal () 
{
	let productoUno; //Declaracion de variables
    let productoDos;
    let productoTres;
    let ecuacion;

//Encontrar el ID 
    productoUno = document.getElementById("txtIdPrecioUno").value; 

    productoDos = document.getElementById("txtIdPrecioDos").value;

    productoTres = document.getElementById("txtIdPrecioTres").value;

//Parsear los numero
    productoUno = parseInt(productoUno); 

    productoDos = parseInt(productoDos);

    productoTres = parseInt(productoTres);

    mensaje = "El Precio Final Es " + (productoUno + productoDos + productoTres)*1.21;

    alert(mensaje);
}