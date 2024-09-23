import PropTypes from "prop-types"

export const CartItemCount = ({ cart }) => {
  const totalQuantity = cart.reduce((total, item) => total += item.quantity, 0);

  return <div className="itemCounter">{totalQuantity}</div>;
};


CartItemCount.propTypes = {
  cart: PropTypes.array.isRequired,
}
