import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const {cart, sumaTotalProductos, guardarOrdenCompra} = useContext(cartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const redireccion = useNavigate();

    const generarOrdenCompra = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        if (direccion.length === 0) {
            return false;
        }
        
        const cliente = {nombre:nombre, email:email, telefono:telefono, direccion:direccion};
        guardarOrdenCompra(cart, cliente);
        redireccion("/thankyou");
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} value={nombre} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} value={email} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} value={telefono} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input type="text" className="form-control" onInput={(e) => {setDireccion(e.target.value)}} value={direccion} />
                        </div>
                        <button type="button" className="btn btn-light" onClick={generarOrdenCompra}>Finalizar Compra</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-end">{item.cantidad} X ${item.precio}</td>
                                    <td className="align-middle text-end">${parseFloat(item.cantidad * parseFloat(item.precio))}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>&nbsp;</td>
                                <td className="text-start" colSpan={2}>Suma Total</td>
                                <td className="text-end">${sumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Checkout;