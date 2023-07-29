import productosArray from "../Clase4/json/productos.json";

const shoppingCart = {productos:productosArray, cart:[], totalProductos:0, totalAPagar:0};

const ShoppingCartReducer = (prevState = shoppingCart, action) => {
    if (action.type === "agregarProducto") {
        let producto = prevState.cart.find(item => item.id === action.payload);
        
        if (producto) {
            producto.cantidad += 1;
        } else {
            const producto = prevState.productos.find(item => item.id === action.payload);
            producto.cantidad = 1;
            prevState.cart.push(producto);
        }

        const totalProductos = prevState.cart.reduce((acumulador, item) => acumulador += item.cantidad, 0);
        const totalAPagar = prevState.cart.reduce((acumulador, item) => acumulador += parseFloat(item.precio) * item.cantidad, 0);

        return {
            productos:[...prevState.productos],
            cart:[...prevState.cart],
            totalProductos:totalProductos,
            totalAPagar:totalAPagar
        }
    } else if (action.type === "eliminarProducto") {
        let producto = prevState.cart.find(item => item.id === action.payload);
        
        if (producto.cantidad > 1) {
            producto.cantidad -= 1;
        } else {
            prevState.cart = prevState.cart.filter(item => item.id !== action.payload);
        }
        
        const totalProductos = prevState.cart.reduce((acumulador, item) => acumulador += item.cantidad, 0);
        const totalAPagar = prevState.cart.reduce((acumulador, item) => acumulador += parseFloat(item.precio) * item.cantidad, 0);

        return {
            productos:[...prevState.productos],
            cart:[...prevState.cart],
            totalProductos:totalProductos,
            totalAPagar:totalAPagar
        }
    } else if (action.type === "cargarProductos") {
        return prevState;
    } else if (action.type === "cargarCarrito") {
        return prevState;
    } else if (action.type === "vaciarCarrito") {
        return {
            productos:[...prevState.productos],
            cart:[]
        }
    } else {
        return prevState;
    }
}

export default ShoppingCartReducer;