import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [active,setActive]=useState(false)
  return (
    <nav>
      <Link to='/'><h1>Taja Khabar</h1></Link>
      <ul>
        <li className="deskMenu"><NavLink to='/general'>General</NavLink></li>
        <li className="deskMenu"><NavLink to='/business'>Business</NavLink></li>
        <li className="deskMenu"><NavLink to='/entertainment'>Entertainment</NavLink></li>
        <li id="menuIcon"><FiMenu onClick={()=>setActive(true)}/></li>
      </ul>
    </nav>
  );
}
