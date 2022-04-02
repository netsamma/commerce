import React, { useEffect, useState } from 'react'
import "./App.css";
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { config } from './config/config.js';
import Cart from './components/Cart';
import Product from './components/Product';
import NavBar from './components/NavBar';


function App() {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Aggiunta prodotto al carrello
  const onAdd = (product) => {
    const productInCart = cartItems.find((x) => x.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id ? { ...productInCart, qty: productInCart.qty + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Rimozione prodotto dal carrello
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(
    () => {
      loadProducts();
    }, []
  )


  const loadProducts = async () => {
    setLoading(true);
    // Await make wait until that promise settles and return its result
    const response = await axios.get(config.productsFakeUrl);
    // After fetching data stored it in posts state.
    if(response.status === 200){
      setProducts(response.data);
    }  
    // Closed the loading page
    setLoading(false);
  }
  
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar cartItems = {cartItems}/>
          <div className='main'>
            <div className='products_wrapper'>
              {loading ? (
                  <h4>Loading...</h4>) :
                  (products.map((item) => <Product key={item.id} item={item} onAdd={onAdd} />
                  )
                )
              }
            </div>
            <div className='cart_wrapper'>
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App