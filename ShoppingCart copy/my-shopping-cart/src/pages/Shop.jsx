import { useContext, useState } from "react"
import { productContext } from "../components/context/productContext"
import { Link } from "react-router-dom"
import { cartContext } from "../components/context/productContext"

function Shop() {
  const products = useContext(productContext)
  const { setCart } = useContext(cartContext)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [itemCounts, setItemCounts] = useState({})

  const handleCatergoryChange = (category) => {
    setSelectedCategory(category)
  }

  const filterProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const increment = (id) => {
    setItemCounts((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) + 1,
    }))
  }

  const decrement = (id) => {
    setItemCounts((prevCounts) => {
      const currentCount = prevCounts[id] || 0
      if (currentCount === 0) return prevCounts
      return {
        ...prevCounts,
        [id]: currentCount - 1,
      }
    })
  }

  const addCart = (item, quantityToAdd) => {
    setItemCounts(0)
    if (!item || !item.id) {
      console.error("The item don't pass the right value")
    }

    setCart((prevCart) => {
      const existedProduct = prevCart.find((p) => p.id === item.id)

      if (!existedProduct) {
        return [...prevCart, { ...item, quantity: quantityToAdd }]
      } else {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantityToAdd } : p
        )
      }
    })
  }

  return (
    <div className="flex flex-col bg-slate-200">
      <div className="flex justify-between mt-2 px-24">
        <div className="flex gap-16 mx-auto text-2xl font-bold text-gray-600">
          <h4 onClick={() => handleCatergoryChange("All")}>All</h4>
          <h4 onClick={() => handleCatergoryChange("men's clothing")}>Men</h4>
          <h4 onClick={() => handleCatergoryChange("women's clothing")}>
            Women
          </h4>
          <h4 onClick={() => handleCatergoryChange("jewelery")}>Jewelery</h4>
          <h4 onClick={() => handleCatergoryChange("electronics")}>
            Electronics
          </h4>
        </div>
        <div className="pt-2">
          <select className="rounded-md h-8 px-2 bg-gray-600 text-white font-semibold">
            <option value="All">Sorted By: All Products</option>
            <option value="Alphabetical">A-Z Alphabetical</option>
            <option value="HighToLow">Price: High To Low</option>
            <option value="LowToHigh">Price: Low To High</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16  ">
        <div className="grid grid-cols-2 w-4/6 gap-24">
          {filterProducts.map((product) => {
            return (
              <div
                className="text-center shadow-lg rounded-lg hover:scale-105 bg-gradient-to-r bg-white transition-transform duration-300 p-3 text-stone-500 font-semibold text-2xl flex flex-col gap-3"
                key={product.id}
              >
                <h3 className="h-24">
                  {product.title}
                </h3>
                <div className="flex justify-center items-center">
                  <Link to={`/productInfo/${product.id}`}>
                    <img
                      alt="product"
                      src={product.image}
                      className="w-60 h-60 object-contain rounded-md  transition-transform "
                    />
                  </Link>
                </div>

                <h3>{`$${product.price}`}</h3>
                <div className="flex justify-evenly w-3/5 mx-auto">
                  <button onClick={() => decrement(product.id)}>-</button>
                  <span>{itemCounts[product.id] || 0}</span>
                  <button onClick={() => increment(product.id)}>+</button>
                </div>
                <Link to={`/productInfo/${product.id}`}>
                  <h3 className="hover:text-cyan-300">View Details</h3>
                </Link>
                <div className="bg-orange-200 hover:bg-yellow-300 rounded-md">
                  <h3 onClick={() => addCart(product, itemCounts[product.id])}>
                    Add to Cart
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Shop
