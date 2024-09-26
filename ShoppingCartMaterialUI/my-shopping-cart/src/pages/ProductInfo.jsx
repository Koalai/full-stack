import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import { productContext, cartContext } from "../components/context/productContext";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Divider,
} from "@mui/material";

export const ProductInfo = () => {
  const products = useContext(productContext);
  const { setCart } = useContext(cartContext);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

 
  const product = products.find((p) => p.id === parseInt(productId));
  const recommendedProduct = products.filter((p) => p.category === product.category);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const addProductToCart = () => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (!existingProduct) {
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ flexDirection: 'column', flex: 1, color: '#475569', fontWeight: '600', padding: 3 }}>
      <Box sx={{ marginTop: 2, marginLeft: 3, fontSize: '16px' }}>
        <Typography component={Link} to="/home" sx={{ textDecoration: 'none', color: '#475569' }}>Home</Typography> &#10148;
        <Typography component={Link} to="/shop" sx={{ textDecoration: 'none', color: '#475569' }}> Shop</Typography> &#10148; &nbsp;{product.title}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', width: '70%', marginLeft: 3, gap: 6 }}>
        <Box sx={{ width: '80%', marginTop: 3 }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', objectFit: 'contain' }} />
        </Box>
        <Box sx={{ fontSize: '20px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="h5">${product.price}</Typography>
          <Typography>{product.description}</Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#64748B', 
              color: '#FFFFFF',
              width: '140px',
              '&:hover': {
                backgroundColor: '#000000', 
                color: '#D1D5DB', 
              },
            }}
            onClick={addProductToCart}
          >
            ADD TO CART
          </Button>
        </Box>
      </Box>

      <Box sx={{ flexDirection: 'column', marginTop: 3, marginLeft: 2, fontSize: '20px' }}>
        <Typography variant="h6">Product you may like</Typography>
        <Divider sx={{ marginY: 1 }} />
        <Carousel
          responsive={responsive}
        >
          {recommendedProduct.map(rec => (
            <Box key={rec.id} sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, width: '80%', height: '90%' }}>
              <Link to={`/productInfo/${rec.id}`}>
                <img src={rec.image} alt={rec.title} style={{ width: '240px', height: '240px', objectFit: 'contain' }} />
              </Link>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: 1 }}>{rec.title}</Typography>
                <Typography sx={{ color: '#4B5563' }}>${rec.price}</Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.node,
};
