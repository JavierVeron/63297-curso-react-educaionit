import './App.css';
import Error404 from './Clase4/Error404';
import Item from './Clase4/Item';
import PaginaPrincipal from './Clase4/PaginaPrincipal';
import Cartelera from './Clase5/Cartelera';
import ThemeContextProvider from './Clase5/context/ThemeContext';
import Encabezado from './Encabezado';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Encabezado />
        <Routes>
          <Route path='/' element={<Cartelera />} />
          <Route path='/categoria/:idCategoria' element={<PaginaPrincipal />} />
          <Route path='/item/:idProducto' element={<Item />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
