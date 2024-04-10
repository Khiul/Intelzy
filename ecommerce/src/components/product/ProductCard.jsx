import React from "react";
import toast from 'react-hot-toast'

const ProductCard = (props) => {
  const addtocart=async()=>{
    const res=await fetch('http://localhost:3000/cart',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(props.item)
    }) 
    const data=res.json()
    if(data){
      toast.success('Added to cart')
    }
  }
  return (
    <div className="card" key={props.item.id}>
      <img src={props.item.thumbnail} alt="" />
      <div className="content">
        <div style={{display:'flex',justifyContent:'flex-end'}}>{props.item.brand}</div>
        <div><b>{props.item.title}</b></div>
        {/* <div> {props.item.description}</div> */}
        <div>${props.item.price}</div>
        <button onClick={addtocart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
