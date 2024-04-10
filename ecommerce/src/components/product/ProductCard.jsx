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
      <img src={item.thumbnail} alt="" />
      <div className="content">
        <div style={{display:'flex',justifyContent:'flex-end'}}>{item.brand}</div>
        <div><b>{item.title}</b></div>
        {/* <div> {item.description}</div> */}
        <div>${item.price}</div>
        <button onClick={addtocart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
