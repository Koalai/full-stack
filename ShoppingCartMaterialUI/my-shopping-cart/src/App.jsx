
import { Navbar } from "./components/Navbar"
import "./App.css"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import ProductProvider from "./components/ProductProvider"
import { CartProvider } from "./components/CartProvider"

const App = () => {
  return (
    <div className="pageContainer">
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default App
