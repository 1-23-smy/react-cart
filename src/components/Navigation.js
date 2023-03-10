import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
const Navigation = () => {
  const cartStyle={
    background:'#F59E0D',
    display:'flex',
    padding:'6px 12px',
    borderRadius:'50px'

  }
  const {cart}=useContext(CartContext);
  return (
    <>
  <nav className="container mx-auto flex items-center justify-between py-4">
  
      <Link to="/">
        <img style={{height:45}} src="/images/logo.png" alt="logo"/>
      </Link>
    <ul className="flex items-center">
      <li><Link to="/">Home</Link></li>
      <li className="ml-6"><Link to="/Products">Products</Link></li>
      <li className="ml-6"><Link to="/Cart">
        <div style={cartStyle}>
          <span className="text-white">{cart.totalItems}</span>
          <img className="ml-2"src="/images/cart.png" alt="cart"/>
        </div>
        </Link>
        </li>
    </ul>

  </nav>
    </>
  )
}

export default Navigation