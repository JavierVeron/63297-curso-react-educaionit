import { useEffect, useState } from "react";

const Desafio3 = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(datos => {
            setUsuarios(datos);
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Desafío 3</h1>
                </div>
            </div>
            <div className="row">
                {usuarios.map(item => <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{item.username}</h6>
                            <p className="card-text">{item.email}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Desafio3;