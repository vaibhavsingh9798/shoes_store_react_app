import CartContext from './cart-auth'

const CartContextProvider = (props) =>{

    return(
        <>
       <CartContext.Provider value={{name:'vaibhav'}}>
           {props.children} 
       </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;