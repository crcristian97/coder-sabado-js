//hacer dolar blue y dolar mep 
const dolarBlueCompra = 1200;
const dolar_blue_venta = 1300;

//diferencia let y const
// con let se puede reasignar el valor de la variable
// con const no se puede reasignar el valor de la variable
let dolarMepCompra = 1200; //ok
dolarMepCompra = 1300; //ok

const dolarMepVenta = 1300; //ok    
//dolarMepVenta = 1400; //error
 
//tipos de valor en una variable
// 1. number
const numero = 10;
const IVA = 0.21;

// 2. string
const profesorCoderHouse = 'Cristian';
const tutorCoderHouse = "Martin";

// 3. boolean
const esMayorEdad = true;
const esMenorEdad = false;

var edadCristian = 28;
var edadCristian = 29;

let edadMartin = 30;
//let edadMartin = 31; error
edadMartin = 31;

const edadJesica = 25;
//edadJesica = 26; error
//const edadJesica = 26; error


//calculcamos el presupuesto de un plan del auto
//quiero saber cuanto me quedan las cuotas de un jeep renegade en 12 cuotas;
const precioAutoJeep = prompt("Ingrese el precio del auto Jeep en usd");
const dolarMep = prompt("Ingrese el valor del dolar MEP");

const precioAutoJeepPesos = precioAutoJeep * dolarMep;
const cuotas = prompt("Ingrese la cantidad de cuotas");

const resultadoFinal = precioAutoJeepPesos / cuotas;
//console.log("Vas a pagar en 12 cuotas de: " + resultadoFinal); //em5
console.log(`Vas a pagar en ${cuotas} cuotas de ${resultadoFinal} pesos`); //em6 - template string
//usamos alert
alert(`Vas a pagar en ${cuotas} cuotas de ${resultadoFinal} pesos`); 

alert('estas inactivo , volveras a la pantalla de carga');
