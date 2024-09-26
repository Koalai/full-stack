import  { useContext, useState } from "react";
import { productContext, cartContext } from "../components/context/productContext";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function Shop() {
  const products = useContext(productContext);
  const { setCart } = useContext(cartContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemCounts, setItemCounts] = useState({});

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const increment = (id) => {
    setItemCounts((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setItemCounts((prevCounts) => {
      const currentCount = prevCounts[id] || 0;
      if (currentCount === 0) return prevCounts;
      return {
        ...prevCounts,
        [id]: currentCount - 1,
      };
    });
  };

  const addCart = (item, quantityToAdd) => {
    setItemCounts(0);
    if (!item || !item.id) {
      console.error("The item don't pass the right value");
    }

    setCart((prevCart) => {
      const existedProduct = prevCart.find((p) => p.id === item.id);

      if (!existedProduct) {
        return [...prevCart, { ...item, quantity: quantityToAdd }];
      } else {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantityToAdd } : p
        );
      }
    });
  };

  return (
    <Box sx={{ backgroundColor: '#E2E8F0', padding: 2 }}>
      <Box display="flex" justifyContent="space-between" mt={2} px={3}>
        <Box display="flex" gap={4} mx="auto" fontWeight="bold" color="#4B5563">
          <Typography onClick={() => handleCategoryChange("All")} variant="h6" sx={{ cursor: 'pointer' }}>
            All
          </Typography>
          <Typography onClick={() => handleCategoryChange("men's clothing")} variant="h6" sx={{ cursor: 'pointer' }}>
            Men
          </Typography>
          <Typography onClick={() => handleCategoryChange("women's clothing")} variant="h6" sx={{ cursor: 'pointer' }}>
            Women
          </Typography>
          <Typography onClick={() => handleCategoryChange("jewelery")} variant="h6" sx={{ cursor: 'pointer' }}>
            Jewelery
          </Typography>
          <Typography onClick={() => handleCategoryChange("electronics")} variant="h6" sx={{ cursor: 'pointer' }}>
            Electronics
          </Typography>
        </Box>
        <FormControl variant="outlined" sx={{ minWidth: 200, pt: 2 }}>
          <InputLabel>Sorted By</InputLabel>
          <Select defaultValue="All">
            <MenuItem value="All">Sorted By: All Products</MenuItem>
            <MenuItem value="Alphabetical">A-Z Alphabetical</MenuItem>
            <MenuItem value="HighToLow">Price: High To Low</MenuItem>
            <MenuItem value="LowToHigh">Price: Low To High</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {filterProducts.map((product) => (
          <Grid item xs={12} sm={6} key={product.id}>
            <Box
              textAlign="center"
              boxShadow={3}
              borderRadius="8px"
              p={3}
              sx={{
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
                background: 'linear-gradient(to right, #fff, #f0f0f0)',
              }}
            >
              <Typography variant="h6" sx={{ height: '96px' }}>
                {product.title}
              </Typography>
              <Link to={`/productInfo/${product.id}`}>
                <img
                  alt="product"
                  src={product.image}
                  style={{ width: '240px', height: '240px', objectFit: 'contain', borderRadius: '8px' }}
                />
              </Link>
              <Typography variant="h6">{`$${product.price}`}</Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button onClick={() => decrement(product.id)}>-</Button>
                <Typography>{itemCounts[product.id] || 0}</Typography>
                <Button onClick={() => increment(product.id)}>+</Button>
              </Box>
              <Link to={`/productInfo/${product.id}`}>
                <Typography sx={{ color: 'black', cursor: 'pointer', textDecorationLine: "none"}}>
                  View Details
                </Typography>
              </Link>
              <Box
                sx={{
                  backgroundColor: '#FBBF24',
                  '&:hover': { backgroundColor: '#FDE68A' },
                  borderRadius: '8px',
                  p: 1,
                  cursor: 'pointer',
                }}
                onClick={() => addCart(product, itemCounts[product.id])}
              >
                <Typography>Add to Cart</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Shop;
  