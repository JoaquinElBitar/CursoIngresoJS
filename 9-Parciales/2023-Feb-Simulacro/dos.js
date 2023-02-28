/*Joaquin ElBitar
Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
Nombre
Situcación laboral ("buscando" , "trabajando" o "solo estudiante")
Cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
Edad (validar)
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
*/
function mostrar()
{
    let nombre;
    let situacionLaboral;
    let cantidadMaterias;
    let sexo;
    let notaPromedioTrabajadores;
    let notaPromedioBuscando;
    let notaPromedioEstudiantes;
    let edad;
    let banderaMejorPromedio;
    let mejorPromedio;
    let personaMejorPromedio;
    let banderaHombreViejo;
    let edadHombreViejo;
    let nombreHombreViejo;
    let banderaPersonaMenosMaterias;
    let nombrePersonaMenosMaterias;
    let edadPersonaMenosMaterias;
    let personaMenosCantidadMaterias;

    respuesta = "si";
    cantidadMaterias = 0;
    notaPromedio = 0;  
    banderaMejorPromedio = true;
    banderaHombreViejo = true;
    banderaPersonaMenosMaterias = true;


    while(respuesta == "si" || respuesta == "Si")
    {
        nombre = prompt("Ingrese su nombre");
            while(!isNaN(nombre))
            {
                nombre = prompt("Error: Ingrese un nombre valido");
            }
        situacionLaboral = prompt("Ingrese su situacion laboral actual 'buscando','trabajando'o'solo estudiante'");
            while(situacionLaboral != "buscando" || situacionLaboral != "trabajando" || situacionLaboral != "solo estudiante")
            {
                situacionLaboral = prompt("Error: Ingrese una situacion laboral valida");
            }
        cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias restantes"));
            while(isNaN(cantidadMaterias))
            {
                cantidadMaterias = prompt("Error: Ingrese una cantidad de materias valida");
            }
        sexo = prompt("Ingrese su sexo 'femenino' 'masculino' 'nobinario'");
            while(sexo != "femenino" || sexo != "masculino" || sexo != "nobinario")
            {
                sexo = prompt("Error: Ingrese un sexo valido");
            }
        notaPromedio = parseFloat(prompt("Ingrse su nota"));
            while(isNaN(notaPromedio)|| notaPromedio < 0 || notaPromedio > 10)
            {
            notaPromedio = prompt("Error: Ingrese una nota valida"); 
            }
        edad = parseInt(prompt("Ingrse su edad '+18'"));
            while(isNaN(edad)|| edad < 18 || edad > 108)
            {
            edad = prompt("Error: Ingrese una edad valida '+18'"); 
            }
       
        respuesta = prompt("¿Desea seguir ingresando datos? 'Si' / 'No'");
    }//FIN WHILE
// a) El nombre del mejor promedio de los que tarbajan o estan buscando
    if(banderaMejorPromedio == true && mejorPromedio > notaPromedio && situacionLaboral == "trabajando" || situacionLaboral == "buscando")
    {
        mejorPromedio = notaPromedio; 
        personaMejorPromedio = nombre; 
        banderaMejorPromedio = false; 
    }  
// b) El nombre del mas viejo de los alumnos que solo sea estudiantes
    if(banderaHombreViejo == true && edadHombreViejo > edad && situacionLaboral == "solo estudiante")
    {
        edadHombreViejo = edad; 
        nombreHombreViejo = nombre; 
        banderaHombreViejo = false; 
    }  
// c) El promedio de nota por situacion laboral
    switch(situacionLaboral)
    {
        case "trabajando":
            notaPromedioTrabajadores = notaPromedio;
            break;
        case "buscando":
            notaPromedioBuscando = notaPromedio;
                break;
        case "solo estudiante":
            notaPromedioEstudiantes = notaPromedio;
            break;  
    }
// d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
    if(situacionLaboral == "buscando")
    {
        edadPersonaMenosMaterias = edad; 
        nombrePersonaMenosMaterias = nombre; 
        personaMenosCantidadMaterias = cantidadMaterias;
        banderaPersonaMenosMaterias = false; 
    }   
    console.log("El nombre del mejor promedio trabajando o buscando trabajo es " + personaMejorPromedio);
    console.log("El nombre de la persona mas vieja estudiando es " + nombreHombreViejo);
    console.log("El promedio de notas de personas trabajando es " + notaPromedioTrabajadores + ", de personas buscando trabajo es " + notaPromedioBuscando + " y de estudiantes es " + notaPromedioEstudiantes);
    console.log("A" + nombrePersonaMenosMaterias + " le quedan " + personaMenosCantidadMaterias + " y esta buscando trabajo ");

}//FIN FUNCION
