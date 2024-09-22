import { useContext, useState } from "react"
import "../styles/Shop.css"
import { productContext } from "../components/context/productContext"
import { Link } from "react-router-dom"

function Shop() {
  const products = useContext(productContext)
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
    setItemCounts(prevCounts => {
        const currentCount = prevCounts[id] || 0;
        if (currentCount === 0) return prevCounts; 
        return {
            ...prevCounts,
            [id]: currentCount - 1 
        };
    });
};

  return (
    <div className="shopContainer">
      <div className="top">
        <div className="categories">
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
        <div className="sort">
          <select>
            <option value="All">Sorted By: All Products</option>
            <option value="Alphabetical">A-Z Alphabetical</option>
            <option value="HighToLow">Price: High To Low</option>
            <option value="LowToHigh">Price: Low To High</option>
          </select>
        </div>
      </div>
      <div className="main">
        <div className="items">
          {filterProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <h3>{product.title}</h3>
                <div className="imgWrapper">
                  <Link to={`productInfo/${product.id}`}>
                    <img alt="product" src={product.image} />
                  </Link>
                </div>
                <h3>{`$${product.price}`}</h3>
                <div className="addCount">
                  <button onClick={() => decrement(product.id)}>-</button>
                  <span>{itemCounts[product.id] || 0}</span>
                  <button onClick={() => increment(product.id)}>+</button>
                </div>
                <h3>View Details</h3>
                <div className="addCart">
                  <h3>Add to Cart</h3>
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
