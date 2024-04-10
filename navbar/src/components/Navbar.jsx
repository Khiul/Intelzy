import React, { useState } from 'react';
import './Navbar.css'; 
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleNavbar}>
      {isOpen ? <FiMenu /> : <IoMdClose />}      </div>
    </nav>
  );
};

export default Navbar;
