/*Joaquin ElBitar
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let lamparita;
    let descuento;
    let mensaje; 
    let precio; 
    let monto;

    precio = 35 
    lamparita = parseInt(document.getElementById("txtIdCantidad").value);
    descuento = 50/100
    monto = lamparita * precio 
    montoFinal = monto * descuento
    

    if(lamparita <=6 )
    {
        mensaje = "El monto final es " + montoFinal
        document.getElementById("txtIdprecioDescuento").value = mensaje;
    }
}

function CalcularPrecio () 
{
    let lamparita;
    let argLuz;
    let mensaje; 
    let precio; 
    let monto;
    let descuento;

    precio = 35;
    lamparita = parseInt(document.getElementById("txtIdCantidad").value);
    argLuz = 40/100;
    monto = lamparita * precio;
    

    
    if(lamparita ==5 )
    {
        mensaje = "El monto final es " + (monto - monto *argLuz);
        document.getElementById("txtIdprecioDescuento").value = mensaje;
    }else if(lamparita ==4)
    {
        descuento = 30/100;
        mensaje = "El monto final es " + (monto - monto * descuento);
        document.getElementById("txtIdprecioDescuento").value = mensaje;
    }
}

function CalcularPrecio ()
{
    let lamparita;
    let mensaje; 
    let precio; 
    let monto;
    let felipeLamp;
    let argLuz;
    let descuento;

    precio = 35;
    argLuz = 25/100;
    felipeLamp = 25/100;
    descuento = 20/100;
    lamparita = parseInt(document.getElementById("txtIdCantidad").value);
    monto = lamparita * precio;

    if(lamparita ==4 )
    {
        mensaje = "El monto final es " + (monto - monto * argLuz)
        console.log(mensaje)
    }else if









}
