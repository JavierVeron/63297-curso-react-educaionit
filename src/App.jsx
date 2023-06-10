import './App.css';
import Error404 from './Clase4/Error404';
import Item from './Clase4/Item';
import PaginaPrincipal from './Clase4/PaginaPrincipal';
import Encabezado from './Encabezado';
import { Routes, Route } from 'react-router-dom';
//import { useRoutes } from 'react-router-dom';

function App() {
  /* const rutas = useRoutes([
    {path:'/', element:<PaginaPrincipal />},
    {path:'/item/:idProducto', element:<Item />},
    {path:'/*', element:<Error404 />}
  ]); */

  return (
    <>
      <Encabezado />
      <Routes>
        <Route path='/' element={<PaginaPrincipal />} />
        <Route path='/categoria/:idCategoria' element={<PaginaPrincipal />} />
        <Route path='/item/:idProducto' element={<Item />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      {/* {rutas} */}
    </>
  );
}

export default App;
