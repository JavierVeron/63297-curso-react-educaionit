import { useState } from "react";
import store from "../../redux/ProductosReducer";

const Desafio8 = () => {
    const [products, setProducts] = useState(store.getState());

    const impar = function * () {
        let impar = 1;
        yield impar;
        impar += 2;
        return impar;
    }

    const generador = impar();

    const ejecutarGenerador = () => {
        console.log(generador.next());

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        {products.map(item => (
                            <div className="card" key={item.id}>
                                <div className="card-body">
                                <p className="card-text"><b>{item.nombre}</b></p>
                                <p className="card-text">${item.precio}</p>
                                </div>
                          </div>
                        ))}
                    </ul>
                    <button className="btn btn-primary" onClick={ejecutarGenerador}>Ejecutar Generador</button>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    )
}

export default Desafio8;