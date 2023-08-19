// Contenedor de todos los productos del carrito
const contenedorCarrito = document.getElementById("contenedor-carrito");

const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

productosEnCarrito.innerHTML = "";

productosEnCarrito.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML= `
    <img class="carrito-producto-img" src="${productos.img}" alt="${productos.nombre}">
    <div class="carrito-descripcion-productos">
        <h5 class="carrito-producto-nombre">${productos.nombre}</h5>
        <p>$ ${productos.precio}</p>
        <p>${productos.cantidad}</p>
        <p>Subtotal ${productos.precio * productos.cantidad}</p>
   
        <button id='${productos.id}' class="btn-eliminar">Eliminar del carrito</button>
    </div>
`;
productosEnCarrito.append(div);

})