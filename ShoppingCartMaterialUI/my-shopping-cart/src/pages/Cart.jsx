import { useContext, useState, useEffect } from "react"
import { cartContext } from "../components/context/productContext"
import { Link } from "react-router-dom"
import { Box, Button, Typography, Grid, Divider } from "@mui/material"

function Cart() {
  const { setCart } = useContext(cartContext)
  const [storageCart, setStoredCart] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []
    setStoredCart(savedCart)
  }, [])

  const handleDel = (id) => {
    const updateCart = storageCart.filter((item) => item.id !== id)
    setCart(updateCart)
    setStoredCart(updateCart)
    localStorage.setItem("cart", JSON.stringify(updateCart))
  }

  const checkOut = () => {
    alert(
      "Thanks for your purchase from our mock stores. Item won't be delivered within the foreseeable future."
    )
    setStoredCart([])
    setCart([])
    localStorage.removeItem("cart")
  }

  const totalPrice = () => {
    return storageCart.reduce((total, item) => {
      return Math.floor((total += item.price * item.quantity))
    }, 0)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        color: "#4B5563",
        fontWeight: "600",
        padding: 2,
      }}
    >
      <Typography variant="h4" align="center" mt={4}>
        Check Out
      </Typography>

      {storageCart.length === 0 && (
        <Box sx={{ textAlign: "center", mt: 4, gap: 2 }}>
          <Typography variant="h5">
            There are no products in your cart at the moment
          </Typography>
          <Link to="/shop" style={{ textDecoration: "underline" }}>
            Shopping Now
          </Link>
        </Box>
      )}

      {storageCart.length !== 0 &&
        storageCart.map((item) => (
          <Box
            display="flex"
            alignItems="center"
            key={item.id}
            sx={{ marginLeft: "2rem", gap: 4 }}
          >
            <img src={item.image} alt={item.title} style={{ width: "256px" }} />
            <Box
              sx={{
                fontSize: "20px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography>{item.title}</Typography>
              <Typography>Quantity: {item.quantity}</Typography>
              <Typography>${item.price * item.quantity}</Typography>
              <Button
                onClick={() => handleDel(item.id)}
                sx={{
                  backgroundColor: "#64748B",
                  color: "#FFFFFF",
                  width: "100px", 
                  "&:hover": {
                    backgroundColor: "#D1D5DB",
                    color: "#475569",
                  },
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))}

      {storageCart.length !== 0 && (
        <>
          <Divider sx={{ marginY: 2 }} />
          <Box sx={{ marginLeft: "2rem", mt: 2, fontSize: "20px" }}>
            <Typography>Total Price: ${totalPrice()}</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#64748B",
                color: "#FFFFFF",
                marginTop: 1,
                "&:hover": {
                  backgroundColor: "#D1D5DB",
                  color: "#475569",
                },
              }}
              onClick={() => checkOut()}
            >
              CHECK OUT NOW
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Cart
