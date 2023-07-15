import {createStore} from "redux";

const productos = [
    {id:1, nombre:"Coca Cola", precio:700, stock:10},
    {id:2, nombre:"Pepsi", precio:650, stock:9},
    {id:3, nombre:"Manaos", precio:350, stock:8},
]

const ProductosReducer = (prevState={productos:productos}, action) => {
    if (action.type === "agregar") {
        productos.push(action.payload);
        return {
            ...prevState,
            productos:productos
        }
    } else if (action.type === "eliminar") {
        productos:productos.filter(item => item.id !== action.payload)
        return {
            ...prevState,
            productos:productos
        }
    }
}

const store = createStore(ProductosReducer);

export default store;