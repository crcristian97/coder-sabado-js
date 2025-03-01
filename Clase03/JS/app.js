function sumar() {
    //scope local
    //se crea dentro de la función y una vez terminada la function se elimina
    let numero1 = 5; //bytes de la memoria de JSw- del V8
    let resultado = numero1 + 5;
  
    return resultado;
};
  
console.log(sumar());

//agregar al carrito
// te lo agrega en tu usuario
// te lo guarda en tu base de datos
saveDatabase();

//comprar ahora
// te lleva al checkout con el producto
// te lo guarda en la base de datos para tener información tuya
saveDatabase();

/*
function saveDatabase(){
//recibo el producto- 3 lineas de codigo
//chequeo el stock - 10 lineas de codigo
//descuento el stock - 2 lineas de codigo
//chequeo que el stock no me qiede en 0- 2 lineas de codigo

//lo guardo en la base de datos- 2 lineas de codigo

//15 lineas de codigo
//CRUD- create,ead, update, delete
//7 segundos 

/////////////
//crear microservicios === crear mas funciones y llamarla dentro
};
  */

//funciones comunes
function saludar(){

};

//funciones anonimas
const saludar = function () {};
const addCalendar = function (a, b) { return a + b};

//funciones flecha
const saveDatabase = () => {

}//EM6



let precioProducto = 500;
let descuento = 50 ;

const suma  = (a,b) => {
    a + b
};

const resta = (a,b) => {
    a - b}
; 

const iva = (x) => {
    x * 0.21
}; 


let nuevoPrecio = resta(
    suma(
        precioProducto, iva(precioProducto)
    ), 
    descuento
) ;

console.log(nuevoPrecio);



