import { Link, useParams } from "react-router-dom";
import productos from "./json/productos.json";
import { useEffect, useState } from "react";

const Item = () => {
    const {idProducto} = useParams();
    const [item, setItem] = useState({});
    
    useEffect(() => {
        const producto = productos.find(item => item.id === parseInt(idProducto));
        setItem(producto);
    }, [idProducto]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <p><Link to={"/categoria/" + item.categoria} className="text-secondary text-decoration-none">{item.categoria}</Link></p>
                    <h1 className="text-light-emphasis fs-5">{item.nombre}</h1>
                    <p className="text-body-tertiary">({item.descripcion})</p>
                    <p><b className="text-primary">${item.precio}</b></p>
                    <p><Link to={"/categoria/" + item.categoria + "/?litros=2"} className="text-secondary text-decoration-none">2 Litros</Link> <Link to={"/categoria/" + item.categoria + "/?litros=1"} className="text-secondary text-decoration-none">1 Litro</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Item;