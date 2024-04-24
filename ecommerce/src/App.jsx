import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import AdminAddProduct from './components/admin/AdminAddProduct';
import AdminEditProduct from './components/admin/AdminEditProduct';

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/addProduct' element={<AdminAddProduct/>}/>
        <Route path='/admin/editProduct/:id' element={<AdminEditProduct/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
