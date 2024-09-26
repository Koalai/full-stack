import PropTypes from "prop-types"


export const CartItemCount = ({ cart }) => {
  const totalQuantity = cart.reduce((total, item) => total += item.quantity, 0);

  return <div className="absolute bg-red-500 w-5 h-5 text-center rounded-full -top-1 -right-3.5">{totalQuantity}</div>;
};


CartItemCount.propTypes = {
  cart: PropTypes.array.isRequired,
}
