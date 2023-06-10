import { Link } from "react-router-dom";

export default function Encabezado() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <Link to={"/"}>
                        <img src="https://carrefourar.vtexassets.com/assets/vtex/assets-builder/carrefourar.theme/59.0.1/logo/logo___8ebc4231614a7b41a4258354ce76e1e1.svg" alt="Carrefour Logo" width={180} />
                    </Link>
                </div>
            </div>
        </div>
    )
};