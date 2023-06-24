//import { useState } from "react";
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Clase5/context/ThemeContext";
import { useContext } from "react";

const Error404 = () => {
    //const [redireccion, setRedireccion] = useState(false);
    const redireccion = useNavigate();
    const {sumaTotalProductos} = useContext(ThemeContext);

    const irPaginaPrincial = () => {
        //setRedireccion(true);
        redireccion("/");
    }

    return (
        <div className="container my-5">
            <div className="row text-center">
                <h1 className="text-danger">Error 404</h1>
                <h3 className="text-secondary">No se encontró la página que estabas buscando!</h3>
                <p className="my-5"><button onClick={irPaginaPrincial} className="btn btn-primary">Ir a la Página Principal</button></p>
                <p>Suma Total de Productos: <b>${sumaTotalProductos()}</b></p>
                {/* {redireccion ? <Navigate to={"/"} /> : ""} */}
            </div>
        </div>
    )
}

export default Error404;