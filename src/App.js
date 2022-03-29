import React, { useEffect, useState } from 'react'
import "./App.css";
import NavBar from "./components/NavBar"
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { config } from './config/config.js';
import Cart from './components/Cart';
// import User from './components/User';

function App() {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // const [users, setUsers] = useState([]);
  const [cartItems, setCartItems] = useState([{title:"Scarpe in pelle", price:20, qty:1}]);

  // Aggiunta al carrello
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
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
      loadUsers();
    }, []
  )

  const loadUsers = async () => {
  
    setLoading(true);

    // Await make wait until that promise settles and return its result
    const response = await axios.get(config.productsFakeUrl);

    // After fetching data stored it in posts state.
    setProducts(response.data);

    // Closed the loading page
    setLoading(false);
  }


  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className='main'>
            <div className='products_wrapper'>
              
              {/* SPRING REST - Product */}
              {/* {loading ? (
                  <h4>Loading...</h4>) :
                  (posts.map((item) =>
                    <div className= "product-card" key={item.product_id}>
                      <h4 className="product-title">{item.name}</h4>
                      <p className="product-quantity"> {item.quantity_in_stock}</p>
                      <p className="product-price" > {item.unit_price}</p>
                    </div>
                  )
                )
              } */}

              {/* FakeStoreApi - Product */}
              {loading ? (
                  <h4>Loading...</h4>) :
                  (products.map((item) =>
                    <div className= "product-card" key={item.id}>
                      <h4 className="product-title">{item.title}</h4>
                      <p className="product-price" > € {item.price}</p>
                      <button>Aggiungi</button>
                    </div>
                  )
                )
              }

              {/* JSON placeholder - Users */}
              {
                //loading ? ( <h4>Loading...</h4> ) : users.map((item) => <User {...item} />)
              }

            </div>
            <div className='cart_wrapper'>
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}>
              </Cart>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App