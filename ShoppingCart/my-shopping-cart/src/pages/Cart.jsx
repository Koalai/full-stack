import { useContext, useState, useEffect } from "react"
import "../styles/Cart.css"
import { cartContext } from "../components/context/productContext"
import { Link } from "react-router-dom"

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
    alert("Thanks for your purchase from our mock stores. Item won't be delivered within the forseable futures.")
    setStoredCart([]);
    setCart([]);
    localStorage.removeItem('cart');
  }

  const totalPrice = () => {
    return storageCart.reduce((total, item) => {
      return Math.floor(total += (item.price * item.quantity))
    } , 0)
  }

  return (
    <div className="cartContainer">
      <h2>Check Out</h2>

      {storageCart.length === 0 && (
        <div className="emptyCart">
          <p>There are no products in your cart at the moment</p>
          <Link to="/shop">Shopping Now </Link>
        </div>
      )}

      {storageCart.length !== 0 &&
        storageCart.map((item) => {
          return (
            <div className="productCartContainer" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="productDetail">
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>${item.price * item.quantity}</p>
                <button onClick={() => handleDel(item.id)}>Remove</button>
              </div>
            </div>
          )
        })}
      {storageCart.length !== 0 && (
        <>
          <hr />
          <div className="checkOut">
            <p>Total Price: ${totalPrice()}</p>
            <button onClick={() => checkOut()}>CHECK OUT NOW</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
