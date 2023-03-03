/*Joaquin ElBitar
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
    let tipoProducto;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let contadorBarbijo;
    let contadorJabon;
    let contadoAlcohol;
    let acumuladorBarbijo;
    let acumuladorJabon;
    let acumuladorAlcohol;
    let banderaJabon;
    let jabonMasCaro;
    let fabricanteJabonMasCaro;
    let cantidadJabonMasCaro;
    let precioJabonMasCaro;
    let mensaje;
    let mayorCantidad;
    let promedio;


    contadorBarbijo = 0;
    contadorJabon = 0; 
    contadoAlcohol = 0;
    acumuladorBarbijo = 0;
    acumuladorJabon = 0;
    acumuladorBarbijo = 0;
    banderaJabon = true;
    
    for(i = 0 ; i < 5; i++)
        {
            tipoProducto = prompt("Ingrese el tipo de producto 'barbijo', 'jabon' o 'alcohol'");
                // while(!isNaN(tipoProducto) || tipoProducto != "barbijo" || tipoProducto != "jabon" || tipoProducto != "alcohol")
                //     {
                //     tipoProducto = prompt("Error: Ingrese un tipo de producto valido 'barbijo', 'jabon' o 'alcohol'");
                //     }
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
            switch(tipoProducto)
                {
                    case "barbijo":
                    contadorBarbijo = contadorBarbijo + 1;
                    acumuladorBarbijo = acumuladorBarbijo +cantidad;
                    break;
                    case "jabon":
                    contadorJabon = contadorJabon + 1;
                    acumuladorJabon = acumuladorJabon + cantidad;
                //a) Del más caro de los jabones, la cantidad de unidades y el fabricante
                if(banderaJabon == true)
                    {   
                        precioJabonMasCaro = precio;
                        jabonMasCaro = tipoProducto;
                        cantidadJabonMasCaro = cantidad;
                        fabricanteJabonMasCaro = fabricante;
                        banderaJabon = false;
                    }
                    break;
                    case "alcohol":
                        contadoAlcohol = contadoAlcohol +1;
                        acumuladorAlcohol = acumuladorAlcohol + cantidad;
                        break;
            }
        //b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
            if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
                {
                    mayorCantidad = acumuladorBarbijo + " unidades de barbijo";
                    promedio = acumuladorBarbijo / contadorBarbijo
                }else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
                    {
                        mayorCantidad = acumuladorJabon + " unidades de jabon";
                        promedio = acumuladorJabon / contadorJabon;
                }else(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
                    {
                        mayorCantidad = acumuladorAlcohol + " unidades de alcohol"; 
                        promedio = acumuladorAlcohol / contadoAlcohol;
                    }

       }//FIN FOR

       console.log("El jabon mas caro cuesta " + precioJabonMasCaro + " , hay " + cantidadJabonMasCaro + " unidades y el fabricante es " + fabricanteJabonMasCaro);
       console.log("Hay " + mayorCantidad + " y el promedio es " + promedio);
       console.log("Se compraron " + acumuladorBarbijo + " unidades de barbijos en total");




	
}
