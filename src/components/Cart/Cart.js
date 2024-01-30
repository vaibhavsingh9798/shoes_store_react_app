import { Table ,Button} from 'react-bootstrap';
import styles from './Cart.module.css'
import CartContext from '../store/cart-auth'
import { useContext ,useEffect, useState} from 'react';

const Cart = () =>{
 const [cartItem,setCartItem] = useState([])
 
 let cartCtx =   useContext(CartContext)

useEffect(()=>{
  console.log('useEffect cart call')
     cartCtx.fetchCartItem()
     console.log('cartContext',cartCtx)
},[])
    return(
        <>
        <h2>Cart Product</h2>
        <div className={styles.cartPage}>
        <Table responsive>
               <thead>
                <tr className='text-center'>
                    <th>NAME</th>
                    <th>SIZE</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                 
                </tr>
               </thead>
               <tbody>
               {
             cartCtx.cartItems.map((item,ind)=>(
                  <tr key={ind} className='text-center'>
                    <td>{item.name}</td>
                    <td>{JSON.stringify(item.stock)}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    
                  </tr>
                ))
               }
               </tbody>
             </Table>
             <h4 className={styles.price}>Total &#x20B9; {cartCtx.totalPrice}</h4>
             <div className={styles.buyBtn}>
             <Button className='bg-info mt-2'>PURCHASE</Button>
             </div>
            </div>
        </>
    )
}

export default Cart;