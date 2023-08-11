// Calculo de precio de acuerdo al tipo de cliente.: tipo A o tipo B 
// Cliente A: particulares, emprendimientos o empresas unipersonales. 
// Cliente B: Empresas medianas, grandes u organismos estatales

class Producto {
    constructor (nombre, precio, tipoCliente){
        this.nombre = nombre;
        this.precio = precio;
        this.tipoCliente = tipoCliente;
    }

    calcularPrecioClienteA() {
        if (this.tipoCliente == "A") {
            return this.precio;
        } else {
            return this.precio * 4.5;
        }
    }
}

function crearProducto (nombre, precio, categoria) {
    let tipoCliente = prompt ("Tipo de cliente A: particulares, emprendimientos o empresas unipersonales.")
    let producto = new Producto(nombre, precio, categoria)
    producto.tipoCliente = tipoCliente
    return producto
}

const producto = document.getElementById("comprar");
const verCarrito = document.getElementById("verCarrito");

const productos = [
    {nombre: "Logo", precio: 2400, tipoCliente: "A"},
    {nombre: "Identidad", precio: 6000, tipoCliente: "A"},
    {nombre: "Manual", precio: 5000, tipoCliente: "A"},
    {nombre: "Papelería", precio: 2500, tipoCliente: "A"},
    {nombre: "Etiqueta", precio: 1200, tipoCliente: 'A'},
    {nombre: "Stickers", precio: 450, tipoCliente: "A"},
    {nombre: "Folleto Díptico", precio: 1400, tipoCliente: "A"},
    {nombre: "Folleto Tríptico", precio: 1800, tipoCliente: "A"},
    {nombre: "Afiche", precio: 2300, tipoCliente: "A"},
    {nombre: "Aviso", precio: 500, tipoCliente: "A"},
    {nombre: "Feed Redes", precio: 5500, tipoCliente: "A"},
    {nombre: "Plantilla Redes", precio: 1000, tipoCliente: "A"},
]

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

for (const nombre of productos) {
    guardarLocal("listaProductos", JSON.stringify(productos));
}

let carrito = [];

productos.forEach((producto)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <h4 class="nombreProducto">${producto.nombre}</h4>
    <p>${producto.precio} $</p>
    `;

    comprar.append(content);

    let agregarAlCarrito = document.createElement("button");
    agregarAlCarrito.innerText = "Agregar al carrito";
    agregarAlCarrito.className = "comprar"

    content.append(agregarAlCarrito);

    agregarAlCarrito.addEventListener("click", () => {
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            tipoCliente: producto.tipoCliente,
        })
    })
});

verCarrito.addEventListener("click", () => {
    console.log("estas viendo el carrito");
})

// Ciclo para evitar agregar más de 10 productos al carrito

let productosAgregados = 0;
while (productosAgregados <11) {
    console.log ("Agregaste " + productosAgregados + " productos al carrito");
    productosAgregados++;
}