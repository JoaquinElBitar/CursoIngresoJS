

function mostrar()
{
    while(respuesta == "si" || respuesta == "Si")
        { 
            nombre = prompt("Ingrese su nombre");
                    while(!isNaN(nombre))
                        {
                            nombre = prompt("Error: Ingrese un nombre valido");
                        }

            edad = parseInt(prompt("Ingrse su edad '+18'"));
                while(isNaN(edad)|| edad < 18 || edad > 108)
                    {
                    edad = prompt("Error: Ingrese una edad valida '+18'"); 
                    }

            sexo = prompt("Ingrese su sexo 'femenino' 'masculino' 'nobinario'");
                while(sexo != "femenino" && sexo != "masculino" && sexo != "nobinario")
                    {
                        sexo = prompt("Error: Ingrese un sexo valido");
                    }

            estadoCivil = prompt("Ingrese su estado civil 'soltero', 'casado' o 'viudo'");
                while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
                    {
                        estadoCivil = prompt("Error: Ingrese un estado civil valido 'soltero', 'casado' o 'viudo'");
                    }
                switch(estadoCivil)
                {
                    case "soltero":
                        contadorSolteros = contadorSolteros + 1;
                        acumuladorSolteros + acumuladorSolteros + estadoCivil;

                        break;
                    case "casado":
                        contadorCasados = contadorCasados + 1;
                        acumuladorCasados + acumuladorCasados + estadoCivil;
                        
                        break;
                    case "viudo":
                        contadorViudos = contadorViudos + 1;
                        acumuladorViudos + acumuladorViudos + estadoCivil;

                        break;
                }   



            temperatura = parseInt(prompt("Ingrse su temperatura corporal"));
                while(isNaN(temperatura)|| temperatura < 32 || temperatura > 42)
                    {
                    temperatura = prompt("Error: Ingrese un temperatura corporal valida"); 
                    }


            tipoProducto = prompt("Ingrese el tipo de producto 'barbijo', 'jabon' o 'alcohol'");
                while(tipoProducto != "barbijo" || tipoProducto != "jabon" || tipoProducto != "alcohol")
                    {
                    tipoProducto = prompt("Error: Ingrese un tipo de producto valido 'barbijo', 'jabon' o 'alcohol'");
                    }

            precio = parseInt(prompt("Ingrese el precio entre '100' y '300' "));
                while(isNaN(precio) || precio < 100 || precio > 300)
                    {
                        precio = prompt("Error: Ingrese un precio valido entre '100' y '300'");
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

            precioBruto = (acumuladorArena + acumuladorCal + acumuladorCemento)*precio;

            if(cantidad > 15 || cantidad > 30)
                {
                precioDescuento = precioBruto * descuento10;
                }else if(cantidad > 30)
                {
                    precioDescuento = precioBruto * descuento30;
                }else (cantidad < 15)
                {
                    precioDescuento = precioBruto;
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


            saldo = parseFloat(prompt("Ingrese su saldo"))
                while(isNaN(saldo) || saldo <-120000 || saldo > 360000)
                {

                }
            if(tipo == "cemento" && (bandera == true || precioMinimo < precio))
            {
                precioMinimo = precio;
                bandera = false;
            }

            if(precioMinimo > precio)
            {
            console.log(precioMinimo)
            }


        }
}//FIN FUNCION MOSTRAR





























































































// /*Joaquin ElBitar
// Enunciado:

// Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más caro de los jabones, la cantidad de unidades y el fabricante
// b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
// c) Cuántas unidades de Barbijos se compraron en total
// */
// function mostrar()
// {
//     let tipoProducto;
//     let precio;
//     let cantidad;
//     let marca;
//     let fabricante;
//     let contadorBarbijo;
//     let contadorJabon;
//     let contadoAlcohol;
//     let acumuladorBarbijo;
//     let acumuladorJabon;
//     let acumuladorAlcohol;
//     let banderaJabon;
//     let jabonMasCaro;
//     let fabricanteJabonMasCaro;
//     let cantidadJabonMasCaro;
//     let precioJabonMasCaro;
//     let mensaje;
//     let mayorCantidad;
//     let promedio;


//     contadorBarbijo = 0;
//     contadorJabon = 0; 
//     contadoAlcohol = 0;
//     acumuladorBarbijo = 0;
//     acumuladorJabon = 0;
//     acumuladorBarbijo = 0;
//     banderaJabon = true;
    
//     for(i = 0 ; i < 5; i++)
//         {
            // tipoProducto = prompt("Ingrese el tipo de producto 'barbijo', 'jabon' o 'alcohol'");
            //     // while(!isNaN(tipoProducto) || tipoProducto != "barbijo" || tipoProducto != "jabon" || tipoProducto != "alcohol")
            //     //     {
            //     //     tipoProducto = prompt("Error: Ingrese un tipo de producto valido 'barbijo', 'jabon' o 'alcohol'");
            //     //     }
//             precio = parseInt(prompt("Ingrese el precio entre '100' y '300' "));
//                 while(isNaN(precio) || precio < 100 || precio > 300)
//                     {
//                         precio = prompt("Error: Ingrese un precio valido entre '100' y '300'");
//                     }
//             cantidad = parseInt(prompt("Ingrese la cantidad entre 'No mas de 1000 unidades'"));
//                 while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000)
//                 {
//                     cantidad = prompt("Error: Ingrese una cantidad valida");
//                 }        
//             marca = prompt("Ingrese una marca");
//                 while(!isNaN(marca))
//                 {
//                     marca = prompt("Error: Ingrese una marca valida");
//                 }
//             fabricante = prompt("Ingrese un fabricante");
//                 while(!isNaN(fabricante))
//                 {
//                     fabricante = prompt("Error: Ingrese un fabricante valido");
//                 }
//             switch(tipoProducto)
//                 {
//                     case "barbijo":
//                     contadorBarbijo = contadorBarbijo + 1;
//                     acumuladorBarbijo = acumuladorBarbijo +cantidad;
//                     break;
//                     case "jabon":
//                     contadorJabon = contadorJabon + 1;
//                     acumuladorJabon = acumuladorJabon + cantidad;
//                 //a) Del más caro de los jabones, la cantidad de unidades y el fabricante
//                 if(banderaJabon == true)
//                     {   
//                         precioJabonMasCaro = precio;
//                         jabonMasCaro = tipoProducto;
//                         cantidadJabonMasCaro = cantidad;
//                         fabricanteJabonMasCaro = fabricante;
//                         banderaJabon = false;
//                     }
//                     break;
//                     case "alcohol":
//                         contadoAlcohol = contadoAlcohol +1;
//                         acumuladorAlcohol = acumuladorAlcohol + cantidad;
//                         break;
//             }
//         //b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
//             if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
//                 {
//                     mayorCantidad = acumuladorBarbijo + " unidades de barbijo";
//                     promedio = acumuladorBarbijo / contadorBarbijo
//                 }else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
//                     {
//                         mayorCantidad = acumuladorJabon + " unidades de jabon";
//                         promedio = acumuladorJabon / contadorJabon;
//                 }else(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
//                     {
//                         mayorCantidad = acumuladorAlcohol + " unidades de alcohol"; 
//                         promedio = acumuladorAlcohol / contadoAlcohol;
//                     }

//        }//FIN FOR

//        console.log("El jabon mas caro cuesta " + precioJabonMasCaro + " , hay " + cantidadJabonMasCaro + " unidades y el fabricante es " + fabricanteJabonMasCaro);
//        console.log("Hay " + mayorCantidad + " y el promedio es " + promedio);
//        console.log("Se compraron " + acumuladorBarbijo + " unidades de barbijos en total");




	
// }


