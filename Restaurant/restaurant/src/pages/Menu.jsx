import chefIcon from "../assets/chef.png"
import hamburger from "../assets/hamburger.png"
import cheeseBurger from "../assets/cheeseburger.png"
import doubleCheeseburger from "../assets/double-cheeseburger.png"
import steak from "../assets/steak.png"
import rib from "../assets/ribs.png"
import grilledCheese from "../assets/grilled-cheese.png"
import salad from "../assets/caesar-salad.png" 
import fries from "../assets/french-fries.png"

const foods = [
  {
    name: "Hamburger",
    price: "$2.49",
    descriptions:
      "Buns, patty, tomato, onions, lettuce, and our secret family recipe.",
    img: hamburger,
  },
  {
    name: "Cheeseburger",
    price: "$2.99",
    descriptions:
      "Similar to our hamburger, but with cheese.",
    img: cheeseBurger,
  },
  {
    name: "Double Cheeseburger",
    price: "$3.49",
    descriptions:
      "Similar to our cheeseburger, but with an extra patty.",
    img: doubleCheeseburger,
  },
  {
    name: "Steak",
    price: "$11.99",
    descriptions:
      "A juicy steak made just how you like it.",
    img: steak,
  },
  {
    name: "BBQ Ribs",
    price: "$8.99",
    descriptions:
      "Barbecue ribs with your choice of a add-ons.",
    img: rib,
  },
  {
    name: "Grilled Cheese Sandwich",
    price: "$4.99",
    descriptions:
      "A toasted and grilled cheese sandwich, dipped in our special sauce.",
    img: grilledCheese,
  },
  {
    name: "Caesar Salad",
    price: "$7.99",
    descriptions:
      "Your typical caesar salad that comes with your choice of dressings.",
    img: salad,
  },
  {
    name: "French Fries",
    price: "$1.99",
    descriptions:
      "Sometimes you don't want to eat your burger alone, why not add some french fries?",
    img: fries,
  }
]

export const Menu = () => {
  return (
    <div className=" bg-yellow-100 min-h-screen">
      <div className="flex justify-center items-center mt-8 gap-1">
        <h1 className="text-5xl font-black font-serif">Menu</h1>
        <img src={chefIcon} className="w-12 h-12" />
      </div>
      <div className="shadow-lg bg-red-300 rounded-lg w-4/6 h-full mx-auto mt-8 grid grid-cols-2 gap-24 mb-16 px-16 py-8">
        {foods.map((food, index) => {
          return (
            <div key={index} className="flex items-center gap-4">
              <img src={food.img} className="food-img" />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 font-black text-blue-950 text-xl">
                  <p>{food.name}</p>
                  <p className="text-red-600">{food.price}</p>
                </div>
                <h1 className="font-bold">{food.descriptions}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
