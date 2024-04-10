import CartCard from "./CartCard"
import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [cartData,setCartData]=useState([])
  const fetchCartData=async()=>{
    const resp=await fetch('http://localhost:3000/cart')
    const data=await resp.json()
    setCartData(data)
  }
  useEffect(()=>{
    fetchCartData()
  },[])
  return (
    cartData.length==0? <div>No cart available</div>:
    <table>
      <thead>
        <tr>
        <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item)=>(
          <CartCard key={item.id} item={item} fetchCartData={fetchCartData}/>
        ))}
      </tbody>
    </table>
  )
}

export default Cart
