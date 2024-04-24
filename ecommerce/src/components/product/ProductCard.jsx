import React from "react";
import toast from 'react-hot-toast'

const ProductCard = ({item}) => {
  const addtocart=async()=>{
    const res=await fetch('http://localhost:3000/cart',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }) 
    const data=res.json()
    if(data){
      toast.success(`${item.title} added to cart`)
    }
  }
  return (
    <div className="card" key={item.id}>
      <div className="content">
      <img src={item.thumbnail} alt="" />
        <div><b>{item.title}</b></div>
        <div> {item.brand}</div>
        <div><b>${item.price}</b></div>
        <button onClick={addtocart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
