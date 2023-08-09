import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error';
import { CartContext } from './context/CartContext';
import { useState } from 'react';

function App() {

  const [cart,setCart] = useState([]);

  
  return (
    <div className="App">
      <CartContext.Provider value={{cart,setCart}}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            {/* <Route path="/cart" element={<CartContext/>}/> */}
            <Route path="*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
