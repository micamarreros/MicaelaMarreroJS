// Contenedor de todos los productos del carrito
const contenedorCarrito = document.getElementById("contenedor-carrito");

// Contenedor de cada producto del carrito
const verProductos = (productos) => {
    productos.forEach(producto =>{
        const tarjetaCarrito = document.createElement("div");
        tarjetaCarrito.className = "tarjeta-carrito";
        
        contenedorProductos.appendChild(tarjetaCarrito);
    })
    const btnComprar = document.querySelectorAll('.btn-compra');
    btnComprar.forEach(el => {
        el.addEventListener('click', (e) =>{
            agregarAlCarrito(e.target.id);
        });
    })
}

verProductos(productos);