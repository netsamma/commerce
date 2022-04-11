import React from 'react'
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Cart from './components/Cart';
import useCart from './hooks/useCart';
import useProducts from './hooks/useProducts';


function App() {
  const {cartItems, numbOfCartItems, onAdd, onRemove} = useCart()
  const {products, loading} = useProducts()
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        {/* <NavBar cartItems={cartItems} numbOfCartItems={numbOfCartItems}/> */}
        <div className="main">
          <Products products={products} loading={loading} onAdd={onAdd}/>
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </div>
      {/* </BrowserRouter> */}
    </div>

  )
}

export default App