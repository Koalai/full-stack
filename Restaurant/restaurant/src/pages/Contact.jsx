import locationIcon from "../assets/placeholder.png"
import clockIcon from "../assets/clock.png"
import callIcon from "../assets/call.png"
import emailIcon from "../assets/mail.png"
import { useState } from "react"

export const Contact = () => {
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    descriptions: false,
  })

  const handleFocus = (field) =>
    setIsFocused((prev) => ({ ...prev, [field]: true }))
  const handleBlur = (field) =>
    setIsFocused((prev) => ({ ...prev, [field]: false }))

  return (
    <div className="bg-yellow-100 min-h-screen">
      <h1 className="text-center mt-8 font-black text-5xl ">
        <i>Contact Us</i>
      </h1>
      <div className="flex bg-orange-200 w-3/4 mx-auto mt-8 rounded-lg py-8 px-16">
        <div className="w-1/3 flex flex-col gap-8">
          <div className="flex gap-4 w-1/2">
            <img src={locationIcon} className="w-8 h-8" />
            <p>356 Đ. Trần Hưng Đạo, Phường 2, Quận 5, Hồ Chí Minh</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={clockIcon} className="w-8 h-8" />
            <div className="flex flex-col">
              <span>Mon-Thurs:8am-8pm</span>
              <span>Fri-Sun:8am-11pm</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={callIcon} className="w-8 h-8" />
            <p>(222)-888 5555</p>
          </div>
          <div className="flex gap-4">
            <img src={emailIcon} className="w-8 h-8" />
            <p className="font-black text-xl text-red-500">Message Us</p>
          </div>
          <div className="flex flex-col gap-16 mt-4">
            <div className="relative flex flex-col gap-2">
              <span
                className={`absolute left-[-12px] text-lg text-red-500 transition-all duration-300 transform ${
                  isFocused.name
                    ? "top-[-25px] scale-75 opacity-100"
                    : "top-[50%] scale-100 opacity-0"
                }`}
              >
                Full Name
              </span>
              <input
                type="text"
                placeholder="Full Name"
                className="bg-orange-200 focus:outline-none focus:placeholder-transparent border-b-2 border-black w-3/4 "
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <span
                className={`absolute left-[-8px] text-lg text-red-500 transition-all duration-300 transform ${
                  isFocused.email
                    ? "top-[-25px] scale-75 opacity-100"
                    : "top-[50%] scale-100 opacity-0"
                }`}
              >
                Email
              </span>
              <input
                type="text"
                placeholder="Email"
                className="bg-orange-200 focus:outline-none focus:placeholder-transparent border-b-2 border-black w-3/4 "
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
              />
            </div>

            <div className="relative flex flex-col gap-2">
              <span
                className={`absolute left-[-28px] text-lg text-red-500 transition-all duration-300 transform ${
                  isFocused.descriptions
                    ? "top-[-25px] scale-75 opacity-100"
                    : "top-[50%] scale-100 opacity-0"
                }`}
              >
                Type your message...
              </span>
              <textarea
                type="text"
                placeholder="Type your message..."
                className="bg-orange-200 focus:outline-none focus:placeholder-transparent border-b-2 border-black w-3/4 "
                onFocus={() => handleFocus("descriptions")}
                onBlur={() => handleBlur("descriptions")}
              />
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7136398511166!2d106.68237577596179!3d10.756538789391044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f04d883703b%3A0xfef764d064f86638!2zSm9sbGliZWUgVHLhuqduIEjGsG5nIMSQ4bqhbw!5e0!3m2!1svi!2s!4v1728049922066!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
