import { useContext, useState, useEffect } from "react"
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
    <div className="flex flex-col flex-1 text-gray-600 font-semibold">
      <h2 className="text-4xl text-center mt-4">Check Out</h2>

      {storageCart.length === 0 && (
        <div className="text-3xl mx-auto mt-16 flex flex-col gap-8">
          <p>There are no products in your cart at the moment</p>
          <Link to="/shop" className="underline">Shopping Now </Link>
        </div>
      )}

      {storageCart.length !== 0 &&
        storageCart.map((item) => {
          return (
            <div className="flex items-center ml-44 gap-16" key={item.id}>
              <img src={item.image} alt={item.title} className="w-64"/>
              <div className="text-2xl  flex flex-col gap-4 items-start">
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>${item.price * item.quantity}</p>
                <button onClick={() => handleDel(item.id)} className="bg-slate-500 text-white px-3 py-1 rounded-md hover:bg-stone-200 hover:text-slate-600">Remove</button>
              </div>
            </div>
          )
        })}
      {storageCart.length !== 0 && (
        <>
          <hr />
          <div className="ml-44 mt-4 text-xl">
            <p>Total Price: ${totalPrice()}</p>
            <button className="bg-slate-500 text-white py-2 px-3 mt-2 rounded-md hover:text-slate-500 hover:bg-stone-200" onClick={() => checkOut()}>CHECK OUT NOW</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
