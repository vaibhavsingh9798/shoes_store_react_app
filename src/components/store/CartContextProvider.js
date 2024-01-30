import { useEffect, useState , useCallback } from 'react'
import CartContext from './cart-auth'

const CartContextProvider = (props) =>{
    const [items,setItems] = useState([])
    const [totalItem,setTotallItem] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)
    let URL = 'https://crudcrud.com/api/cdff5eef65af452a9cc8681a782df83d'
  
    
  const fetchCartItem =  useCallback(async () =>{
    let cartItem = []
    let totalitem = 0;
    let totalprice = 0;
        try{
       let response = await fetch(`${URL}/cart`)
       if(response.ok){
        let data = await response.json()
        console.log('fetch data--',data)
        data.map((item) => {
      let findItem = cartItem.find(item1 => item.name === item1.name)
      if(findItem){
        findItem.quantity += 1
        if(item.size == 'S')
        findItem.stock.S += 1
        else if(item.size == 'M')
          findItem.stock.M += 1
        else
          findItem.stock.L += 1
      }else{
        if(item.size == 'S')
        item.stock = {S:1,M:0,L:0}
        else if(item.size == 'M')
        item.stock = {S:0,M:1,L:0}
        else
        item.stock = {S:0,M:0,L:1}
        item.quantity = 1
        cartItem.push(item)
      }

      totalitem++;
      totalprice += parseInt(item.price)
    
      })
      setTotalPrice(totalprice)
      setTotallItem(totalitem)
      setItems(cartItem)
    }
}catch(err){
    console.error(err);
}
  },[])

  const handleCart = async (item) =>{
    if(item){
     try{
      let response = await fetch(`${URL}/cart`,{
        method:'POST',
        body:JSON.stringify(item),
        headers:{'Content-Type':'application/json'}
      })
      if(response.ok)
      fetchCartItem()
     }catch(error){
       console.error(error)
     }
    }
  }

   useEffect(()=>{
    fetchCartItem()
   },[])

    return(
        <>
       <CartContext.Provider value={{handleCart:handleCart,cartItems:items,totalItem:totalItem,totalPrice:totalPrice,fetchCartItem:fetchCartItem}}>
           {props.children} 
       </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;