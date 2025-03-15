// el objeto es un tipo de dato que permite almacenar información. Tiene propiedades y métodos.
// propiedad: clave valor
/*
const juegoSabana = {
    name: 'Pack X5 Juegos De Sábanas 4 Piezas 2 1/2 Plazas 240 Hilos',
    priceOff: 119999,
    priceNow: 91955,
    ofer: true,
    freeSend: true
};

const cuotas = parseFloat(prompt('en cuantas cuotas los queres?'))

const cuotasProduct = (juegoSabana, cuotas) => {
    if(juegoSabana.priceNow){
        alert(`en ${cuotas} cuotas de ${juegoSabana.priceNow / cuotas}`);
    }
};*/


class PerfilUsuario {
    constructor(name = '', edad = 0, gender = '', ciudad = '', edadPreferencia, preferencias = '', descripcion = '', hobbies = []){
        this.name = name;
        this.edad = edad;
        this.gender = gender;
        this.ciudad = ciudad;
        this.edadPreferencia = edadPreferencia;
        this.preferencias = preferencias;
        this.descripcion = descripcion;
        this.hobbies = hobbies;
    }
};

const user = new PerfilUsuario('samuel', 31, 'masc', 'Cordoba', [25, 30], 'a todo', 'me gusta paddle', ['fotografia', 'tomar mate', 'cocinar', 'codear']);
const user2 = new PerfilUsuario('noah', 28, ' no binario', 'caba', [18, 48], 'a todo', 'm egusta el vino y las charlas profundas', ['acariciar animales en la calle', 'comprar cds', 'comprar libst']);


console.log([user, user2]);


// tenemos localstorage y sessionstorage
// el localstorage te guarda la información inclusive si cierro el navegador o apago la computadora
// sessionstorage te guarda la información solo de la sesion
// tiene 4 metodos
// setItem
// getItem
// remove
// clear

const darkMode = true;
const lenguaje = 'es'
localStorage.setItem('darkMode', darkMode);
localStorage.setItem('lenguage', lenguaje);

const currentLenguaje = localStorage.getItem('lenguage'); //es

console.log("el lenguaje por default es:", currentLenguaje)
localStorage.removeItem('lenguage');

const carritoCompra = [
    { id: 1, name: 'juego de sábanas', price: 10000, quantity: 1 },
    { id: 2, name: 'juego de sábanas', price: 10000, quantity: 1 },
    { id: 3, name: 'juego de sábanas', price: 10000, quantity: 1 }
];

function carritoNumber(carritoCompra){
    return carritoCompra.length;
};

function saveData(carritoCompra){
    localStorage.setItem('carritoCompra', JSON.stringify(carritoCompra));
}
saveData(carritoCompra);

console.log(carritoNumber(carritoCompra))