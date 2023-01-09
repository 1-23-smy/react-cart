import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
// import About from "./pages/About";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import SingleProduct from './pages/SingleProduct'
import ProductsPage from "./pages/ProductsPage";
import { CartContext } from "./CartContext";
import {useState,useEffect} from 'react';
function App() {
    const [cart,setCart]=useState({});
    //fetch from local storage because after refresh the data will remain in our storage.
    useEffect(() => {
      const cart = window.localStorage.getItem('cart');
        // console.log(JSON.parse(cart));
    }, [])
    
useEffect(() => {
    window.localStorage.setItem('cart',JSON.stringify(cart));
}, [cart])

    return (
        <>
            <Router>
                <CartContext.Provider value={{cart,setCart}}>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home />} exact></Route>
                    {/* <Route path="/about" element={<About />}></Route> */}
                    <Route path="/products" exact element={<ProductsPage/>}></Route>
                    <Route path="/products/:_id" element={<SingleProduct/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    
                </Routes>
                </CartContext.Provider>
            </Router>
        </>

    )
}
export default App;