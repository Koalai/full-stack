import { Link } from 'react-router-dom';
import { CartItemCount } from './CartItemCount';
import { cartContext } from './context/productContext';
import { useContext } from 'react';


export const Navbar = () => {
  const { cart } = useContext(cartContext)
  console.log(cart)

  return (
    <div className='flex bg-amber-200 justify-between h-24 items-center text-gray-600 font-bold'>
      <div className='m-auto text-2xl flex gap-14'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
      </div>
      <div className='relative mr-12'>
        <Link to='/cart'>
          <img src='../assets/cart-outline.svg' className='w-9'/>
          <CartItemCount cart={cart} />
        </Link>
      </div>
    </div>
  );
};
