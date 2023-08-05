import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";
import carrito from "../images/cart.svg";

const BotonCarrito = () => {
    const {cantidadTotalProductos} = useContext(cartContext);

    return (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-light position-relative">
                <img src={carrito} alt="Carrito" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantidadTotalProductos()}</span>
            </button>
        </Link>
    )
}

export default BotonCarrito;