import { useEffect, useState } from 'react';
import styles from './Product.module.css'
const Product = () =>{
    const [products,setProducts] = useState([])
    const URL = 'https://crudcrud.com/api/a258197e8e0c4c60a78c5c64745cdbdd'
    const fetchProduct = async ()=>{
        try{
      let response = await fetch(`${'https://crudcrud.com/api/a258197e8e0c4c60a78c5c64745cdbdd'}/products`)
       if(response.ok){
         let data = await response.json()
         setProducts(data)
         console.log('data',data)
        }
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchProduct()
    },[])

    const printProduct = () => {
       
        return( 
            <div>
          {  products.map((item)=> {
              return(
                <div key={item.id}>
             <div className={styles.productItem}>Name: {item.name}</div>
             <div  className={styles.productItem}>Desc: {item.desc}</div>
             <div  className={styles.productItem}>Size: {item.size}</div>
             <div  className={styles.productItem}>Price: {item.price}</div>
             <button  className={styles.productItem}>Add To Cart</button>
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