import './App.css';
import Error404 from './Clase4/Error404';
import Item from './Clase4/Item';
import PaginaPrincipal from './Clase4/PaginaPrincipal';
import Encabezado from './Encabezado';
import { Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import Cart from './Clase6/Cart';
import Checkout from './Clase6/Checkout';
import ThankYou from './Clase6/ThankYou';

function App() {
  return (
    <>
      <CartContextProvider>
        <Encabezado />
        <Routes>
          <Route path='/' element={<PaginaPrincipal />} />
          <Route path='/categoria/:idCategoria' element={<PaginaPrincipal />} />
          <Route path='/item/:idProducto' element={<Item />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </CartContextProvider>
    </>
  );
}

export default App;
