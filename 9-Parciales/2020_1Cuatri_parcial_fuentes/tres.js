/*Joaquin ElBitar
Mostrar información
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
    let respuesta;
	let nombreIngresado;
    let edadIngresada;
    let sexoIngresado;
    let estadoCivilIngresado;
    let temperaturaIngresada;
    let personaConMasTemperatura;
    let temperaturaMasAlta;
    let contadorMayoresViudos;
    let contadorHombresSolteros;
    let contadorHombresViudos;
    let contadorTerceraEdad;
    let promedioEdadHombresSolteros;
    let banderaTemperatura;
    let acumuladorEdadHombresSolteros;

    respuesta = "si";
    contadorHombresSolteros = 0;
    contadorHombresViudos = 0;
    contadorMayoresViudos = 0;
    contadorTerceraEdad = 0;
    banderaTemperatura == true;


    while(respuesta == "si" || respuesta == "Si")
    {
        nombreIngresado = prompt("Ingrese su nombre y apellido")
            while(!isNaN(nombreIngresado))
            {
            nombreIngresado = prompt("Error: Ingrese un nombre y apellido valido"); 
            }
        edadIngresada = parseInt(prompt("Ingrse su edad"));
            while(isNaN(edadIngresada)|| edadIngresada < 0 || edadIngresada > 108)
            {
            edadIngresada = prompt("Error: Ingrese una edad valida"); 
            }
        sexoIngresado = prompt("Ingrse su sexo 'f' o 'm'");
            while(!isNaN(sexoIngresado) && sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "M")
            {
            sexoIngresado = prompt("Error: Ingrese un sexo valido"); 
            }
        estadoCivilIngresado = prompt("Ingrse su estado civil 'soltero', 'casado' o 'viudo'");
            while(!isNaN(estadoCivilIngresado) && estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
            {
            estadoCivilIngresado = prompt("Error: Ingrese un estado civil valido"); 
            }
        temperaturaIngresada = parseInt(prompt("Ingrse su temperatura corporal"));
            while(isNaN(temperaturaIngresada)|| temperaturaIngresada < 32 || temperaturaIngresada > 42)
            {
            temperaturaIngresada = prompt("Error: Ingrese un temperatura corporal valida"); 
            }
        respuesta = prompt("¿Desea continuar? si / no");
    //a) El nombre de la persona con mas temperatura.
    if(banderaTemperatura == true || temperaturaMasAlta < temperaturaIngresada)
            {
                temperaturaMasAlta = temperaturaIngresada; 
			    personaConMasTemperatura = nombreIngresado; 
			    banderaTemperatura = false; 
            }   
    //b) Cuantos mayores de edad estan viudo
    if(edadIngresada >= 18 || estadoCivilIngresado == "viudo")
            {
                contadorMayoresViudos = contadorMayoresViudos + 1;
            }
    //c) La cantidad de hombres que hay solteros o viudos.
    switch(estadoCivilIngresado)
            {
                case "soltero":
                    if(sexoIngresado == "m" || sexoIngresado == "M")
                    {
                        acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edadIngresada;
                        contadorHombresSolteros = contadorHombresSolteros + 1;
                    }
                    break;
                case "viudo":
                    if(sexoIngresado == "m" || sexoIngresado == "M")
                    {
                        contadorHombresViudos = contadorHombresViudos+ 1;
                    }
            }
    //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
    if(edadIngresada >= 60 || temperaturaIngresada >= 38)
            {
                contadorTerceraEdad = contadorTerceraEdad + 1;
            }
    //e) El promedio de edad entre los hombres solteros.
    if(sexoIngresado == "m" || sexoIngresado == "M")
            {
                promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / edadIngresada;
            }
    }//FIN WHILE
    
    console.log(personaConMasTemperatura + " tiene una temperatura de " + temperaturaMasAlta);
    console.log("Hay " + contadorMayoresViudos + " mayores de edad viudos");
    console.log("La cantidad de hombres solteros es de " + contadorHombresSolteros + " y de hombres viudos es de " + contadorHombresViudos);
    console.log("El promedio de edad de los hombres solteros es " + promedioEdadHombresSolteros);





	
}//FIN FUNCION
