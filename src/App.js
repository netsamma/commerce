import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Dashboard from "./pages/Dashboard";
import useCart from "./hooks/useCart";
import { AuthProvider } from "./context/AuthContext";
import ProductPage from "./pages/ProductPage";

function App() {
  const { cartItems, numbOfCartItems, onAdd, onRemove } = useCart();
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                numbOfCartItems={numbOfCartItems}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={<LoginPage numbOfCartItems={numbOfCartItems} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                numbOfCartItems={numbOfCartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={<Dashboard numbOfCartItems={numbOfCartItems} />}
          ></Route>

          <Route
            path="/product/:id"
            element={<ProductPage/>}
          ></Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
