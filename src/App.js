import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/login' element={<LoginPage />}>
        </Route>
        <Route path='/cart' element={<CartPage />}>
        </Route>
        <Route path='/dashboard'>
        </Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App