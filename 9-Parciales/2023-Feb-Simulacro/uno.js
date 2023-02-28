/*Joaquin ElBitar
El alumno deberá ingresar: 
Nombre del alumno Carrera (Programacion, Psicología, Diseño gráfico) 
Estado de la carrera: en curso-abandono-finalizado 
Sexo (femenino-masculino-nobinario) 
Edad (18 o más) 
Nota (entre 1 y 10) 
Se desconoce la cantidad de alumnos que se ingresaran. 
El programa deberá informar: 
A. Cantidad total de alumnos de cada carrera. 
B. Cantidad total de mujeres que cursan la carrera de Programacion
C. Cantidad de alumnos no binarios. 
D. Promedio de notas de los alumnos finalizantes. 
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología. 
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.) 
G. ¿Cuál es la carrera que tiene más alumnos?
*/
function mostrar()
{
    let nombre;
    let carrera;
    let estadoCarrera;
    let sexo;
    let edad;
    let nota;
    let alumnos;
    let respuesta;
    let contadorAlumnosProgramacion;
    let contadorAlumnosPsicologia;
    let contadorAlumnosDisenoGrafico;
    let contadorMujeresProgramacion;
    let contadorAlumnosNoBinarios;
    let promedioNotas;
    let acumuladorNotaFinalizantes;
    let contadorNotaFinalizantes;

    respuesta = "si";
    nota = 0;
    alumnos = 0;
    contadorAlumnosProgramacion = 0;
    contadorAlumnosPsicologia = 0;
    contadorAlumnosDisenoGrafico = 0;
    contadorMujeresProgramacion = 0;
    acumuladorNotaFinalizantes = 0;
    contadorNotaFinalizantes = 0;
    

    while(respuesta == "si" || respuesta == "Si")
    {
        nombre = prompt("Ingrese su nombre");
            while(!isNaN(nombre))
            {
                nombre = prompt("Error: Ingrese un nombre valido");
            }
        carrera = prompt("Ingrese su carrera 'Programacion''Psicologia''Diseño grafico'");
            while(carrera != "Programacion" || carrera != "Psicologia" || carrera != "Diseño grafico")
            {
                carrera = prompt("Error: Ingrese una carrera valida");
            }
        estadoCarrera = prompt("Ingrese su estado actual en la carrera 'en curso''abandono''finalizado'");
            while(estadoCarrera != "en curso" || estadoCarrera != "abandono" || estadoCarrera != "finalizado")
            {
                estadoCarrera = prompt("Error: Ingrese un estado de la carrera valido");
            }
        sexo = prompt("Ingrese su sexo 'femenino' 'masculino' 'nobinario'");
            while(sexo != "femenino" || sexo != "masculino" || sexo != "nobinario")
            {
                sexo = prompt("Error: Ingrese un sexo valido");
            }
        edad = parseInt(prompt("Ingrse su edad '+18'"));
            while(isNaN(edad)|| edad < 18 || edad > 108)
            {
            edad = prompt("Error: Ingrese una edad valida '+18'"); 
            }
        nota = parseFloat(prompt("Ingrse su nota"));
            while(isNaN(nota)|| nota < 0 || nota > 10)
            {
            nota = prompt("Error: Ingrese una nota valida"); 
            }
        respuesta = prompt("¿Desea seguir ingresando datos? 'Si' / 'No'");
    }//FIN WHILE
//A. Cantidad total de alumnos de cada carrera. 
    switch(carrera)
    {
        case "Programacion":
            contadorAlumnosProgramacion = contadorAlumnosProgramacion + 1;
//B. Cantidad total de mujeres que cursan la carrera de Programacion
                if(sexo == "femenino" && carrera == "Programacion")
                {  
                    contadorMujeresProgramacion = contadorMujeresProgramacion + 1;
                }
            break;
        case "Psicologia":
            contadorAlumnosPsicologia = contadorAlumnosPsicologia + 1;
            break;
        case "Diseño grafico":
            contadorAlumnosDisenoGrafico = contadorAlumnosDisenoGrafico + 1;
            break;
    }
//C. Cantidad de alumnos no binarios. 
    if(sexo == "no binario")
        {
            contadorAlumnosNoBinarios = contadorAlumnosNoBinarios + 1;
        }
//D. Promedio de notas de los alumnos finalizantes. 
    if(estadoCarrera == "finalizado")
        {
            acumuladorNotaFinalizantes = acumuladorNotaFinalizantes + nota;
            contadorNotaFinalizantes = contadorNotaFinalizantes + 1;
            promedioNotas = acumuladorNotaFinalizantes / contadorNotaFinalizantes;
        }



//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología. 

}//fin de funcion
