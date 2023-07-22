const productos = [
    {id:1, nombre:"Coca Cola", precio:700, stock:10},
    {id:2, nombre:"Pepsi", precio:650, stock:9},
    {id:3, nombre:"Manaos", precio:350, stock:8},
]

const ProductosReducer = (prevState=productos, action) => {
    if (action.type === "agregar") {
        prevState.push(action.payload);
        return;
    } else if (action.type === "eliminar") {
        prevState.filter(item => item.id !== action.payload)
        return;
    } else {
        return prevState;
    }
}

export default ProductosReducer;