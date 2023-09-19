import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch,useSelector} from "react-redux";
import { cartActions } from "../store/cartslice";
import authActions from "../store/authslice";
const Header = () => {
  
  const dispatch=useDispatch()
  const isloggedIn=useSelector(state=>state.auth.isloggedIn)
   const handle=()=>{
    dispatch(authActions.logout())
    window.location.reload();
  }
  const setShowCart=()=>{
     dispatch(cartActions.setShowCart())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li onClick={setShowCart}>
            <Cart />
          </li>
          {isloggedIn && <li onClick={handle}><button className="logout">Logout</button></li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
