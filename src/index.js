import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import store from "./redux/ProductosReducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
<App />
</Provider>);
