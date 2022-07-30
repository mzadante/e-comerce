//RESUMIENDO PROMISES CON FETCH API (FUNCION NATIVA DEL NAVEGADOR)

//creo una funcion de lista de productos resumida con fetch api (por default fetch obtiene get) queda resumida en una linea
const listaProductos = () => fetch("http://localhost:3000/producto").then( (respuesta) => respuesta.json());

const crearProducto =(url,name,price,description) => {
    fetch("http://localhost:3000/producto",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({url,name,price,description, id: uuid.v4()})
    })

}

export const clientServices={
    listaProductos,
    crearProducto,
};