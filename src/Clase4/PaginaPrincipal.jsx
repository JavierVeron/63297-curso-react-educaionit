import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
/* import productos from "./json/productos.json"; */
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Clase5/context/ThemeContext";
import Consumer from "../Clase5/Consumer";

const PaginaPrincipal = () => {
    const {idCategoria} = useParams();
    const [parametros, setParametros] = useSearchParams();
    const redireccion = useNavigate();
    const [items, setItems] = useState([]);
    const {prods, totalProductos} = useContext(ThemeContext);

    useEffect(() => {
        if (idCategoria) {
            const litros = parseInt(parametros.get("litros"));
            const arrayProductos = litros ? prods.filter(item => (item.categoria.toUpperCase() === idCategoria.toUpperCase()) && (item.litros === litros)) : prods.filter(item => item.categoria.toUpperCase() === idCategoria.toUpperCase());
            arrayProductos.length > 0 ? setItems(arrayProductos) : redireccion("/error");
        } else {
            setItems(prods);
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
                <p className="text-center">Total de Productos: <b>{totalProductos()}</b></p>
                {/* <Consumer>
                    <h3>Estamos viendo Consumer del Context</h3>
                </Consumer> */}
            </div>
        </div>
    )
}

export default PaginaPrincipal;