/*Joaquin ElBitar
Enunciado:

Inmoviliaria: Nos piden armar un programa para ingresar los siguientes datos de los inquilinos de los inmuebles: 
nombre,
lugar(CABA, Conurbano, Interior) 
tipo( dpto, casa, quinta) en CABA solo se alquilan dptos y casas
cantidad de habitantes (1-3 p/ dpto, 1-7 p/casa, 1-15 p/ quinta)
alquiler
INFORMAR: 
a) Cantidad de casa alquiladas en CABA
b) El inquilino con alquiler más caro
c) Del interior del país, la quinta más cara
*/
function mostrar()
{
    let nombre;
    let localidad;
    let tipoCasa;
    let cantidadHabitantes;
    let alquiler;
    let respuesta;
    let contadorCasasCaba;
    let banderaAlquilerMasCaro;
    let inquilinoAlquilerMasCaro;
    let alquilerMasCaro;
    let quintaMasCara;
     
    respuesta = "si";
    banderaAlquilerMasCaro = true;
    contadorCasasCaba = 0;

    while(respuesta == "si" || respuesta == "Si")
    {
        nombre = prompt("Ingrese su nombre");
            while(!isNaN(nombre))
                {
                    nombre = prompt("Error: Ingrese un nombre valido");
                }
        localidad = parseInt(prompt("Ingrese su localidad 'CABA', 'Conurbano', 'Interior'"));
            while(localidad != "CABA" && localidad != "Conurbano" && localidad != "Interior")
            {
                localidad = prompt("Error: Ingrese una localidad valida 'CABA', 'Conurbano', 'Interior'"); 
            }
            if(localidad == "CABA")
                {
                    tipoCasa = prompt("Ingrese donde vive 'dpto', 'casa' o 'quinta'");
                        while(tipoCasa != "dpto" && tipoCasa != "casa")
                        {
                            tipoCasa = prompt("Error: Ingrese 'dpto' o 'casa'");
                        }
                }else        
                {
                    tipoCasa = prompt("Ingrese donde vive 'dpto', 'casa' o 'quinta'");
                        while(tipoCasa != "dpto" && tipoCasa != "casa" && tipoCasa != "quinta")
                        {
                            tipoCasa = prompt("Error: Ingrese 'dpto', 'casa', 'quinta'");
                        }
                }

        // tipoCasa = prompt("Ingrese donde vive 'dpto', 'casa', 'quinta'");
        //     while(tipoCasa != "dpto" && tipoCasa != "casa" && tipoCasa != "quinta")
        //         {
        //             tipoCasa = prompt("Error: Ingrese una viviendo valida");
        //         }
        cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes"));
            while(isNaN(cantidadHabitantes)|| cantidadHabitantes < 0 || cantidadHabitantes > 30 )
                {
                    cantidadHabitantes = prompt("Error: Ingrese una cantidad valida");
                }
        alquiler = parseFloat(prompt("Ingrese cuanto paga de alquiler"));
            while(isNaN(alquiler))
                {
                    alquiler = prompt("Error: Ingrese una cuota de alquiler valida");
                }
        respuesta = prompt("¿Desea seguir ingresando datos? 'Si' / 'No'");


        //b) El inquilino con alquiler más caro
        if(banderaAlquilerMasCaro == true || alquilerMasCaro > alquiler)
            {
                inquilinoAlquilerMasCaro = nombre;
                alquilerMasCaro = alquiler;
                banderaAlquilerMasCaro = false;
            }

        switch(tipoCasa)
        {
            case "casa":

                break;
            case "dpto":

                
                break;
            case "quinta":

                
                break;
    }

    console.log("Hay " + contadorCasasCaba + " casas alquiladas en CABA");
    console.log("El inquilino mas caro es " + inquilinoAlquilerMasCaro + " y paga " + alquilerMasCaro);
    console.log("La quinta mas cara del interior cuesta " + quintaMasCara);


}

}





















































// function mostrar()
// {
//     let nombre;
//     let situacionLaboral;
//     let cantidadMaterias;
//     let sexo;
//     let notaPromedioTrabajadores;
//     let notaPromedioBuscando;
//     let notaPromedioEstudiantes;
//     let edad;
//     let banderaMejorPromedio;
//     let mejorPromedio;
//     let personaMejorPromedio;
//     let banderaHombreViejo;
//     let edadHombreViejo;
//     let nombreHombreViejo;
//     let banderaPersonaMenosMaterias;
//     let nombrePersonaMenosMaterias;
//     let edadPersonaMenosMaterias;
//     let personaMenosCantidadMaterias;

