import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
