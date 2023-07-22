import './App.css';
import Error404 from './Clase4/Error404';
import Item from './Clase4/Item';
import PaginaPrincipal from './Clase4/PaginaPrincipal';
import Encabezado from './Encabezado';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import Cart from './Clase6/Cart';
import Checkout from './Clase6/Checkout';
import ThankYou from './Clase6/ThankYou';
import Desafio9 from './Clase9/Desafio/Desafio9';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
        <Encabezado />
          <Routes>
            <Route path='/' element={<Desafio9 />} />
            <Route path='/categoria/:idCategoria' element={<PaginaPrincipal />} />
            <Route path='/item/:idProducto' element={<Item />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/thankyou' element={<ThankYou />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
