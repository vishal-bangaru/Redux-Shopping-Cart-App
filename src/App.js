import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import CartItem from "./components/CartItem";
function App() {
  const isloggedIn=useSelector(state=>state.auth.isloggedIn)
  const products=useSelector(state=>state.cart.itemList)
  console.log(products) 
  return (
    <div className="App">
      {
        isloggedIn?<Layout/>:<Auth/>
      }
      
    </div>
  );
}

export default App;
