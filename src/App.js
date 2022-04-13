import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Dashboard from "./pages/Dashboard";
import useCart from "./hooks/useCart";

function App() {
  const { cartItems, numbOfCartItems, onAdd, onRemove } = useCart();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home numbOfCartItems={numbOfCartItems} cartItems={cartItems} onAdd={onAdd}/>
          }
        > 
        </Route>
        <Route 
          path="/login" 
          element={
            <LoginPage numbOfCartItems={numbOfCartItems}/>
          }>
        </Route>
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} numbOfCartItems={numbOfCartItems} onAdd={onAdd} onRemove={onRemove}/>
          }
        >
        </Route>
        <Route
          path="/dashboard"
          element={
            <Dashboard numbOfCartItems={numbOfCartItems} />
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
