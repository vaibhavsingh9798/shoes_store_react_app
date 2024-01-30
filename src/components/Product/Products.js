import { useCallback, useContext, useEffect, useState } from 'react';
import styles from './Product.module.css'
import CartContext from '../store/cart-auth';

const Product =  () =>{
    const [products,setProducts] = useState([])
    let cartCtx =   useContext(CartContext)
    const URL = 'https://crudcrud.com/api/cdff5eef65af452a9cc8681a782df83d'
    const fetchProduct = useCallback( async ()=>{
        try{
      let response = await fetch(`${URL}/products`)
       if(response.ok){
         let data = await response.json()
         let filterdata = []
         for(let item of data){
            console.log('size',item.size)
              let findItem = filterdata.find(item2 => item2.name == item.name)
              if(findItem){
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

             filterdata.push(item)
              }
          
             console.log('filterData',filterdata)

         }
         setProducts(filterdata)
         console.log('data',data)
        }
        }catch(error){
            console.error(error)
        }
    },[])

    useEffect(()=>{
        fetchProduct()
    },[])

    const reduceStock = (size,item) =>{
       let newProducts = []
       for(let product of products){
        if(item.name == product.name){
            for(let key in product.stock){
                if(key == size){
                product.stock[key] -= 1
                }
            }
        }
        newProducts.push(product)
       }

      setProducts(newProducts)
    }

    const handleClick = (e,item) =>{
        e.preventDefault();
        let size = e.target.name
        if((size == 'S' && item.stock.S>0) || (size == 'M' && item.stock.M>0) || (size == 'L' && item.stock.L>0)){
         cartCtx.handleCart({name:item.name,size:[size],price:item.price})
         reduceStock(size,item)
        }else{
            alert('item not available')
        }
    }

    const printProduct = () => {
       
        return( 
            <div>
          {  products.map((item)=> {
              return(
                <div key={item.id}>
             <div className={styles.productItem}>Name: {item.name}</div>
             <div  className={styles.productItem}>Desc: {item.desc}</div>
             <div  className={styles.productItem}>Price: {item.price}</div>
             <button name='S'   className={styles.productItem} onClick={(e) => handleClick(e,item)}>Buy S {item.stock.S}</button>
             <button name='M'  className={styles.productItem} onClick={(e) => handleClick(e,item)}>Buy M {item.stock.M}</button>
             <button name='L'  className={styles.productItem} onClick={(e) => handleClick(e,item)}>Buy L {item.stock.L}</button>
            </div>
              )
            }) 
        }
            </div>
        )
                
               
    
    }
 
    return(
        <>
         <div className={styles.heading}>
            <h1>My Products</h1>
         </div>
         <div className={styles.productParent}>
           {products.length && printProduct()}
        
         </div>
        </>
    )
}

export default Product;