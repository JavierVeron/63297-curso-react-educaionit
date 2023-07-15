import { useState } from "react";
import {createStore} from "redux";

const contar = (estado = 0, accion) => {
    if (accion.type === "incrementar") {
        return estado + 1;
    } else if (accion.type === "decrementar") {
        return estado - 1;
    } else {
        return estado;
    }
}

const store = createStore(contar);

const Redux = () => {
    const [contador, setContador] = useState(store.getState());

    const incrementar = () => {
        store.dispatch({type:"incrementar"});
    }

    const decrementar = () => {
        store.dispatch({type:"decrementar"});
    }

    store.subscribe(() => {
        setContador(store.getState());
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Redux</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                    <button type="button" className="btn btn-primary">{contador}</button>
                    <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Redux;