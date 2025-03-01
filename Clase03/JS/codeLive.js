/*
Si tenemos un negocio y todos los meses compramos productos para vender pero por catálogo nos entregan el precio sin IVA, 
¿Cómo podríamos agregar el iva a los productos?
Teniendo la constante IVA = 1.21, imagina una función flecha la cual reciba un valor numérico como parámetro, 
y que retorne dicho valor con IVA incluido. 
El IVA debe tomarse de una constante, para que la función sea dinámica. ¿Cómo te imaginas el resultado?
*/

const IVA = 1.21;
const precioUnitario = parseInt(prompt('Decime el precio de tu producto'));

const productoIVA = (precioUnitario, IVA) => {
    debugger
    return precioUnitario * IVA;
}

console.log("El iva es: ", IVA);
console.log("El precio del producto sin IVA es: ",precioUnitario)
console.log(productoIVA(precioUnitario, IVA));