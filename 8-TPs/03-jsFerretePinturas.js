/*Joaquin ElBitar
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let formula;
    let mensaje;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    formula = (fahrenheit - 32) * 5/9;

    mensaje = fahrenheit + " Fahrenheit son " + formula + " Centigrados";

    console.log(mensaje);
}

function CentigradosFahrenheit () 
{
    let centígrados;
    let formula;
    let mensaje;

    centígrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    formula = centígrados * 9/5 + 32;

    mensaje = centígrados + " Centigrados son " + formula + " Fahrenheit";

    console.log(mensaje);

}
