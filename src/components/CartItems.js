import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartitems=useSelector(state=>state.cart.itemList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {
          cartitems.map(item=>(
            <li><CartItem id={item.id} name={item.name} quantity={item.quantity} total={item.totalPrice} price={item.price}/></li>
          ))
        }
      </ul>
    </div>
  );
};

export default CartItems;
