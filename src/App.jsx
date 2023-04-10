import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import * as bootstrap from 'bootstrap'
import { Tooltip, Toast, Popover } from 'bootstrap'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div>

        <NavBar />
        <Routes>
          <Route exact path="/" element ={<ItemListContainer/>}/>
          <Route exact path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route exact path="/producto/:productoId" element={<ItemDetailContainer/>}/>
          <Route exact path="/cart" element={<Cart/>}/>

        </Routes>

      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
