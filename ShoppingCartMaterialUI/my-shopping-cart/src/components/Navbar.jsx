import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { CartItemCount } from './CartItemCount';
import { cartContext } from './context/productContext';

export const Navbar = () => {
  const { cart } = useContext(cartContext);
  console.log(cart);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFBF00', height: '96px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', gap: '56px', margin: 'auto' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#4B5563' }}>
            <Typography variant="h6" fontWeight="bold">Home</Typography>
          </Link>
          <Link to="/shop" style={{ textDecoration: 'none', color: '#4B5563' }}>
            <Typography variant="h6" fontWeight="bold">Shop</Typography>
          </Link>
        </Box>
        <Box sx={{ position: 'relative', marginRight: '12px' }}>
          <Link to="/cart">
            <IconButton>
              <img src='../assets/cart-outline.svg' alt="Cart" style={{ width: '36px' }} />
            </IconButton>
            <CartItemCount cart={cart} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
