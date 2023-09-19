import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authslice";
import cartSlice from "./cartslice";
const store=configureStore(
    {
        reducer:{
            auth:authSlice.reducer,
            cart:cartSlice.reducer
        }
    }
)
export default store