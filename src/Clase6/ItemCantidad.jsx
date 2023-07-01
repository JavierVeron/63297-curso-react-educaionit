import carrito from "../images/cart.svg";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";

const ItemCantidad = ({item, cantidad}) => {
    const {agregarProducto} = useContext(cartContext);

    return (
        <button type="button" className="btn btn-light" onClick={() => {agregarProducto(item, cantidad)}}>Agregar <img src={carrito} alt="Agregar" width={16} /></button>
    )
}

export default ItemCantidad;