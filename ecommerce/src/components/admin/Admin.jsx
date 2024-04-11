import React, { useEffect, useState } from "react";
import Logout from "../navbar/Logout";
import AdminProductCard from "./AdminProductCard";
import { Link } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const resp = await fetch("http://localhost:3000/products");
    const data = await resp.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  if (localStorage.getItem("token")) {
    return (
      <div className="admin">
        <Logout />
        <div>
            <Link to='/admin/addProduct'><button>Add Product</button></Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item)=>(
                    <AdminProductCard key={item.id} item={item} getProducts={getProducts}/>
                ))}
            </tbody>
        </table>
      </div>
    );
  } else {
    location.href = "/login";
  }
};

export default Admin;
