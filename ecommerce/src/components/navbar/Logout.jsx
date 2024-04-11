import React from 'react'
import { CiLogout } from "react-icons/ci";

const Logout = () => {
    const logout=()=>{
        localStorage.removeItem('token');
        location.href = "/login"
    }
  return (
    <div className='logout-btn'>
      <CiLogout onClick={logout} className='logout'/>
    </div>
  )
}

export default Logout
