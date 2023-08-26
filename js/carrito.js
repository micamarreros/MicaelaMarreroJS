// Contenedor de todos los productos del carrito
const contenedorCarrito = document.getElementById("contenedor-carrito");

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

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
   
        <button class="btn-eliminar" onclick="eliminarTarea(${producto.id})">Eliminar del carrito</button>
    </div>
`;
    
contenedorCarrito.append(div);

})

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se eliminó el producto del carrito',
        showConfirmButton: false,
        timer: 1500
    })

    carrito();
    
    // Actualizo y guardo en local storage los productos del carrito
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
}