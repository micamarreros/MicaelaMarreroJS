// Contenedor de todos los productos del carrito
const contenedorCarrito = document.getElementById("contenedor-carrito");

// Contenedor de cada producto del carrito
const verProductos = (productos) => {
    productos.forEach(producto =>{
        const tarjetaProducto2 = JSON.parse.document.createElement("div");
        tarjetaProducto2.className = "tarjeta-producto2";
        tarjetaProducto2.innerHTML = `
                                    <img class="producto-img" src="${producto.img}" alt="${producto.nombre}">
                                    <div class="descripcion-productos2">
                                        <h3 class="producto-nombre">${producto.nombre}</h3>
                                        <p>$ ${producto.precio}</p>
                                        
                                        <button>Eliminar Producto</button>
                                    </div>
                                    `;
        contenedorProductos.appendChild(tarjetaProducto2);
    })
    const btnComprar = document.querySelectorAll('.btn-compra');
    btnComprar.forEach(el => {
        el.addEventListener('click', (e) =>{
            agregarAlCarrito(e.target.id);
        });
    })
}

verProductos(productos);