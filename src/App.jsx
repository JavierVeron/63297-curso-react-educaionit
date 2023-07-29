import './App.css';
import Error404 from './Clase4/Error404';
import Item from './Clase4/Item';
import PaginaPrincipal from './Clase4/PaginaPrincipal';
import Encabezado from './Encabezado';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Cart from './Clase6/Cart';
//import Checkout from './Clase6/Checkout';
//import ThankYou from './Clase6/ThankYou';
import CargarRedux from './Clase10/CargarRedux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ShoppingCartReducer from './redux/ShoppingCartReducer';

const store = createStore(ShoppingCartReducer);

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Encabezado />
          <Routes>
            <Route path='/' element={<CargarRedux store={store} />} />
            <Route path='/categoria/:idCategoria' element={<PaginaPrincipal />} />
            <Route path='/item/:idProducto' element={<Item />} />
            {/* <Route path='/cart' element={<Cart />} /> */}
            {/* <Route path='/checkout' element={<Checkout />} /> */}
            {/* <Route path='/thankyou' element={<ThankYou />} /> */}
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
