import Header from './components/Header/Header';
import AddProduct from './components/Product/AddProduct';
import Product from './components/Product/Products';
import CartContextProvider from './components/store/CartContextProvider'


function App() {
  return (
    <>
    <CartContextProvider>
      <Header />
      <Product />
      <AddProduct />
    </CartContextProvider>
    </>
  );
}

export default App;
