import { createContext, useEffect, useState } from "react";
import arrayProductos from "../Clase4/json/productos.json";

export const cartContext = createContext();

const CartContextProvider = ({children}) => {
    const [productos, setProductos] = useState(arrayProductos);
    const [cart, setCart] = useState([]);
    const [ordenCompra, setOrdenCompra] = useState({});

    const agregarProducto = (item, cantidad) => {
        if (estaEnElCarrito(item.id)) {
            let pos = cart.findIndex(producto => producto.id === item.id);
            cart[pos].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:cantidad}]);
        }
    }

    const eliminarProducto = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    }

    const agregarItem = (id) => {
        let pos = cart.findIndex(producto => producto.id === id);
        cart[pos].cantidad++;
        setCart([...cart]);
    }

    const quitarItem = (id) => {
        let pos = cart.findIndex(producto => producto.id === id);

        if (cart[pos].cantidad === 1) {
            eliminarProducto(id);
        } else {
            cart[pos].cantidad--;
            setCart([...cart]);
        }
    }

    const estaEnElCarrito = (id) => {
        return cart.some(item => item.id === id);
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const cantidadTotalProductos = () => {
        return cart.reduce((acumulador, item) => acumulador += item.cantidad, 0);
    }

    const sumaTotalProductos = () => {
        return cart.reduce((acumulador, item) => acumulador += (item.cantidad * parseFloat(item.precio)), 0);
    }

    const guardarOrdenCompra = (productos, cliente) => {
        setOrdenCompra({productos:productos, cliente:cliente});
    }

    useEffect(() => {
        setProductos(productos);
    }, [productos]);

    return (
        <cartContext.Provider value={{productos, cart, ordenCompra, agregarProducto, eliminarProducto, agregarItem, quitarItem, vaciarCarrito, cantidadTotalProductos, sumaTotalProductos, guardarOrdenCompra}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;