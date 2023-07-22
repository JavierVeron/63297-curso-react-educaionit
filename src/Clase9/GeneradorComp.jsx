const GeneradorComp = () => {
    const impares = function * () {
        let impar = 1;
        yield impar; // Devuelve un objeto {value (valor) y done (estado de la ejecución de la función)}
        impar += 2;
        return impar;
    }

    const generador = impares();

    const ejecutarGenerador = () => {
        console.log(generador.next());
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={ejecutarGenerador}>Ejecutar Generador</button>
                </div>
            </div>
        </div>
    )
}

export default GeneradorComp;