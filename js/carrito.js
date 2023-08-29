// Contenedor de todos los productos del carrito
const contenedorCarrito = document.getElementById("contenedor-carrito");

// Botones vaciar y comprar carrito
const botonVaciar = document.querySelector("#carrito-vaciar");
const botonComprar = document.querySelector("#carrito-comprar");

// Precio total
const contenedorTotal = document.querySelector("#total");

// Traigo a carrito de local storage
let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

// Uso funcion mostrar carrito con productos traidos de local storage
carrito(productosEnCarrito);

// Muestro el carrito con los productos traidos del local storage
function carrito(productosEnCarrito) {

    // Borro contenedor para que muestre los productos de nuevo
    contenedorCarrito.innerHTML ="";

    productosEnCarrito.forEach(producto => {

        const div = document.createElement("div");
        div.className = "col-md-4 py-3 px-0 carrito-producto"
        div.innerHTML= `
        <img class="carrito-producto-img rounded" src="${producto.img}" alt="${producto.nombre}">
        <div class="carrito-descripcion-productos">
            <h5 class="carrito-producto-nombre">${producto.nombre}</h5>
            <p>$ ${producto.precio}</p>
            <p>${producto.cantidad}</p>
            <p>Subtotal ${producto.precio * producto.cantidad}</p>
       
            <button class="btn btn-secondary btn-eliminar" onclick="eliminarDelCarrito(${producto.id})">Eliminar del carrito</button>
        </div>
    `;
        
    contenedorCarrito.append(div);
    
    })

    actualizarTotal();
}

function eliminarDelCarrito(id) {
    // Obtengo el producto del array
    const findProducto = productosEnCarrito.find(e => e.id == id);

    const index = productosEnCarrito.indexOf(findProducto);
    
    productosEnCarrito.splice(index, 1);
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se eliminó el producto del carrito',
        showConfirmButton: false,
        timer: 1500
    })

    // Muestro el carrito con los productos eliminados
    carrito(productosEnCarrito);
    
    // Actualizo y guardo en local storage los productos del nuevo carrito
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Boton vaciar carrito
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito () {
    productosEnCarrito.splice(0, productosEnCarrito.length);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    actualizarTotal();
    // Muestro el carrito vacio
    carrito(productosEnCarrito);
}

// Mostrar precio total
function actualizarTotal () {
      total.innerText = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
}

// Boton comprar ahora
botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {

    productosEnCarrito.splice(0, productosEnCarrito.length);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    actualizarTotal();
    carrito(productosEnCarrito);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estás seguro?',
        text: "Comprar?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, realizar compra',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Gracias',
            'Se ha realizado la compra.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
}