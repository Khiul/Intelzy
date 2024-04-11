import React, { useState } from "react";
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const data=await resp.json()
    if(data.token){
      localStorage.setItem('token',data.token)
      location.href='/admin'
    }else{
      toast.error('Invalid email or password')
      setUsername('')
      setPassword('')
    }
  }    

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
      </form>
    </main>
  );
};

export default Login;
