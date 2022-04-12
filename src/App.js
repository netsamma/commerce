import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/dashboard'>
        </Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App