import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AdminProductCard = ({ item, getProducts }) => {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete ${item.title}?`
    );
    if (isConfirmed) {
      const resp = await fetch(`http://localhost:3000/products/${item.id}`, {
        method: "DELETE",
      });
      const data = await resp.json();
      if (data) {
        toast.success(`${item.title} delete successfully`);
        getProducts();
      }
    }
  };
  return (
    <tr key={item.id}>
      <td>
        <img src={item.thumbnail} alt="" />
      </td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>{item.category}</td>
      <td>
        <button> <Link to={`/admin/editProduct/${item.id}/`} >edit</Link></button>
        <button onClick={handleDelete}>delete</button>
      </td>
    </tr>
  );
};

export default AdminProductCard;
