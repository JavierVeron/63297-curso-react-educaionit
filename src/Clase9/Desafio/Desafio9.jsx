import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import ProductosReducer from "../../redux/rootReducer";
import { useState } from "react";

const miLogger = store => next => action => {
    console.log("Estado actual: " + store.getState());
    console.log("Acción: " + action.type);

    return next(action);
}

const thunkFunction = () => (dispatch) => {
    miLogger();
}

const store = createStore(ProductosReducer, applyMiddleware(thunkFunction));

const Desafio9 = () => {
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

export default Desafio9;