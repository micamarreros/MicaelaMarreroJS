// Contenedor de todos los productos
const contenedorProductos = document.getElementById("contenedor-productos");

// Contenedor de cada producto
const mostrarProductos = (dato) => {
    dato.forEach(producto =>{
        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.className = "tarjeta-producto";
        tarjetaProducto.id = "container-fluid col-sm-10 col-md-10 col-lg-10 col-xl-10 d-flex align-items-center";
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
        });
    })
}

mostrarProductos(productos);

const carrito = []

// Agrego al carrito, teniendo en cuenta la cantidad. Mi objetivo es evitar que se pueda agregar dos veces el mismo producto pero no logro visualizar como podría hacerse. 
function agregarAlCarrito(id){
    const exists = carrito.some(prod => prod.id === parseInt(id));

    if (exists){
        carrito.map(prod => producto.cantidad)
    } else {
        let productoEncontrado = productos.find( prod => prod.id == parseInt(id));
        carrito.push(productoEncontrado);
    }
}

// Suma para el total del carrito a partir de span que comienza en cero
const total = productos.reduce((acumulado, corriente) => acumulado+corriente.precio,0);
const tarjetaProducto = document.createElement("span");
total.className = "tarjeta-producto";
total.innerHTML =   `
                        <span>0</span>
                    `;
    contenedorProductos.append(total)
    

const guardarLocal = (producto, cantidad) => { localStorage.setItem(producto, cantidad) };


/* // Ciclo para evitar agregar más de 10 productos al carrito

let productosAgregados = 0;
while (productosAgregados <11) {
    console.log ("Agregaste " + productosAgregados + " productos al carrito");
    productosAgregados++;
} */ 