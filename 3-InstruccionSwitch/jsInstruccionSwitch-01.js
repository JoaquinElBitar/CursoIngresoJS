function mostrar()
{
	//tomo el mes
	let mesDelAño 
	let mensaje

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!"
			break;
		case "Marzo" :
			mensaje = "a clases!!!"
			break;
		case "Julio" :
			mensaje = "se vienen las vacaciones!!!"
			break;
		case "Diciembre" :
			mensaje = "Felices fiestas!!!"
			break;
		default :
			mensaje = "Sos aburrido"
			console.log(mensaje)
	}//Aca termina el swtich

		console.log(mensaje)





/* switch cantidad y if marcas 
if cantidad swtich marcas
todo con switch
todo con if  
	switch(canLamp)//solamente va la varieble NO logica
	{
		case 3: 
			if(marcaLamparas == "ArgentinaLuz")
			{
				porcentaje = a ;
			}
			else{
				porcentaje = b ;
			}
		case 4: 
			switch(marcaLamp)
			{
				case "FelipeLamparas":
					porcentaje = x;
					break;
				case "ArgentinaLuz";
					porcentaje = z;
					break;
				default:
					porcentaje = z;
					break;
			}
		break;
	}
*/ 

}//FIN DE LA FUNCIÓN