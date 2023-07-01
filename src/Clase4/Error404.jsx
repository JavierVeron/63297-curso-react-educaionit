import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const redireccion = useNavigate();

    const irPaginaPrincial = () => {
        redireccion("/");
    }

    return (
        <div className="container my-5">
            <div className="row text-center">
                <h1 className="text-danger">Error 404</h1>
                <h3 className="text-secondary">No se encontró la página que estabas buscando!</h3>
                <p className="my-5"><button onClick={irPaginaPrincial} className="btn btn-primary">Ir a la Página Principal</button></p>
            </div>
        </div>
    )
}

export default Error404;