//     respuesta = "si";
//     cantidadMaterias = 0;
//     notaPromedio = 0;  
//     banderaMejorPromedio = true;
//     banderaHombreViejo = true;
//     banderaPersonaMenosMaterias = true;


//     while(respuesta == "si" || respuesta == "Si")
//     {
//         nombre = prompt("Ingrese su nombre");
//             while(!isNaN(nombre))
//             {
//                 nombre = prompt("Error: Ingrese un nombre valido");
//             }
//         situacionLaboral = prompt("Ingrese su situacion laboral actual 'buscando','trabajando'o'solo estudiante'");
//             while(situacionLaboral != "buscando" || situacionLaboral != "trabajando" || situacionLaboral != "solo estudiante")
//             {
//                 situacionLaboral = prompt("Error: Ingrese una situacion laboral valida");
//             }
//         cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias restantes"));
//             while(isNaN(cantidadMaterias))
//             {
//                 cantidadMaterias = prompt("Error: Ingrese una cantidad de materias valida");
//             }
//         sexo = prompt("Ingrese su sexo 'femenino' 'masculino' 'nobinario'");
//             while(sexo != "femenino" || sexo != "masculino" || sexo != "nobinario")
//             {
//                 sexo = prompt("Error: Ingrese un sexo valido");
//             }
//         notaPromedio = parseFloat(prompt("Ingrse su nota"));
//             while(isNaN(notaPromedio)|| notaPromedio < 0 || notaPromedio > 10)
//             {
//             notaPromedio = prompt("Error: Ingrese una nota valida"); 
//             }
//         edad = parseInt(prompt("Ingrse su edad '+18'"));
//             while(isNaN(edad)|| edad < 18 || edad > 108)
//             {
//             edad = prompt("Error: Ingrese una edad valida '+18'"); 
//             }
       
//         respuesta = prompt("¿Desea seguir ingresando datos? 'Si' / 'No'");
//     }//FIN WHILE
// // a) El nombre del mejor promedio de los que tarbajan o estan buscando
//     if(banderaMejorPromedio == true && mejorPromedio > notaPromedio && situacionLaboral == "trabajando" || situacionLaboral == "buscando")
//     {
//         mejorPromedio = notaPromedio; 
//         personaMejorPromedio = nombre; 
//         banderaMejorPromedio = false; 
//     }  
// // b) El nombre del mas viejo de los alumnos que solo sea estudiantes
//     if(banderaHombreViejo == true && edadHombreViejo > edad && situacionLaboral == "solo estudiante")
//     {
//         edadHombreViejo = edad; 
//         nombreHombreViejo = nombre; 
//         banderaHombreViejo = false; 
//     }  
// // c) El promedio de nota por situacion laboral
//     switch(situacionLaboral)
//     {
//         case "trabajando":
//             notaPromedioTrabajadores = notaPromedio;
//             break;
//         case "buscando":
//             notaPromedioBuscando = notaPromedio;
//                 break;
//         case "solo estudiante":
//             notaPromedioEstudiantes = notaPromedio;
//             break;  
//     }
// // d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
//     if(situacionLaboral == "buscando")
//     {
//         edadPersonaMenosMaterias = edad; 
//         nombrePersonaMenosMaterias = nombre; 
//         personaMenosCantidadMaterias = cantidadMaterias;
//         banderaPersonaMenosMaterias = false; 
//     }   
//     console.log("El nombre del mejor promedio trabajando o buscando trabajo es " + personaMejorPromedio);
//     console.log("El nombre de la persona mas vieja estudiando es " + nombreHombreViejo);
//     console.log("El promedio de notas de personas trabajando es " + notaPromedioTrabajadores + ", de personas buscando trabajo es " + notaPromedioBuscando + " y de estudiantes es " + notaPromedioEstudiantes);
//     console.log("A" + nombrePersonaMenosMaterias + " le quedan " + personaMenosCantidadMaterias + " y esta buscando trabajo ");

// }//FIN FUNCION
