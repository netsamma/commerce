import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import useCart from "./hooks/useCart";
import { AuthProvider } from "./context/AuthContext";
import ProductPage from "./pages/ProductPage";
import Users from "./components/Users";
import { Dashboard } from "./components/Dashboard";
import Products from "./components/Products";
import useProducts from "./hooks/useProducts";
import { Orders } from "./components/Orders";
import { Customers } from "./components/Customers";
import { Register } from "./components/Register";
import { Public } from "./components/Public";

function App() {
  const { cartItems, numbOfCartItems, onAdd, onRemove } = useCart();
  const {products, setFilter, loading} = useProducts();
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={
              <Home
                numbOfCartItems={numbOfCartItems}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          ></Route>
          <Route path="/login"
            element={<LoginPage numbOfCartItems={numbOfCartItems} />}
          />

          <Route path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                numbOfCartItems={numbOfCartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />

          <Route path="/product/:id"
            element={<ProductPage/>}
          ></Route>

          <Route path="/dashboard" element={<Dashboard numbOfCartItems={numbOfCartItems}/>}>
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users/>} />
            <Route path="products" element={<Products products={products} inline={true}/>} />
            <Route path="customers" element={<Customers/>} />
          </Route>

          <Route path="/" element={<Public/>}>
            <Route path="register" element={<Register />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
