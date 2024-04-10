import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartCard from './CartCard';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchCartData = async () => {
    try {
      const response = await fetch('http://localhost:3000/cart');
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const deleteCartItem = async (itemId) => {
    try {
      await fetch(`http://localhost:3000/cart/${itemId}`, {
        method: 'DELETE',
      });
      fetchCartData();
    } catch (error) {
      console.error('Error deleting from cart:', error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <CartCard key={item.id} item={item} onDelete={deleteCartItem} />
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
