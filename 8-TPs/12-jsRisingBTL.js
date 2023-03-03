/*Joaquin ElBitar
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;
	let respuesta;

	respuesta = "si";
	
	while(respuesta == "si" || respuesta == "Si")
	{
		//A.	Edad, entre 18 y 90 años inclusive.
		edad = parseInt(prompt("Ingrese su edad"));
			while(isNaN(edad) || edad < 17 || edad > 91)
				{
					edad = parseInt(prompt("Error: Ingrese una edad valida"));
				}
		//B.	Sexo, “M” para masculino y “F” para femenino
		sexo = prompt("Ingrese su sexo “M” para masculino y “F” para femenino");
			while(!isNaN(sexo) || sexo != "M" || sexo != "F")
				{
					sexo = prompt("Error: Ingrese una sexo valida");
				}
		//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
		estadoCivil = prompt("Ingrese su estado civil 1-Soltero, 2-Casados, 3-Divorciados 4-Viudos");
			while(isNaN(estadoCivil) || estadoCivil != "1" || estadoCivil != "2" || estadoCivil != "3" || estadoCivil != "4")
				{
					sexo = parseInt(prompt("Error: Ingrese una nacionalidad valida"));
				}
		//D.	Sueldo bruto, no menor a 8000.
		sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto"));
			while(isNaN(sueldoBruto) || sueldoBruto < 7999 || sueldoBruto || sueldoBruto > 1400000)
				{
					sueldoBruto = parseInt(prompt("Error: Ingrese un sueldo bruto mayor a 8000 "));
				}

		//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.		

		//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
		nacionalidad = prompt("Ingrese su nacionalidad “A”-Argentinos, “E“-Extranjeros, “N”-Nacionalizados");
			while(!isNaN(nacionalidad) || nacionalidad != "A" || nacionalidad != "E" || nacionalidad != "N")
				{
					nacionalidad = parseInt(prompt("Error: Ingrese una nacionalidad valida"));
				}
		respuesta = prompt("Desea continuar? Ingrese: Si o No");
	}//FIN WHILE

	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}

