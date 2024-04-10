import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const resp = await fetch("http://localhost:3000/products");
    const data = await resp.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="cards">
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Product;
