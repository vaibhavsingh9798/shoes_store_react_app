import { Link } from 'react-router-dom'; 
import styles from './Header.module.css'
import { useContext, useState } from 'react';
import Cart from '../Cart/Cart';
import CartContext from '../store/cart-auth';
const Header = () =>{
    const [showCart,setShowCart] = useState(false)
   let cartCtx =  useContext(CartContext)
    return(
        <>
       <div className={styles.container}>
        <h2>HOME</h2>
        <h3 onClick={()=> setShowCart(!showCart)}>Cart {cartCtx.totalItem}</h3>
        {showCart && <Cart />}
       </div>
       
        </>
    )
}

export default Header;