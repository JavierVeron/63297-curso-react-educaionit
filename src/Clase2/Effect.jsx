import { useEffect, useState } from "react";

const Effect = ({curso, lugar}) => {
    const [cursoEfecto, setCursoEfecto] = useState("");
    const [lugarEfecto, setLugarEfecto] = useState("");

    useEffect(() => {
        console.log("2- Componente Actualizado");
        setCursoEfecto(curso);
        setLugarEfecto(lugar);

        return (() => {
            console.log("3- Componente Desmontado");
        });
    }, [curso, lugar]);

    console.log("1- Componente Montado");

    return (
        <div>
            <h1>Ciclo de Vida de un Componente (Efectos)</h1>
            <p>Curso <b>{cursoEfecto}</b> en <b>{lugarEfecto}</b></p>
        </div>
    )
}

export default Effect;