import { useState } from "react"

const CursoJS = () => {
    return (
        <h3>Curso de JavaScript!</h3>
    )
}

const CursoReact = () => {
    return (
        <h3>Curso de React JS Developer!</h3>
    )
}

const Condicional = () => {
    const [cursoReact, setCursoReact] = useState(false);

    const cambiarCurso = () => {
        console.info("Estoy en Cambiar Curso!");
        setCursoReact(true);
    }

    const bebidas = [
        {id:1, nombre:"Coca Cola 1.75l", precio:648, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332253-1200-auto?v=638211437709500000&width=1200&height=auto&aspect=true"},
        {id:2, nombre:"Pepsi 1.5l", precio:600, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/308965-1200-auto?v=638146793773630000&width=1200&height=auto&aspect=true"},
        {id:3, nombre:"Doble Cola 2.25l", precio:290, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/275154-1200-auto?v=638126740768970000&width=1200&height=auto&aspect=true"},
        {id:4, nombre:"Carrefour Cola 2.25l", precio:240, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/194545-1200-auto?v=637516042695430000&width=1200&height=auto&aspect=true"}
    ]

    return (
        <div>
            <h1>Renderizado Condicional</h1>
            {cursoReact && <CursoReact />}
            {cursoReact ? <CursoReact /> : <CursoJS />}
            <button className="btn btn-primary" onClick={cambiarCurso}>Mostrar Curso de React JS</button>
            <ul>
                {bebidas.map(item => <li key={item.id}>{item.id} - {item.nombre}</li>)}
            </ul>
            <div className="row">
                {bebidas.map(item => <div key={item.id} className="col-md-3 text-center">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                    <p className="text-primary"><b>${item.precio}</b><br /><span className="text-secondary">{item.nombre}</span></p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Condicional;