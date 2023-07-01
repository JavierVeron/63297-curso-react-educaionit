import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import eliminar from "../images/trash.svg";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, agregarItem, quitarItem, eliminarProducto, vaciarCarrito, cantidadTotalProductos, sumaTotalProductos} = useContext(cartContext);

    if (cantidadTotalProductos() > 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td colSpan={4}>&nbsp;</td>
                                    <td className="text-end"><button className="btn btn-light" onClick={() => {vaciarCarrito()}}>Vaciar Carrito [x]</button></td>
                                </tr>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle text-end"><button className="btn btn-light" onClick={() => {quitarItem(item.id)}}>-</button> {item.cantidad} X ${item.precio} <button className="btn btn-light" onClick={() => {agregarItem(item.id)}}>+</button></td>
                                        <td className="align-middle text-end">${parseFloat(item.cantidad * parseFloat(item.precio))}</td>
                                        <td className="align-middle text-end"><img src={eliminar} alt="Eliminar" width={24} onClick={() => {eliminarProducto(item.id)}} /></td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>&nbsp;</td>
                                    <td className="text-start" colSpan={2}>Suma Total</td>
                                    <td className="text-end">${sumaTotalProductos()}</td>
                                    <td className="text-end"><Link to={"/checkout"} className="btn btn-light">Finalizar Compra</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-warning text-center" role="alert">No se encontraron Productos en el Carrito!</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cart;