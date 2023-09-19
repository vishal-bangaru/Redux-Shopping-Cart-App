import React from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cartslice";
const Product = ({ name, id, imgURL, price }) => {
  
  const dispatch=useDispatch()
  const addToCart=()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }
    ))
  }
  return (
    <div className="card">
      <img style={{borderRadius:5}} src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart} style={{borderRadius:5}}>Add to cart</button>
    </div>
  );
};

export default Product;
