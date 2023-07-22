import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ProductosReducer from "../redux/rootReducer";
import { useState } from "react";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(ProductosReducer, applyMiddleware(sagaMiddleware));

const ReduxSagaComp = () => {
    const [productos, setProductos] = useState(store.getState());

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul>
                        {productos.map(item => <li key={item.id}>{item.nombre} - ${item.precio}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReduxSagaComp;