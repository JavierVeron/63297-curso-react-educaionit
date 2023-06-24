import productos from "../Clase4/json/productos.json";

const HOC = (BaseComponent) => {
    return (
        function (props) {
            <BaseComponent productos={productos} {...props} />
        }
    )
}

function RenderProductos(props) {
    return (
        <div>
            <ul>
                {props.productos.map(item => (<li key={item.id}>{item.nombre} ${item.precio}</li>))}
            </ul>
        </div>
    )
}

export default HOC(RenderProductos);