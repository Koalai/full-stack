import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="flex justify-between px-72 py-8 bg-blue-900 h-42">
      <h1 className="font-bold text-4xl text-red-500"><Link to="/">Winter</Link></h1>
      <div className="flex gap-16 text-xl text-white">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/menu">Menu</Link></p>
        <p><Link to="/contact">Contact us</Link></p>
      </div>
    </div>
  )
}
