import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import toast from "react-hot-toast";

const AdminEditProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    brand: "",
    price: "",
    thumbnail: "",
  });
  const params = useParams();

  const fetchProduct = async () => {
    try {
      const resp = await fetch(`http://localhost:3000/products/${params.id}`);
      const data = await resp.json();
      if (data) {
        setProductData({
          title: data.title,
          price: data.price,
          brand: data.brand,
          thumbnail: data.thumbnail,
        });
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(productData).some((value) => value.trim() === "")) {
      toast.error("Please fill all the fields");
    } else {
      try {
        const resp = await fetch(`http://localhost:3000/products/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: productData.title,
            brand: productData.brand,
            price: productData.price,
            thumbnail: productData.thumbnail,
          }),
        });
        const data = await resp.json();
        if (data) {
          toast.success("Product updated successfully");
        }
      } catch (error) {
        console.error("Error updating product:", error);
        // Handle error appropriately, e.g., show error message
      }
    }
  };

  return (
    <div className="edit-product">
      <form onSubmit={handleSubmit}>
        <h1>Edit Product</h1>
        <input
          type="text"
          placeholder="Product Title"
          value={productData.title}
          onChange={(e) => {
            setProductData({ ...productData, title: e.target.value });
          }}
          required
          key="title"
        />
        <input
          type="text"
          placeholder="Product Category"
          value={productData.brand}
          onChange={(e) => {
            setProductData({ ...productData, brand: e.target.value });
          }}
          required
          key="brand"
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productData.price}
          onChange={(e) => {
            setProductData({ ...productData, price: e.target.value });
          }}
          required
          key="price"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={productData.thumbnail}
          onChange={(e) => {
            setProductData({ ...productData, thumbnail: e.target.value });
          }}
          required
          key="thumbnail"
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default AdminEditProduct;
