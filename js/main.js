// Contenedor de todos los productos
const contenedorProductos = document.getElementById("contenedor-productos");
const botonesCategorias = document.querySelectorAll(".btn-categoria")

// Contenedor de cada producto
const mostrarProductos = (productosElegidos) => {

    contenedorProductos.innerHTML = "";

   productosElegidos.forEach(producto =>{
        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.className = "tarjeta-producto";
        tarjetaProducto.innerHTML = `
                                    <img class="producto-img" src="${producto.img}" alt="${producto.nombre}">
                                    <div class="descripcion-productos">
                                        <h3 class="producto-nombre">${producto.nombre}</h3>
                                        <p>$ ${producto.precio}</p>
                                        
                                        <button id='${producto.id}' class="btn-compra">Comprar</button>
                                    </div>
                                    `;
        contenedorProductos.appendChild(tarjetaProducto);
    })
    const btnComprar = document.querySelectorAll('.btn-compra');
    btnComprar.forEach(el => {
        el.addEventListener('click', (e) =>{
            agregarAlCarrito(e.target.id);
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se agregó el producto al carrito',
                showConfirmButton: false,
                timer: 1500
              })
        });
    })
}

mostrarProductos(productos);

// Filtro para productos con botones de categorias
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        if (e.currentTarget.id !="todos") {
            const productosBoton = productos.filter(productos => productos.categoria.id === e.currentTarget.id);
            mostrarProductos(productosBoton);
        } else {
            mostrarProductos(productos);
        }
    })
})

const carrito = [];

// Agrego al carrito, teniendo en cuenta la cantidad.  
function agregarAlCarrito(id){
    const exists = carrito.some(prod => prod.id === parseInt(id));
    
        if (exists){ 
            const index = carrito.findIndex(prod => prod.id === parseInt(id));
            carrito[index].cantidad++;
        } else {
            let productoEncontrado = productos.find( prod => prod.id == parseInt(id));
            productoEncontrado.cantidad = 1;
            carrito.push(productoEncontrado);
            
            // Guardo en local storage los productos del carrito
            localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
        }
}

// Suma para el total del carrito a partir de span que comienza en cero
const total = productos.reduce((acumulado, corriente) => acumulado+corriente.precio,0);
const tarjetaProducto = document.createElement("span");
total.className = "tarjeta-producto";
total.innerHTML =   `
                        <span>0</span>
                    `;
    contenedorProductos.append(total);