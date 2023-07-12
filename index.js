let nombreIngresado = prompt("Ingresá tu nombre");
let saludo = alert("Hola " + nombreIngresado + " bienvenid@ a mi web");

/*Mi objetivo es crear un tarifario de diseño grafico en el que el cliente pueda ver precios y se realice el calculo del mismo dependiendo del tipo de cliente */

let aclaracionPrecios = alert("Te invito a descubrir los diferentes precios de este tarifario");

let categoriaProducto = prompt("Elegí la categoría que te interese:\n1) Branding \n2) Packaging \n3) Editoriales \n4) Redes Sociales");
console.log(parseInt(categoriaProducto));

switch(categoriaProducto) {
    case "1":
		let categoriaBranding = prompt("Ingresá el producto que te interesa: \n1) Logo \n2) Identidad de marca \n3) Manual de marca \n4)Papelería corporativa");
        switch (categoriaBranding) {
			case "1":
				let precioLogo = alert("El precio es 2400");
				break;

			case "2":
				let precioIdentidad = alert("El precio es 6000");
				break;

            case "3":
                let precioManual = alert("El precio es 5000");
                break;
            
            case "4":
                let precioPapeleria = alert("El precio es 2500");
                break;
            
            default:
                console.log("El valor ingresado no es válido");
                break;
		}
		break;
    
    case "2":
		let categoriaPackaging = prompt("Ingresá el producto que te interesa: \n1) Etiqueta \n2) Stickers");
        switch (categoriaPackaging) {
			case "1":
				let precioEtiqueta = alert("El precio es 1200");
				break;

			case "2":
				let precioStickers = alert("El precio es 450");
				break;
            
            default:
                console.log("El valor ingresado no es válido");
                break;
		}
		break;

    case "3":
		let categoriaEditoriales = prompt("Ingresá el producto que te interesa: \n1) Folleto díptico \n2) Folleto tríptico \n3) Brochure (máx. 10 pág.) \n4) Afiche \n5) Aviso publicitario");
        switch (categoriaPackaging) {
			case "1":
				let precioFolletoDip = alert("El precio es 1400");
				break;

			case "2":
				let precioFolletoTrip= alert("El precio es 1800");
				break;
            
            case "3":
                let precioBrochure= alert("El precio es 3000");
                break;
            
            case "4":
                let precioAfiche= alert("El precio es 2300");
                break;
            
            case "5":
                let precioAviso = alert("El precio es 500");
            
            default:
                console.log("El valor ingresado no es válido");
                break;
		}
		break;

    case "4":
        let categoriaRedes = prompt("Ingresá el producto que te interesa: \n1) Diseño de feed \n2) Plantillas para posteos");
        switch (categoriaRedes) {
            case "1":
                let precioFeed = alert("El precio es 5500");
                break;
    
            case "2":
                let precioPlantillas = alert("El precio es 1000");
                break;
                
            default:
                console.log("El valor ingresado no es válido");
                break;
            }
        break;

    default:
        console.log("El valor ingresado no es válido");
        break;
}

/* Calculo de precio de acuerdo al tipo de cliente.: tipo A o tipo B 
Cliente A: particulares, emprendimientos o empresas unipersonales. 
Cliente B: Empresas medianas, grandes u organismos estatales */

class Producto {
    constructor (nombre, precio, tipoCliente){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.tipoCliente;
    }

    calcularPrecioClienteA() {
        if (this.tipoCliente == "A") {
            return this.precio;
        } else {
            return this.precio * 4.5;
        }
    }
}

function crearProducto () {
    let tipoCliente = prompt ("Tipo de cliente A: particulares, emprendimientos o empresas unipersonales.")
    let producto = new Producto(nombre, precio, tipoCliente)
    return producto
}