import {createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import ProductosReducer from "../redux/rootReducer";
import { useState } from "react";

const thunkFunction = () => (dispatch) => {
    console.log("Estoy acá!");
    console.log("Estoy ejecutando desde el Middleware!!!");
};

const store = createStore(ProductosReducer, applyMiddleware(thunkFunction));

const ReduxThunkComp = () => {
    const [productos, setProductos] = useState(store.getState());

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul>
                        {productos.map(item => (
                            <li key={item.id}>{item.nombre} - ${item.precio}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReduxThunkComp;