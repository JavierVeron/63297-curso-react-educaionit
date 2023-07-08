import { useEffect, useState } from "react";

const Loading = () => {
    return (
        <div className="text-center py-5">
            <div className="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

const ApiFetch = () => {
    const [user, setUsers] = useState([]);
    const [error, setError] = useState(false);
    // Campos del Formulario
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [postEnviado, setPostEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    /* fetch("https://jsonplaceholder.typicode.com/userss")
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data);
        setUsers(data);
    }); */

    useEffect(() => {
        (async () => {
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await respuesta.json();
                setUsers(data);
            } catch (error) {
                setError(true);
            }
        })();
    }, []);

    const enviarPost = () => {
        setLoading(true);
        
        fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
            nombre: nombre,
            email: email,
            telefono: telefono})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setLoading(false);
            setPostEnviado(true);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        {user.map(item => <li key={item.id}>{item.name} ({item.username})</li>)}
                    </ul>
                    {error ? <div className="alert alert-danger" role="alert">Error! No se pudo cargar la API!</div> : ""}
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label>Teléfono</label>
                            <input type="text" className="form-control" value={telefono} onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={enviarPost}>Enviar</button>
                    </form>
                    {loading ? <Loading /> : ""}
                    {postEnviado ? <div className="alert alert-success my-3" role="alert">Ok! Post enviado!</div> : ""}
                </div>
            </div>
        </div>
    )
}

export default ApiFetch;