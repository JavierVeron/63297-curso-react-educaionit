import { useEffect, useState } from "react";

const Spinner = () => {
    return (
        <div className="text-center p-5">
            <div className="spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div>
        </div>
    )
}

const Netlifx = () => {
    const [texto, setTexto] = useState("");
    const [contenidos, setContenidos] = useState([]);
    const [contenidoListo, setContenidoListo] = useState(false);

    const buscarContenido = () => {
        setContenidoListo(false);
        fetch("https://imdb-api.com/en/API/Search/k_3f3t0ii9/" + texto)
        .then(respuesta => respuesta.json())
        .then(datos => {
            setContenidos(datos.results);
            setContenidoListo(true);
        });
    }

    useEffect(() => {
        fetch("https://imdb-api.com/en/API/InTheaters/k_3f3t0ii9")
        .then(respuesta => respuesta.json())
        .then(datos => {
            setContenidos(datos.items);
            setContenidoListo(true);
        });
    }, []);

    return (
        <div className="container-fluid text-light bg-black">
            <div className="container text-light bg-black">
                <div className="row my-3">
                    <div className="col text-center">
                        <img src="https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-6-1024x576.png" alt="Netflix" width={160} />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control text-light bg-black" placeholder="Ingrese película o serie" value={texto} onChange={(e) => {setTexto(e.target.value)}} />
                            <span className="input-group-text" id="basic-addon2" onClick={buscarContenido}>Buscar</span>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    {contenidoListo ? contenidos.map(contenido => <div key={contenido.id} className="col-md-3 mb-3 text-center">
                    <img src={contenido.image} alt={contenido.title} className="img-fluid" />
                    <span>{contenido.title}</span>
                    </div>) : <Spinner />}
                </div>
            </div>
        </div>
    )
}

export default Netlifx;