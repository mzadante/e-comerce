import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const url=document.querySelector("[data-url]").value;
    const name=document.querySelector("[data-nombre]").value;
    const price=document.querySelector("[data-price]").value;
    const description=document.querySelector("[data-description]").value;

    //console.log(nombre,"--",url,"--",price,"--",description);

    clientServices.crearProducto(url,name,price,description)
    .then(respuesta =>{
        //Aqui puedo mandar a llamar una pagina que diga que se agrego el producto
        //window.location.href = "/pagina"
        console.log(respuesta);
    })
    .catch(err => console.log(err));
});

