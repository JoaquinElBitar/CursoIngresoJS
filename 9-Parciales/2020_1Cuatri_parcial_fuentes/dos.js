/*Joaquin ElBitar
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let tipoBolsa;
  let cantidadBolsa;
  let precioBolsa;
  let respuesta; 
  let descuento;
  let precioTotalBruto; 
  let acumuladorCantidadArena;
  let acumuladorCantidadCal;
  let acumuladorCantidadCemento;
  let acumuladorPrecioArena;
  let acumuladorPrecioCal;
  let acumuladorPrecioCemento;
  let precioConDescuento;
  let mayorCantidad; 
  let productoMasCaro; 

  respuesta = "si"; 
  acumuladorCantidadArena = 0;
  acumuladorCantidadCal = 0; 
  acumuladorCantidadCemento = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCal = 0;
  acumuladorPrecioCemento = 0;
  precioConDescuento = 0; 
  precioTotalBruto = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCal = 0; 
  acumuladorPrecioCemento = 0; 
  banderaMasCantidad = true; 

  while(respuesta == "si" || respuesta == "Si")
  {
    tipoBolsa = prompt("Ingrese el producto deseado. 'arena' 'cal' o 'cemento'"); 
      while(tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento")
      {
        tipoBolsa = prompt("Error: Ingrese tipo de producto: 'arena' 'cal' o 'cemento'"); 
      }

    cantidadBolsa = prompt("Ingrese la cantidad 'Hasta 1000' "); 
      while(isNaN(cantidadBolsa) || cantidadBolsa < 0 || cantidadBolsa > 1000)
      {
        cantidadBolsa = parseInt(prompt("Error: Ingrese una cantidad menor a 1000")); 
      }

    precioBolsa = parseFloat(prompt("Ingrese un precio entre 1000 y 2000"));
      while(isNaN(precioBolsa) || precioBolsa < 0)
      {
        precioBolsa = parseFloat(prompt("Error: Ingrese el precio")); 
      } 

      if(cantidadBolsa >= 30)
      {
        descuento = 25;
        precioConDescuento = precioTotalBruto - (precioTotalBruto * descuento);

      }else if (cantidadBolsa >= 10)
      {
        descuento = 15;
        precioConDescuento = precioTotalBruto - (precioTotalBruto * descuento / 100);
      }else 
      {
        precioConDescuento = precioTotalBruto 
      }

  precioTotalBruto = precioTotalBruto + (cantidadBolsa * precioBolsa); 
  respuesta = prompt("¿Desea continuar? si / no");

      if(tipoBolsa == "arena")
      {
        acumuladorCantidadArena = acumuladorCantidadArena + cantidadBolsa; 
        acumuladorPrecioArena = acumuladorPrecioArena + precioBolsa;
      }
      if(tipoBolsa == "cal")
      {
        acumuladorCantidadCal = acumuladorCantidadCal + cantidadBolsa; 
        acumuladorPrecioCal = acumuladorPrecioCal + precioBolsa;
      }
      if(tipoBolsa == "cemento")
      {
        acumuladorCantidadCemento = acumuladorCantidadCemento + cantidadBolsa; 
        acumuladorPrecioCemento = acumuladorPrecioCemento + precioBolsa;
      }
    
      if (acumuladorCantidadArena > acumuladorCantidadCal && acumuladorCantidadArena > acumuladorCantidadCemento) 
      {
        mayorCantidad = "arena es el producto con mas cantidad de bolsas";
        
      }else if(acumuladorCantidadCal > acumuladorCantidadCemento && acumuladorCantidadCal > acumuladorCantidadArena) 
      {
        mayorCantidad = "cal es el producto con mas cantidad de bolsas";
        
      }else if(acumuladorCantidadCemento > acumuladorCantidadCal && acumuladorCantidadCemento > acumuladorCantidadArena)
      {
        mayorCantidad = "cemento es el producto con mas cantidad de bolsas";
          
      }

      if (acumuladorPrecioArena > acumuladorPrecioCal && acumuladorPrecioArena > acumuladorPrecioCemento) 
      {
        productoMasCaro = "arena es el tipo de producto mas caro";
        
      }else if(acumuladorPrecioCal > acumuladorPrecioCemento && acumuladorPrecioCal > acumuladorPrecioArena) 
      {
        productoMasCaro = "cal es el tipo de producto mas caro";
        
      }else if(acumuladorPrecioCemento > acumuladorPrecioCal && acumuladorPrecioCemento > acumuladorPrecioArena)
      {
        productoMasCaro = "cemento es el tipo de producto mas caro";
      }
  }//FIN WHILE

  console.log(precioTotalBruto); 
  console.log(precioConDescuento);
  console.log(mayorCantidad); 
  console.log(productoMasCaro)

}//FIN FUNCION
