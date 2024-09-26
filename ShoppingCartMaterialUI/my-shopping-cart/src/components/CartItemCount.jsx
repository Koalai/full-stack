import PropTypes from "prop-types"
import { Box } from "@mui/material"

export const CartItemCount = ({ cart }) => {
  const totalQuantity = cart.reduce(
    (total, item) => (total += item.quantity),
    0
  )

  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "red",
        width: "20px", // w-5 tương đương với 20px
        height: "20px", // h-5 tương đương với 20px
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        top: "1px", // -top-1 tương đương với -4px
        right: "-4px", // -right-3.5 tương đương với -14px
        color: "white", // Màu chữ (có thể tùy chỉnh)
      }}
    >
      {totalQuantity}
    </Box>
  )
}

CartItemCount.propTypes = {
  cart: PropTypes.array.isRequired,
}
