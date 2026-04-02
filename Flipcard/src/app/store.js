import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slice/UserSlice';
import cartReducer from "../Slice/CartSlice";


export const store = configureStore({
 reducer:{
    userData: userReducer,
     cartData: cartReducer,
 },
});

