import { createContext, useState } from "react";
import productos from "../../Clase4/json/productos.json";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [prods, setProds] = useState(productos);

    const totalProductos = () => {
        return prods.length;
    }

    const sumaTotalProductos = () => {
        return prods.reduce((acumulador, item) => acumulador += parseFloat(item.precio), 0);
    }

    return (
        <ThemeContext.Provider value={{prods, totalProductos, sumaTotalProductos}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;