/*Joaquin ElBitar
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
//Perimetro de un rectangulo = 2 + base * 2 para 3 hilos de alambre se debe hacer perimetro *3 

let largo;
let ancho;
let perimetro;
let alambre;

largo = parseFloat(document.getElementById("txtIdLargo").value);
ancho = parseFloat(document.getElementById("txtIdAncho").value);

perimetro = largo * 2 + ancho * 2;

alambre = perimetro *3;

}
function Circulo () 
{
//Perimetro de un cirlo = 2.3,14.R

let radio;
let perimetro;
let alambre;

}
function Materiales () 
{
//Area de un rectngulo = largo * ancho 
//Bolsas de cemento = * m2 * cemento * cal
let largo;
let ancho;
let area;
let cemento;
let cal;
}