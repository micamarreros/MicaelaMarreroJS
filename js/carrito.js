// Contenedor de todos los productos del carrito
const contenedorCarrito = document.getElementById("contenedor-carrito");

const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

productosEnCarrito.innerHTML = "";

productosEnCarrito.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML= `
    <img class="carrito-producto-img" src="${producto.img}" alt="${producto.nombre}">
    <div class="carrito-descripcion-productos">
        <h5 class="carrito-producto-nombre">${producto.nombre}</h5>
        <p>$ ${producto.precio}</p>
        <p>${producto.cantidad}</p>
        <p>Subtotal ${producto.precio * producto.cantidad}</p>
   
        <button id='${producto.id}' class="btn-eliminar">Eliminar del carrito</button>
    </div>
`;
productosEnCarrito.append(div);

})