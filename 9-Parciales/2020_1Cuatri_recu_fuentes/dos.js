/*Joaquin ElBitar
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
function mostrar()
{
  let bolsa;
  let precio;
  let cantidad;
  let contadorArena;
  let contadorCal;
  let contadorCemento;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let respuesta;
  let precioBruto;
  let precioDescuento;
  let banderoMayorPrecio;
  let mayorPrecio;
  let mayorCantidad;
  let bolsaMayorPrecio;
  let descuento10;
  let descuento30;

  contadorArena = 0;
  contadorCal = 0; 
  contadorCemento = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  respuesta = "si";
  banderoMayorPrecio = true;
  descuento10 = 15/100
  descuento30 = 30/100

  while(respuesta == "si" || respuesta == "Si")
    {
      bolsa = prompt("Ingrese el tipo de bolsa arena, cal o cemento");
        while(!isNaN(bolsa) || bolsa != "arena" || bolsa != "cal" || bolsa != "cemento")
          {
            bolsa = prompt("Error: Ingrese un tipo de bolsa valida 'arena', 'cal' o 'cemento'");
          }
      precio = parseInt(prompt("Ingrese el precio entre '1000' y '3000' "));
        while(isNaN(precio) || precio < 1000 || precio > 3000)
          {
            precio = prompt("Error: Ingrese un precio valido entre '1000' y '3000'");
          }
      cantidad = parseInt(prompt("Ingrese la cantidad entre 'No mas de 1000 unidades'"));
        while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000)
          {
            cantidad = prompt("Error: Ingrese una cantidad valida");
          }        
      marca = prompt("Ingrese una marca");
        while(!isNaN(marca))
          {
            marca = prompt("Error: Ingrese una marca valida");
          }
      fabricante = prompt("Ingrese un fabricante");
        while(!isNaN(fabricante))
          {
            fabricante = prompt("Error: Ingrese un fabricante valido");
          }
      switch(bolsa)
        {
          case "arena":
            contadorArena = contadorArena + 1;
            acumuladorArena = acumuladorArena + cantidad;
            break;
          case "cal":
            contadorCal = contadorCal + 1;
            acumuladorCal = acumuladorCal + cantidad;
            break;
          case "cemento":
            contadorCemento = contadorCemento + 1;
            acumuladorCemento = acumuladorCemento + cantidad;
            break;
        }
      respuesta = prompt("¿Desea continuar? si / no");
    }
      precioBruto = (acumuladorArena + acumuladorCal + acumuladorCemento)*precio;

      if(cantidad > 15 || cantidad > 30)
        {
          precioDescuento = precioBruto * descuento10;
        }else if(cantidad > 30)
          {
            precioDescuento = precioBruto * descuento30;
          }else (cantidad < 15)
          {
            precioDescuento = precioBruto
          }
        
      if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
        {
          mayorCantidad ="bolsas de arena";
        }else if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
          {
            mayorCantidad ="bolsas de cal";
        }else(acumuladorCemento > acumuladorArena && acumuladorCemento > acumuladorCal)
          {
            mayorCantidad ="bolsas de cemento"; 
          }
      
      if(bolsa && banderoMayorPrecio == true)
        {
          bolsaMayorPrecio = bolsa;
          mayorPrecio = precio;
          mayorCantidad = cantidad;
          banderoMayorPrecio = false;
        }

    //a) El importe total a pagar , bruto sin descuento y...
    console.log("El importe total a pagar es " + precioBruto);
    console.log("El total a pagar con el descuento aplicado es " + precioDescuento);
    console.log("Hay mas cantidad de " + mayorCantidad + " en la compra");
    console.log("El producto mas caro es " + bolsaMayorPrecio + " con un precio de " + mayorPrecio);
















  //    if(tipoProducto == "arena")
  //   {
  //     acumuladorCantidadArena = acumuladorCantidadArena + cantidad; 
  //     contadorArena = contadorArena + 1; 
  //     acumuladorPrecioArena = acumuladorPrecioArena + precio; 
  // }
  // if(tipoProducto == "cal")
  // {
  //   if(banderaMasCaraCal == true || banderaMasCaraCal > precio)
  //   {
  //     banderaMasCaraCal = precio;
  //     banderaMasCaraCal = false; 
  //   }
  //     acumuladorCantidadCal = acumuladorCantidadCal + cantidad; 
  //     acumuladorPrecioCal = acumuladorPrecioCal + precio;
  // }
  // if(tipoProducto == "cemento")
  // {
  //   if(banderaMasBarataCemento == true || banderaMasBarataCemento < precio)
  //   {
  //     banderaMasBarataCemento = precio;
  //     banderaMasBarataCemento = false; 
  //   }
  //     acumuladorCantidadCemento = acumuladorCantidadCemento + cantidad; 
  //     acumuladorPrecioCemento = acumuladorPrecioCemento + precio;
  // }
  // promedio  = acumuladorPrecioArena / contadorArena; 















}
