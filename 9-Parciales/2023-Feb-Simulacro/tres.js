/*Joaquin ElBitar
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Bariloche con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
Edad(solo pueden ir mayores de edad),
temperatura corporal(validar)
y sexo (validar).
NOTA:el precio por pasajero es de $9000.
Se debe informar (solo si corresponde):
a) La cantidad de personas con PAMI de mas de 60 años.
b) El nombre y temperatura de la mujer OSDE mas joven.
c) Cuanto sale el viaje total sin descuento.
d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{
    let nombre;
    let obraSocial;
    let edad;
    let temperaturaIngresada;
    let sexo;
    let respuesta;
    let precioViaje;
    let banderaMujerMasJoven;
    let temperaturaMujerMasJoven;
    let nombreMujerMasJoven;
    let precioViajeTotal;
    let precioViajeDescuento;
    let contadorPasajeros; 
    let acumuladorPasajeros;
    let pasajerosPami;
    let contadorPasajerosPami;
    let descuentoPami; 


    respuesta = "si"
    precioViaje = 9000;
    banderaMujerMasJoven = true;
    contadorPasajeros = 0;
    acumuladorPasajeros = 0;
    contadorPasajerosPami = 0;
    descuentoPami = 25/100

	while(respuesta == "si" || respuesta == "Si")
    {
        nombre = prompt("Ingrese su nombre");
            while(!isNaN(nombre))
            {
                nombre = prompt("Error: Ingrese un nombre valido");
            }
        obraSocial = prompt("Ingrese su obra social 'PAMI','OSDE'o'otras'");
            while(obraSocial != "PAMI" || obraSocial != "OSDE" || obraSocial != "otras")
            {
                obraSocial = prompt("Error: Ingrese una obra social valida");
            }
        edad = parseInt(prompt("Ingrse su edad"));
            while(isNaN(edad)|| edad < 0 || edad > 108)
            {
            edad = prompt("Error: Ingrese una edad valida"); 
            }
        temperaturaIngresada = parseInt(prompt("Ingrse su temperatura corporal"));
            while(isNaN(temperaturaIngresada)|| temperaturaIngresada < 32 || temperaturaIngresada > 42)
            {
            temperaturaIngresada = prompt("Error: Ingrese un temperatura corporal valida"); 
            }
        sexo = prompt("Ingrese su sexo 'femenino' 'masculino' 'nobinario'");
            while(sexo != "femenino" || sexo != "masculino" || sexo != "nobinario")
            {
                sexo = prompt("Error: Ingrese un sexo valido");
            }
        respuesta = prompt("¿Desea seguir ingresando datos? 'Si' / 'No'");
        contadorPasajeros = contadorPasajeros + 1;
    if(obraSocial == "PAMI")
        {   
            contadorPasajerosPami = contadorPasajerosPami + 1;
        }
        }//FIN WHILE
// a) La cantidad de personas con PAMI de mas de 60 años.
    if(edad < 60 && obraSocial == "PAMI")
    {
        nombre
    }
// b) El nombre y temperatura de la mujer con OSDE mas joven.
    if(banderaMujerMasJoven == true && sexo == "femenino" && obraSocial == "OSDE")
    {
        nombreMujerMasJoven = nombre;
        temperaturaMujerMasJoven = temperaturaIngresada;
        banderaMujerMasJoven = false;
    }
// c) Cuanto sale el viaje total sin descuento.
    precioViajeTotal = precioViaje * contadorPasajeros; 

    
// d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
    switch(obraSocial) 
    {
        case "PAMI":
            if(obraSocial == "PAMI" && contadorPasajeros > contadorPasajeros)
            {
                precioViajeDescuento = precioViajeTotal * descuentoPami;//INICIAR CONTADOR EN 0
            }
    }
//porcentajePami = contadorPasajerosPami * 100 / contadorTotalPasajeros;

    console.log("La cantidad de personas con PAMI de mas de 60 años es " + nombre)
    console.log("La temperatura de la mujer con osde mas joven es " + temperaturaMujerMasJoven + " y su nombre es " + nombreMujerMasJoven);
    console.log("El precio total del viaje es " + precioViajeTotal);
    console.log("El precio final del viaje con descuento es " + precioViajeDescuento);

}//fin funcion mostrar
