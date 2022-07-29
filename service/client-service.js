//RESUMIENDO PROMISES CON FETCH API (FUNCION NATIVA DEL NAVEGADOR)

//creo una funcion de lista de productos resumida con fetch api (por default fetch obtiene get) queda resumida en una linea
const listaProductos = () => fetch("http://localhost:3000/producto").then( (respuesta) => respuesta.json());

export const clientServices={
    listaProductos,
};