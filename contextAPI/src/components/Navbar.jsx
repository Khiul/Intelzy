import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from './MyContext'

const Navbar = () => {
    const {darkMode,toggleBtn}=useContext(MyContext)
  return (
    <nav style={{height:'50px',width:'100%', display:'flex',alignItems:'center',color:darkMode?'white':'black',backgroundColor:darkMode?'black':'white',padding:'2%'}}>
      <h1 style={{width:'30%'}}>Logo</h1>
      <ul style={{display:'flex',listStyle:'none',flexGrow:'1',justifyContent:'space-between'}}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/product:id'>Product</NavLink></li>
        <li><button onClick={toggleBtn}>{darkMode?'Enable DarkMode':'Enable LightMode'}</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
