/*
Si tenemos un negocio y todos los meses compramos productos para vender pero por catálogo nos entregan el precio sin IVA, 
¿Cómo podríamos agregar el iva a los productos?
Teniendo la constante IVA = 1.21, imagina una función flecha la cual reciba un valor numérico como parámetro, 
y que retorne dicho valor con IVA incluido. 
El IVA debe tomarse de una constante, para que la función sea dinámica. ¿Cómo te imaginas el resultado?


const IVA = 1.21;
const precioUnitario = parseInt(prompt('Decime el precio de tu producto'));

const productoIVA = (precioUnitario, IVA) => {
    debugger
    return precioUnitario * IVA;
}

console.log("El iva es: ", IVA);
console.log("El precio del producto sin IVA es: ",precioUnitario)
console.log(productoIVA(precioUnitario, IVA));
*/


const IVA = 1.21;
let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");

const precioConIVA = ( imp, iva ) => imp * iva;

precioConIVA(importe, IVA);

//¿Qué tiene que hacer este código?
//¿Por qué no cumple con su función?

//Actividad 02:
const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%

const M2 = prompt("Ingresa los Metros cuadrados de la propiedad acotizar un seguro:");

const calcularPoliza = m2 => { m2 * valorM2 * comision };

const valorPoliza = calcularPoliza(M2);

console.log("El costo de la póliza es: $", valorPoliza);

//¿Qué tiene que hacer este código?
//¿Por qué no cumple con su función?
//¿Qué propuesta podrías hacer para que tenga sentido su uso?
