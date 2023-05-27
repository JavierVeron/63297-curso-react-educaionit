import { useState } from "react";

const State = () => {
    // JS Tradicional
    //let nombre = "Javier";
    //let apellido = "Verón";

    // JS con React
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState("");
    const [pais, setPais] = useState("");

    const modificarNombre = () => {
        // JS Tradicional
        //document.getElementById("nombre").innerHTML = "Jhoanna";
        //document.getElementById("apellido").innerHTML = "Castellanos";

        // JS React
        const nombres = [
            {nombre:"Gonzalo", apellido:"Sosa"},
            {nombre:"Hugo", apellido:"Sanchez"},
            {nombre:"Jhoanna", apellido:"Castellanos"}
        ];

        if (contador < nombres.length) {
            let alumno = nombres[contador];
            setNombre(alumno.nombre);
            setApellido(alumno.apellido);
            setContador(contador + 1);
        }

        //console.log("Estoy acá!");
    }

    return (
        <div>
            <h1>States</h1>
            <p>Nombre: <span id="nombre">{nombre}</span></p>
            <p>Apellido: <span id="apellido">{apellido}</span></p>
            <p><button id="boton" onClick={modificarNombre}>Modificar Nombre</button></p>
            <p>Clicks: {contador}</p>
            <p><input type="text" onInput={(event) => {
                setTexto(event.target.value);
            }} /></p>
            <p>{texto}</p>
            <p>
                <select onChange={(e) => setPais(e.target.value)} >
                <option value="">Seleccione un País</option>
                <option value="Argentina">Argentina</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Chile">Chile</option>
                <option value="México">México</option>
                <option value="Venezuela">Venezuela</option>
                </select>
            </p>
            <p>País: {pais}</p>
        </div>
    )
}

export default State;