import { useState } from "react";
import {Form,Container,Row,Col} from 'react-bootstrap'
import styles from './Product.module.css'
const AddProduct = () =>{
    let URL = 'https://crudcrud.com/api/a258197e8e0c4c60a78c5c64745cdbdd'

    const [product,setProduct] = useState({name:'',desc:'',size:'',price:0})

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        console.log('value..',product)
        try{
       let response = await  fetch(`${URL}/products`,{
            method:'POST',
            body:JSON.stringify(product),
            headers:{'Content-Type':'application/json'}
         })
         if(response.ok)
         alert('Product Created!')

        setProduct({name:'',desc:'',size:'',price:0})
        }catch(error){
            console.error(error.message)
        }
        
    }
    return(
        <>
        <div className={styles.heading}>
        <h1>Add Product</h1>
        </div>
        <div className={styles.parent}>
            
                <Form>
                     <div className={styles.formChild}>
                    <Form.Label className={styles.title}>Name</Form.Label>
                    <Form.Control type="text" name='name' value={product.name} onChange={(e) => setProduct({...product,[e.target.name]:e.target.value}) }/>
                    <Form.Label className={styles.title}>Desc</Form.Label>
                    <Form.Control type="text" name='desc' value={product.desc} onChange={(e) => setProduct({...product,[e.target.name]:e.target.value}) }/>
                    <Form.Label className={styles.title}>Price</Form.Label>
                    <Form.Control type="number" name='price' value={product.price} onChange={(e) => setProduct({...product,[e.target.name]:e.target.value})} />
                    <Form.Label className={styles.title}>Size</Form.Label>
                     <select name="size" value={product.size} onChange={(e) => setProduct({...product,[e.target.name]:e.target.value})}>
                        <option  value='S'>S</option>
                        <option  value='M'>M</option>
                        <option  value='L'>L</option>
                     </select>
                    <Row >
                    <Col md={6}>
                   <button onClick={handleSubmit} className="btn btn-primary mt-4">Submit</button>
                   </Col>
                   </Row>
                   </div>
                </Form>

                </div>
        
        </>
    )
}

export default AddProduct;