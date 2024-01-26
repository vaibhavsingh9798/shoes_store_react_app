import { Link } from 'react-router-dom'; 
import styles from './Header.module.css'
const Header = () =>{
    return(
        <>
       <div className={styles.container}>
        <h2>HOME</h2>
        <h3>Cart</h3>
       </div>
       
        </>
    )
}

export default Header;