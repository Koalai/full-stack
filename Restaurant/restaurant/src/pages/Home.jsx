import { Link } from "react-router-dom"
import backgroundImg from "../assets/food.jpg"
import locationIcon from "../assets/placeholder.png"
import clockIcon from "../assets/clock.png"

export const Home = () => {
  return (
    <div
      className="flex flex-col justify-center items-center flex-1 gap-2 bg-center bg-no-repeat bg-cover min-h-screen"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="w-1/2 text-center leading-normal text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-300 text-6xl font-black ">
        Come on down for some delicious cuisine!
      </h1>
      <p className="text-3xl font-black text-red-300">Tasty and affordable!</p>
      <button className="rounded-xl text-white bg-red-400 px-4 py-2 mt-4">
        <Link to="/menu">Order now!</Link>
      </button>
      <div className="bg-opacity-50 rounded-md bg-black flex w-1/3 h-1/4 text-white text-xl font-black mt-8">
        <div className="py-8 px-4 flex gap-4  w-1/2">
          <img src={locationIcon} className="w-6 h-6" />
          <p>356 Đ. Trần Hưng Đạo, Phường 2, Quận 5, Hồ Chí Minh</p>
        </div>
        <div className="py-8 px-4 flex gap-4 ">
          <img src={clockIcon} className="w-8 h-8" />
          <div className="flex flex-col gap-2 ">
            <p>
              <span className="text-red-500">Mon-Thurs:</span> 8am-8pm
            </p>
            <p>
              <span className="text-red-500">Fri-Sun:</span> 8am-11pm
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
