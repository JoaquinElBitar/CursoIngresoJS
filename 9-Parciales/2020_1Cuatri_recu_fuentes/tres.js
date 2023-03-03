/*Joaquin ElBitar
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
    let nombre;
    let nacionalidad;
    let edad;
    let temperatura;
    let sexo;
    let respuesta;
	let estadoCivil;
	let banderaTemperaturaMasAlta;
	let nombreTemperaturaMasAlta;
	let temperaturaMasAlta;
	let nacionalidadTemperaturaMasAlta;
	let acumuladorSolteros;
	let acumuladorCasados;
	let acumuladorViudos;
	let contadorSolteros;
	let contadorCasados;
	let contadorViudos;
	let contadorSolterosMayores;
	let contadorSolterasMujeres;
	let contadorViudasMujeres;
	let contadorMujeresCasadas;
	let acumuladorMujeresCasadas;
	let contadorTerceraEdad;
	let promedioMujeresCasadas;
	let contadorEdadMujeres;

    respuesta = "si"
	banderaTemperaturaMasAlta = true;
	acumuladorSolteros = 0;
	acumuladorCasados = 0;
	acumuladorViudos = 0;
	contadorSolteros = 0;
	contadorCasados = 0;
	contadorViudos = 0;
	contadorSolterosMayores = 0;
	contadorSolterasMujeres = 0;
	contadorViudasMujeres = 0;
	contadorMujeresCasadas = 0;
	acumuladorMujeresCasadas = 0;
	contadorEdadMujeres = 0;

	while(respuesta == "si" || respuesta == "Si")
    {
        nombre = prompt("Ingrese su nombre");
            while(!isNaN(nombre))
				{
					nombre = prompt("Error: Ingrese un nombre valido");
				}
		nacionalidad = prompt("Ingrese su nacionalidad ");
			while(!isNaN(nacionalidad))
				{
					nacionalidad = prompt("Error: Ingrese una nacionalidad valida");
				}
		edad = parseInt(prompt("Ingrse su edad"));
            while(isNaN(edad)|| edad < 0 || edad > 108)
				{
					edad = prompt("Error: Ingrese una edad valida"); 
				}
		sexo = prompt("Ingrese su sexo 'femenino' 'masculino' 'nobinario'");
            while(sexo != "femenino" || sexo != "masculino" || sexo != "nobinario")
				{
					sexo = prompt("Error: Ingrese un sexo valido");
				}
		estadoCivil = prompt("Ingrese su estado civil 'soltero', 'casado' o 'viudo'");
			while(estadoCivil != "soltero" || estadoCivil != "casado" || estadoCivil != "viudo")
				{
					nacionalidad = prompt("Error: Ingrese un estado civil valido 'soltero', 'casado' o 'viudo'");
				}
        temperatura = parseInt(prompt("Ingrse su temperatura corporal"));
            while(isNaN(temperatura)|| temperatura < 32 || temperatura > 42)
				{
				temperatura = prompt("Error: Ingrese un temperatura corporal valida"); 
				}
		switch(estadoCivil)
			{
				case "soltero":
					contadorSolteros = contadorSolteros + 1;
					acumuladorSolteros + acumuladorSolteros + estadoCivil;
						if(edad <17)
							{
								contadorSolterosMayores = contadorSolterosMayores + 1;
							}else if(sexo == "femenino")
								{
									contadorSolterasMujeres = contadorSolterasMujeres + 1;
								}
					break;
				case "casado":
					contadorCasados = contadorCasados + 1;
					acumuladorCasados + acumuladorCasados + estadoCivil;
						if(sexo == "femenino")
							{
								contadorEdadMujeres = contadorEdadMujeres + edad;
							}
					break;
				case "viudo":
					contadorViudos = contadorViudos + 1;
					acumuladorViudos + acumuladorViudos + estadoCivil;
						if(sexo == "femenino")
							{
								contadorViudasMujeres = contadorViudasMujeres + 1;
							}
					break;
			}
		if(banderaTemperaturaMasAlta == true || temperaturaMasAlta > temperatura)
			{	
				temperaturaMasAlta = temperatura;
				nombreTemperaturaMasAlta = nombre;
				nacionalidadTemperaturaMasAlta = nacionalidad;
				banderaTemperaturaMasAlta = false;
			}
			respuesta = prompt("¿Desea seguir ingresando datos? 'Si' / 'No'");
		}//FIN WHILE

		promedioMujeresCasadas = acumuladorMujeresCasadas / contadorEdadMujeres;

		if(edad < 60 && temperatura <38)
			{
				contadorTerceraEdad = contadorTerceraEdad + 1;
			}
		console.log
		console.log
		console.log
}
