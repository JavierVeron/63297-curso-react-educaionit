import { useEffect } from "react";
import useApi from "./UseApi";

const Cartelera = () => {
    let usuarios = useApi("https://jsonplaceholder.typicode.com/users");
    console.log(usuarios);

    if (usuarios.length > 0) {
        return (
            <div className="container">
                <div className="row">
                    {usuarios.map(usuario => (
                        <div key={usuario.id} className="col-md-3 text-center">
                            <p>{usuario.name} ({usuario.username})</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div>No se encontraron Usuarios!</div>
        )
    }
    
}

export default Cartelera;