// Calculo de precio de acuerdo al tipo de cliente.: tipo A o tipo B 
// Cliente A: particulares, emprendimientos o empresas unipersonales. 
// Cliente B: Empresas medianas, grandes u organismos estatales

class Producto {
    constructor (nombre, precio, tipoCliente){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
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

let nombreIngresado = prompt("Ingresá tu nombre");
let saludo = alert("Hola " + nombreIngresado + " bienvenid@ a mi web");

// Mi objetivo es crear un tarifario de diseño grafico en el que el cliente pueda ver precios y se realice el calculo del mismo dependiendo del tipo de cliente

let aclaracionPrecios = alert("Te invito a descubrir los diferentes precios de este tarifario");

const productos1 = [
    {nombre: "Logo", precio: 2400, categoria: "Branding", tipoCliente: "A"},
    {nombre: "Identidad", precio: 6000, categoria: "Branding", tipoCliente: "A"},
    {nombre: "Manual", precio: 5000, categoria: "Branding", tipoCliente: "A"},
    {nombre: "Papelería", precio: 2500, categoria: "Branding", tipoCliente: "A"},
]

const productos2 = [
    {nombre: "Etiqueta", precio: 1200, categoria: "Packaging", tipoCliente: "A"},
    {nombre: "Stickers", precio: 450, categoria: "Packaging", tipoCliente: "A"},
]

const productos3 = [
    {nombre: "Folleto Díptico", precio: 1400, categoria: "Editorial", tipoCliente: "A"},
    {nombre: "Folleto Tríptico", precio: 1800, categoria: "Editorial", tipoCliente: "A"},
    {nombre: "Brochure", precio: 3000, categoria: "Editorial", tipoCliente: "A"},
    {nombre: "Afiche", precio: 2300, categoria: "Editorial", tipoCliente: "A"},
    {nombre: "Aviso", precio: 500, categoria: "Editorial", tipoCliente: "A"},
]

const productos4 = [
    {nombre: "Feed", precio: 5500, categoria: "Redes", tipoCliente: "A"},
    {nombre: "Plantilla", precio: 1000, categoria: "Redes", tipoCliente: "A"},
]

let categoria = prompt("Elegí la categoría que te interese:\n1) Branding \n2) Packaging \n3) Editoriales \n4) Redes Sociales");
console.log(parseInt(categoria))

switch(categoria) {
    case "1":
		let categoriaBranding = alert("Aquí podrás ver todos los productos de la categoría Branding");
        let productoBranding = productos1.map((productoBranding) => productoBranding.nombre + " $ UYU " + productoBranding.precio);
        alert(productoBranding.join(" // "));
		break;
    
    case "2":
		let categoriaPackaging = alert("Aquí podrás ver todos los productos de la categoría Packaging");
        let productoPackaging = productos2.map((productoPackaging) => productoPackaging.nombre + " $ UYU " + productoPackaging.precio);
        alert(productoPackaging.join(" // "));
		break;

    case "3":
		let categoriaEditorial = alert("Aquí podrás ver todos los productos de la categoría Editorial");
        let productoEditorial = productos3.map((productoEditorial) => productoEditorial.nombre + " $ UYU " + productoEditorial.precio);
        alert(productoEditorial.join(" // "));
		break;

    case "4":
        let categoriaRedes = alert("Aquí podrás ver todos los productos de la categoría Redes");
        let productoRedes = productos4.map((productoRedes) => productoRedes.nombre + " $ UYU " + productoRedes.precio);
        alert(productoRedes.join(" // "));
		break;

    default:
        console.log("El valor ingresado no es válido");
        break;
}

// Ciclo para evitar agregar más de 10 productos al carrito

let productosAgregados = 0;
while (productosAgregados <11) {
    console.log ("Agregaste " + x + " productos al carrito");
    productosAgregados++;
}