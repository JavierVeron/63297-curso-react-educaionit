//import { useState } from 'react';
import './App.css';
//import Effect from './Clase2/Effect';
import Encabezado from './Encabezado';
import User from './Clase2/Desafio/User';

/* const OtroComponente = () => {
  return (
    <h3>Hola! Soy Otro Componente!</h3>
  )
} */

function App() {
/*   const [visible, setVisible] = useState(true);

  const cambiarComponente = () => {
    setVisible(false);
  } */

  return (
    <div className="container my-5">
      <div className="row text-center mb-5">
        <h1><Encabezado /></h1>
      </div>
      {/* <div className="row">
        <div className="col-md-12">
          {visible ? <Effect curso={"React JS..."} lugar={"Educación IT..."} /> : <OtroComponente />}
          <button onClick={cambiarComponente}>Cambiar Componente</button>
        </div>
      </div> */}
      <div className="row my-5">
        <div className="col-md-4">
          <User id={7} />
        </div>
      </div>
    </div>
  );
}

export default App;
