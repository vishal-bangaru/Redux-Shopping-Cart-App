import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  const itemList=useSelector(state=>state.cart.itemList)
  let total=0
  itemList.forEach(element => {
    total+=element.totalPrice
  });
  const showCart=useSelector(state=>state.cart.showCart)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn" style={{borderRadius:5}}>Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
