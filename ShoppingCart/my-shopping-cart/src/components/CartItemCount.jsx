import PropTypes from "prop-types"

export const CartItemCount = ({ cart }) => {
  const totalQuantity = cart.length

  return <div>{totalQuantity}</div>
}

CartItemCount.propTypes = {
  cart: PropTypes.array.isRequired,
}
