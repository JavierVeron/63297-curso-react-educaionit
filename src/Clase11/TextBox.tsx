import React, { useEffect, useState } from "react";

export interface TextBoxProps {
    children?:React.ReactNode,
    lugar:string,
    curso:string
}

interface User {
    id:number,
    nombre:string
}

function TextBox (props:TextBoxProps):JSX.Element {
    const [usuario, setUsuario] = useState<User | null>(null);

    useEffect(() => {
        setUsuario({id:100, nombre:"Juan Perez"});
    }, []);

    return (
        <div>
            <h3 className="text-white bg-primary p-3">{props.lugar}</h3>
            <p className="text-white bg-secondary p-3">{props.curso}</p>
            <p className="text-white bg-warning p-3">({usuario?.id}) - {usuario?.nombre}</p>
        </div>
    )
}

export default TextBox;