import React, { useEffect, useState } from 'react'
import "./App.css";
import NavBar from "./components/NavBar"
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { config } from './config/config.js';

function App() {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      console.log(config);
      loadPost();
    }, []
  )

  const loadPost = async () => {
  
    // Till the data is fetch using API 
    // the Loading page will show.
    setLoading(true);

    // Await make wait until that 
    // promise settles and return its result
    const response = await axios.get(config.apiUrl);

    // After fetching data stored it in posts state.
    setPosts(response.data);

    // Closed the loading page
    setLoading(false);
  }


  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className='main'>
            <div className='left'>
              {/* Product SPRING REST*/}
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

            {/* Users  JSON*/}
            {loading ? (
                <h4>Loading...</h4>) :
                (posts.map((item) =>
                  <div className= "product-card" key={item.id}>
                    <h4 className="product-title">{item.name}</h4>
                    <p className="product-quantity"> {item.username}</p>
                    <p className="product-price" > {item.email}</p>
                  </div>
                )
              )
            }

            </div>
            <div className='right'>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App