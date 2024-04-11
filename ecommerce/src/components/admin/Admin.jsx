import React from 'react'
import Logout from '../navbar/Logout'

const Admin = () => {
    if(localStorage.getItem('token')){
        return (
            <div className='admin'>
                <Logout/>
              <h1>This is admin page</h1>
            </div>
          )
    }else{
        location.href="/login"
    }
  
}

export default Admin
