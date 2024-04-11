import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <h1 className='logo'>Logo</h1>
      <div className="links">
        <NavLink to='/' className="link">Home</NavLink>
        <NavLink to='/cart' className="link">Cart</NavLink>
        <NavLink to='/admin' className="link">Admin</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
