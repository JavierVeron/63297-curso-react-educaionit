import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import productos from "./json/productos.json";
import { useEffect, useState } from "react";

const PaginaPrincipal = () => {
    const {idCategoria} = useParams();
    const [parametros, setParametros] = useSearchParams();
    const redireccion = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (idCategoria) {
            const litros = parseInt(parametros.get("litros"));
            const arrayProductos = litros ? productos.filter(item => (item.categoria.toUpperCase() === idCategoria.toUpperCase()) && (item.litros === litros)) : productos.filter(item => item.categoria.toUpperCase() === idCategoria.toUpperCase());
            arrayProductos.length > 0 ? setItems(arrayProductos) : redireccion("/error");
        } else {
            setItems(productos);
        }
    }, [idCategoria, parametros, redireccion]);

    return (
        <div className="container my-5">
            <div className="row">
                {items.map(producto => (
                    <div key={producto.id} className="col-md-4 text-center mb-5">
                        <Link to={"/item/" + producto.id} className="text-decoration-none">
                            <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                            <p>
                                <b className="text-primary">${producto.precio}</b><br />
                                <span className="text-body-secondary">{producto.nombre}</span><br />
                                <span className="text-body-tertiary">({producto.descripcion})</span>
                            </p>
                        </Link>
                    </div>))}
            </div>
        </div>
    )
}

export default PaginaPrincipal;