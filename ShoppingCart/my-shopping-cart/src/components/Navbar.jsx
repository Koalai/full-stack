import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navContainer'>
      <div className='navCenter'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
      </div>
      <div className='navRight'>
        <Link to='/cart'>
          <img src='../assets/cart-outline.svg' />
        </Link>
      </div>
    </div>
  );
};
