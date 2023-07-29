import { useEffect, useState } from "react";

const CargarRedux = ({store}) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [totalProductos, setTotalProductos] = useState(0);
    const [totalAPagar, setTotalAPagar] = useState(0);

    useEffect(() => {
        store.dispatch({type:"cargarProductos"});
    }, [store]);

    store.subscribe(() => {
        setProductos(store.getState().productos);
        setCarrito(store.getState().cart);
        setTotalProductos(store.getState().totalProductos);
        setTotalAPagar(store.getState().totalAPagar);
    });

    const agregarProducto = (id) => {
        store.dispatch({type:"agregarProducto", payload:id});
    }

    const eliminarProducto = (id) => {
        store.dispatch({type:"eliminarProducto", payload:id});
    }

    const vaciarCarrito = () => {
        store.dispatch({type:"vaciarCarrito"});
    }

    return (
        <div className="container">
            <h3 className="display-5">Productos</h3>
            <div className="row">
                {productos.map(item => <div key={item.id} className="col-md-4 mb-3">
                    <div className="card">
                        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">{item.descripcion}<br/><b>${item.precio}</b></p>
                            <button className="btn btn-primary" onClick={(e) => {agregarProducto(item.id)}}>Agregar (+)</button>
                        </div>
                    </div>
                </div>)}
            </div>

            <h3 className="display-5 mt-5">Carrito</h3>
            <div className="row">
                {totalProductos > 0 ?
                <table className="table">
                    <tbody>
                    <tr>
                        <td colSpan={4}>&nbsp;</td>
                        <td className="text-end"><button className="btn btn-warning" onClick={(e) => {vaciarCarrito()}}>Vaciar Carrito [x]</button></td>
                    </tr>
                    {carrito.map(item => <tr key={item.id}>
                        <td><img src={item.imagen} alt={item.nombre} width={48} /></td>
                        <td className="align-middle">{item.nombre}</td>
                        <td className="align-middle">${item.precio} X {item.cantidad}</td>
                        <td className="align-middle">${parseInt(parseFloat(item.precio) * item.cantidad)}</td>
                        <td className="align-middle text-end"><button className="btn btn-danger" onClick={(e) => {eliminarProducto(item.id)}}>Eliminar (-)</button></td>
                    </tr>)}
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan={2}>Total a Pagar</td>
                        <td><b>${totalAPagar}</b></td>
                        <td>&nbsp;</td>
                    </tr>
                    </tbody>
                </table>
                : <div className="alert alert-warning text-center" role="alert">No se encontraron Productos en el Carrito!</div>
                }
            </div>
        </div>
    )
}

export default CargarRedux;