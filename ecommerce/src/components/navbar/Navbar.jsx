import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <h1 className='logo'>Logo</h1>
        <div className="links">
            <NavLink to='/' className="link">Home</NavLink>
            <NavLink to='/cart' className="link">Cart</NavLink>
            
        </div>
    </nav>
  )
}

export default Navbar
