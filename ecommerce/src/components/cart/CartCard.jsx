import React from 'react';
import toast from 'react-hot-toast'

const CartCard = ({ item, onDelete }) => {
  const handleDelete = () => {
    const isConfirmed = window.confirm(`Are you sure you want to delete ${item.title}?`);
    if (isConfirmed) {
      onDelete(item.id);
      toast.success('Cart deleted successfully')
    }
  };

  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt="Image" />
      </td>
      <td>{item.title}</td>
      <td>Rs. {item.price}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default CartCard;
