import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import {BsFillCartFill} from "react-icons/bs"
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalQuantity);
  return (
    <div className="cartIcon">
      
      <h3><BsFillCartFill style={{height:30,width:50}}/> <span style={{position:"absolute",top:10,right:650,width:10}}>{quantity}</span> </h3>
    </div>
  );
};

export default Cart;
