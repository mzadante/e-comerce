//Importamos el client service porque aqui lo mandamos a llamar
import { clientServices } from "../service/client-service.js";
console.log(clientServices);
//funcion que obtiene una url, nombre y precio y aplica el contenido de un modulo html en la pagina
const crearNuevoProducto = (url,name,price) =>{
    //digo que voy a crear un elemento div
    const elemento = document.createElement('div');
    //el contenido del div
    const contenido=
    `<div class="main__product" >
            <img class="product__image" src="${url}" alt="">
            <h4 class="product__title">${name}</h4>
            <p class="product__price">${price}</p>
            <a href="" class="product__detail">Ver Producto
                <i class="product__icon"><img src="./img/arrow.png" alt=""></i>
            </a>
    </div>`
    //le digo que el contenido lo coloque en el div del html
    elemento.innerHTML = contenido;
    //que cree el elemento div con su contenido
    return elemento;
}
//creo una variable div donde voy a colocar el elemento segun su data atribute
const div=document.querySelector("[data-product]");

//con la funcion listaProductos obtenemos data
clientServices.listaProductos().then((data) =>{
    data.forEach( producto => {
        //llamo a crear el elemento url name y price
        const productoNuevo = crearNuevoProducto(producto.url, producto.name, producto.price);
        div.appendChild(productoNuevo);
    });
    //capturamos el error con un catch
}).catch((error) => alert('Ocurrio un error'));