import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        state:state
    }
};

const mapDispatchToProps = (dispatch) => {
    return (
        dispatch({type:"cargarProductos"})
    )
}

const ComponentePrueba = () => {
    return (
        <h1>Componente Prueba</h1>
    )
}

const conector = connect(mapStateToProps, mapDispatchToProps);

export default conector(ComponentePrueba);