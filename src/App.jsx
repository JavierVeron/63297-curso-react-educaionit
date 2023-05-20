import './App.css';
import Contenido from './Contenido';
import Encabezado from './Encabezado';
import Producto from './Producto';

function App() {
  return (
    <div className="container my-5">
      <div className="row text-center mb-5">
        <h1><Encabezado /></h1>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Contenido producto={"Coca Cola"} tipo={"Light"} precio={500} />
        </div>
        <div className="col-md-4">
          <Producto />
        </div>
      </div>
    </div>
  );
}

export default App;
