import { createContext } from "react";


const CartContext = createContext({handleCart:()=>{},cartItems:[],totalItem:0,totalPrice:0,fetchCartItem:()=>{}});

export default CartContext ;