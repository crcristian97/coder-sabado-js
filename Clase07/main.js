/*
En un documento HTML, tenemos un tag <h1> con el id “titulo”, y un tag lista desordenada con el id “listado”. Además, tenemos el siguiente array: const frutas = [‘Ananá’, ‘Banana’, ‘Durazno’, ‘Kiwi’, ‘Manzana’, ‘Papaya’, ‘Pera’]
Crearemos una función llamada cargarDOM(),
la cual se conectará con ambos elementos HTML,
y asignará el valor “www.mandafruta.com” en el título, OK
mientras que generará los list ítems con cada una de las frutas, en el elemento HTML de lista desordenada.
*/

// Array de objetos para un carrito de compras
const productosCarrito = [
    {
        id: 1,
        nombre: "Manzana Roja",
        precio: 2.50,
        cantidad: 3,
        disponible: true
    },
    {
        id: 2,
        nombre: "Banana Premium",
        precio: 1.75,
        cantidad: 6,
        disponible: true
    },
    {
        id: 3,
        nombre: "Kiwi Orgánico",
        precio: 3.25,
        cantidad: 4,
        disponible: false
    },
    {
        id: 4,
        nombre: "Pera Williams",
        precio: 2.80,
        cantidad: 2,
        disponible: true
    },
    {
        id: 5,
        nombre: "Ananá Natural",
        precio: 5.50,
        cantidad: 1,
        disponible: true
    },
    {
        id: 6,
        nombre: "Ananá Natural",
        precio: 5.50,
        cantidad: 1,
        disponible: true
    }
];

const carritoCompra = JSON.parse(localStorage.getItem("carritoCompra")) || [];

function mostrarCarrito(){
    const container = document.getElementById("container");
    container.innerHTML = "";
    productosCarrito.map(({id = 0, nombre = '', precio = '', cantidad = '', disponible = ''}) => {
        const div = document.createElement("div");
        div.innerHTML = `<h1> Producto: ${nombre}</h1>
                        <p>  Precio: $${precio}</p>
                        <p> Stock:${cantidad}</p>
                        <p> Disponible:${disponible}</p>
                        <button onclick="agregarAlCarrito(${id})">Agregar al carrito</button>
                        <button>Eliminar producto de la base de datos</button>
                        `;
        container.appendChild(div);
    })
};

mostrarCarrito();

function agregarAlCarrito(id){
    const producto = productosCarrito.find((producto) => producto.id === id);
    carritoCompra.push(producto);
    localStorage.setItem("carritoCompra", JSON.stringify(carritoCompra));
};

function mostrarCarritoCompra(){
    const carrito = document.getElementById("carrito");
    carrito.innerHTML = "";
    carritoCompra.map(({id = 0, nombre = '', precio = '', cantidad = '', disponible = ''}) => {
        const div = document.createElement("div");  
        div.innerHTML = `<h1> Producto: ${nombre}</h1>
                        <p>  Precio: $${precio}</p> 
                        <p> Stock:${cantidad}</p>
                        <p> Disponible:${disponible}</p>
                        <button onclick="eliminarDelCarrito(${id})">Eliminar producto del carrito</button>`;
        carrito.appendChild(div);
    });
};
mostrarCarritoCompra();