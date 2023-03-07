/*Joaquin ElBitar
Enunciado:
"Concierto"
Realizar el algoritmo que permita ingresar una cantidad indeterminada de tickets : 
recital
tipo("POP", "ROCK", " REGETTON"),
cantidad de entradas,(no mas de 20)  
precio de cada entrada, 
lugar("REX, "LUNA PARK", "TRASTIENDA"
a)La cantidad de entradas pares vendidas. 
b)A que tipo de recital la gente fue mas.  
c)El precio de la entrada más barata, el tipo de musica y a donde era el recital
*/
function mostrar()
{
    let recital;
    let tipoRecital;
    let lugar;
    let cantidadEntradas;
    let precio;
    let respuesta;
    let contadorEntradasPares;
    let acumuladorEntradasPares;
    let banderaEntradaMasBarata;
    let entradaMasBarata;
    let tipoDeMusicaMasBarata;
    let lugarEntradaMasBarata;
    let acumuladorEntradasPop;
    let acumuladorEntradasRock;
    let acumuladorEntradasRegetton;
    let mayorCantidad;

    respuesta = "si";
    banderaEntradaMasBarata =true;
    acumuladorEntradasPop = 0;
    acumuladorEntradasRock = 0;
    acumuladorEntradasRegetton = 0;

    while(respuesta == "si" || respuesta == "Si")
        {
        recital = prompt("Ingrese el recital");
            while(!isNaN(recital))
                {
                    recital = prompt("Error: Ingrese un recital valido");
                }
        tipoRecital = prompt("Ingrese el tipo de musica 'POP', 'ROCK', 'REGETTON'");
            while(!isNaN(tipoRecital))
                {
                tipoRecital = prompt("Error: Ingrese una recital valida 'POP', 'ROCK', 'REGETTON'"); 
                }
        cantidadEntradas = parseInt(prompt("Ingrese la cantidad de etradas"));
            while(isNaN(cantidadEntradas)|| cantidadEntradas < 1 || cantidadEntradas > 20 )
                {
                    cantidadEntradas = prompt("Error: Ingrese una cantidad de entradas valida");
                }
        precio = parseFloat(prompt("Ingrese el precio"));
            while(isNaN(precio)|| precio < 4000)
                {
                    precio = prompt("Error: Ingrese un precio mayor a '$4000'");
                }
        lugar = prompt("Ingrese el lugar del recital 'REX', 'LUNA PARK', 'TRASTIENDA'");
            while(!isNaN(lugar))
                {
                    lugar = prompt("Error: Ingrese un lugar valido 'REX', 'LUNA PARK', 'TRASTIENDA'");
                }
        respuesta = prompt("¿Desea seguir ingresando datos? 'Si' / 'No'");

        switch(tipoRecital)
        {
            case "POP":
                acumuladorEntradasPop = acumuladorEntradasPop +cantidadEntradas;
                break;
            case "ROCK":
                acumuladorEntradasRock = acumuladorEntradasRock + cantidadEntradas;
                break;
            case "REGETTON":
                acumuladorEntradasRegetton = acumuladorEntradasRegetton + cantidadEntradas;
                break;
        }
    }   

    if(acumuladorEntradasPop > acumuladorEntradasRock && acumuladorEntradasPop > acumuladorEntradasRegetton)
    {
      mayorCantidad ="entradas pop";
      tipoRecital = "pop";
    }else if(acumuladorEntradasRock > acumuladorEntradasPop && acumuladorEntradasRock > acumuladorEntradasRegetton)
      {
        mayorCantidad ="entradas rock";
        tipoRecital = "rock";
    }else(acumuladorEntradasRegetton > acumuladorEntradasPop && acumuladorEntradasRegetton > acumuladorEntradasRock)
      {
        mayorCantidad ="entradas regetton"; 
        tipoRecital = "regetton";
      }

    // a)La cantidad de entradas pares vendidas. 
    if(cantidadEntradas %2 == 0)
        {
            acumuladorEntradasPares = acumuladorEntradasPares + cantidadEntradas;
        }
    //c)El precio de la entrada más barata, el tipo de musica y a donde era el recital
    if(banderaEntradaMasBarata == true || entradaMasBarata < precio)
        {
            entradaMasBarata = precio;
            tipoDeMusicaMasBarata = tipoRecital;
            lugarEntradaMasBarata = lugar;
            banderaEntradaMasBarata = false;
        }

    //b)A que tipo de recital la gente fue mas.      
    console.log(mayorCantidad + "fueron al recital de " + tipoRecital);
    console.log("Se vendieron " + acumuladorEntradasPares +" entradas pares");
    console.log("El precio de la entrada mas barata es " + precio + " el tipo de musica es " + tipoDeMusicaMasBarata + " y el recital es en " + lugarEntradaMasBarata);

}//fin funcion mostrar



















































