import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import { CartItemCount } from './CartItemCount';
import { cartContext } from './context/productContext';
import { useContext } from 'react';

export const Navbar = () => {
  const { cart } = useContext(cartContext)
  console.log(cart)

  return (
    <div className='navContainer'>
      <div className='navCenter'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
      </div>
      <div className='navRight'>
        <Link to='/cart' className='cartIconWrapper'>
          <img src='../assets/cart-outline.svg' />
          <CartItemCount cart={cart} />
        </Link>
      </div>
    </div>
  );
};
