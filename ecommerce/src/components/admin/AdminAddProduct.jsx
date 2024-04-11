import React, { useState } from "react";
import toast  from 'react-hot-toast';

const AdminAddProduct = () => {
  const [data, setData] = useState({
    title: "",
    brand: "",
    category: "",
    price: "",
    thumbnail: "",
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (Object.values(data).some(value => value.trim() === "")){
        toast.error('Please fill all the fields')
    }else{
        const resp=await fetch('http://localhost:3000/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:data.title,
                brand:data.brand,
                category:data.category,
                price:data.price,
                thumbnail:data.thumbnail
            })
        })
        const respData=await resp.json()
        if(data){
            toast.success(`${respData.title} added successfully.`)
            setData({
                title: "",
                brand: "",
                category: "",
                price: "",
                thumbnail: ""
              });
        }
    }
  };
  return (
    <div className="add-product">
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input
          type="text"
          placeholder="Product Title"
          value={data.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }} required
        />
        <input
          type="text"
          placeholder="Product Brand"
          value={data.brand}
          onChange={(e) => {
            setData({ ...data, brand: e.target.value });
          }} required
        />
        <input
          type="text"
          placeholder="Product Category"
          value={data.category}
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }} required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={data.price}
          onChange={(e) => {
            setData({ ...data, price: e.target.value });
          }} required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={data.thumbnail}
          onChange={(e) => {
            setData({ ...data, thumbnail: e.target.value });
          }} required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