//let recital;
//     let obraSocial;
//     let edad;
//     let temperaturaIngresada;
//     let sexo;
//     let respuesta;
//     let precioViaje;
//     let banderaMujerMasJoven;
//     let temperaturaMujerMasJoven;
//     let recitalMujerMasJoven;
//     let precioViajeTotal;
//     let precioViajeDescuento;
//     let contadorPasajeros; 
//     let acumuladorPasajeros;
//     let pasajerosPami;
//     let contadorPasajerosPami;
//     let descuentoPami; 


//     respuesta = "si"
//     precioViaje = 9000;
//     banderaMujerMasJoven = true;
//     contadorPasajeros = 0;
//     acumuladorPasajeros = 0;
//     contadorPasajerosPami = 0;
//     descuentoPami = 25/100

// 	while(respuesta == "si" || respuesta == "Si")
//     {
//         recital = prompt("Ingrese su recital");
//             while(!isNaN(recital))
//             {
//                 recital = prompt("Error: Ingrese un recital valido");
//             }
//         obraSocial = prompt("Ingrese su obra social 'PAMI','OSDE'o'otras'");
//             while(obraSocial != "PAMI" || obraSocial != "OSDE" || obraSocial != "otras")
//             {
//                 obraSocial = prompt("Error: Ingrese una obra social valida");
//             }
//         edad = parseInt(prompt("Ingrse su edad"));
//             while(isNaN(edad)|| edad < 0 || edad > 108)
//             {
//             edad = prompt("Error: Ingrese una edad valida"); 
//             }
//         temperaturaIngresada = parseInt(prompt("Ingrse su temperatura corporal"));
//             while(isNaN(temperaturaIngresada)|| temperaturaIngresada < 32 || temperaturaIngresada > 42)
//             {
//             temperaturaIngresada = prompt("Error: Ingrese un temperatura corporal valida"); 
//             }
//         sexo = prompt("Ingrese su sexo 'femenino' 'masculino' 'nobinario'");
//             while(sexo != "femenino" || sexo != "masculino" || sexo != "nobinario")
//             {
//                 sexo = prompt("Error: Ingrese un sexo valido");
//             }
//         respuesta = prompt("¿Desea seguir ingresando datos? 'Si' / 'No'");
//         contadorPasajeros = contadorPasajeros + 1;
//     if(obraSocial == "PAMI")
//         {   
//             contadorPasajerosPami = contadorPasajerosPami + 1;
//         }
//         }//FIN WHILE
// // a) La cantidad de personas con PAMI de mas de 60 años.
//     if(edad < 60 && obraSocial == "PAMI")
//     {
//         recital
//     }
// // b) El recital y temperatura de la mujer con OSDE mas joven.
//     if(banderaMujerMasJoven == true && sexo == "femenino" && obraSocial == "OSDE")
//     {
//         recitalMujerMasJoven = recital;
//         temperaturaMujerMasJoven = temperaturaIngresada;
//         banderaMujerMasJoven = false;
//     }
// // c) Cuanto sale el viaje total sin descuento.
//     precioViajeTotal = precioViaje * contadorPasajeros; 

    
// // d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
//     switch(obraSocial) 
//     {
//         case "PAMI":
//             if(obraSocial == "PAMI" && contadorPasajeros > contadorPasajeros)
//             {
//                 precioViajeDescuento = precioViajeTotal * descuentoPami;//INICIAR CONTADOR EN 0
//             }
//     }
// //porcentajePami = contadorPasajerosPami * 100 / contadorTotalPasajeros;

//     console.log("La cantidad de personas con PAMI de mas de 60 años es " + recital)
//     console.log("La temperatura de la mujer con osde mas joven es " + temperaturaMujerMasJoven + " y su recital es " + recitalMujerMasJoven);
//     console.log("El precio total del viaje es " + precioViajeTotal);
//     console.log("El precio final del viaje con descuento es " + precioViajeDescuento);
