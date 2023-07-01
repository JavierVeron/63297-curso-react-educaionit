import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
    const {ordenCompra, sumaTotalProductos, vaciarCarrito} = useContext(cartContext);
    const redireccion = useNavigate();

    const irPaginaPrincial = () => {
        vaciarCarrito();
        redireccion("/");
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Gracias, {ordenCompra.cliente.nombre}!</h1>
                    <p>Dirección: {ordenCompra.cliente.direccion}<br />Teléfono: {ordenCompra.cliente.telefono}</p>
                    <hr />
                    <h3>Detalle de Compra:</h3>
                    <table className="table">
                        <tbody>
                        {ordenCompra.productos.map(item => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.cantidad} X ${item.precio}</td>
                                <td>${item.cantidad * parseFloat(item.precio)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2}>Suma Total</td>
                            <td>${sumaTotalProductos()}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 offset-md-3 text-center">
                    <button className="btn btn-light" onClick={irPaginaPrincial}>Ir a la Página Principal</button>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;