import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menus">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Services</div>
      </div>
    </nav>
  )
}

export default Navbar
