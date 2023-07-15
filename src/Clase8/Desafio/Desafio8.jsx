import { useState } from "react";
import store from "../../redux/ProductosReducer";

const Desafio8 = () => {
    const [products, setProducts] = useState([]);
    console.log(store.getState());

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        {products.map(item => (
                            <div className="card" style="width: 18rem;">
                            <div className="card-body">
                              <p className="card-text"><b>{item.nombre}</b></p>
                              <p className="card-text">${item.precio}</p>
                            </div>
                          </div>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    )
}

export default Desafio8;