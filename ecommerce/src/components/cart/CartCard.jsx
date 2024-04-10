import React from "react";
import "./Cart.css";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";


const CartCard = ({ item, fetchCartData }) => {
  const handleDelete = async () => {
    const isConfirmed=window.confirm(`Are you sure you want to delete ${item.title}?`)
  if(isConfirmed){
    const resp = await fetch(`http://localhost:3000/cart/${item.id}`, {
      method: "DELETE",
    });
    const data = await resp.json();
    if(data){
      toast.success(`${item.title} deleted successfully`)
      fetchCartData()
    }
  };
  }
    
  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt="Image" />
      </td>
      <td>{item.title}</td>
      <td>Rs. {item.price}</td>
      <td>
      <MdDelete onClick={handleDelete} className="delete-btn"/>
      </td>
    </tr>
  );
};

export default CartCard;
