import searchIcon from "../assets/icons/magnify.svg"
import notificationIcon from "../assets/icons/bell-ring.svg"
import avatar from "../assets/images/profile-ava.jpg"

export const Header = () => {
  return (
    <div className="py-1">
      <div className="flex justify-between px-16 py-1">
        <div className="w-2/5 flex gap-3 py-3">
          <input className="w-full rounded-lg  bg-stone-100" />
          <img src={searchIcon} className="w-6 h-auto" />
        </div>
        <div className="flex gap-6 items-center w-1/6 justify-center">
          <img src={notificationIcon} className="w-6 h-auto" />
          <img src={avatar} className="w-12 h-auto rounded-full" />
          <p>Koalai</p>
        </div>
      </div>
      <div className="px-10 flex justify-between mt-2">
        <div className="flex items-center gap-4">
          <img src={avatar} className="w-16 h-auto rounded-full" />
          <p className="text-sm">
            Hi there,{" "}
            <span className="block text-2xl font-semibold">
              Koalai (@Koalai)
            </span>
          </p>
        </div>
        <div className="flex items-center gap-12 w-2/4 justify-center">
          <button className="header-btn">New</button>
          <button className="header-btn">Upload</button>
          <button className="header-btn">Share</button>
        </div>
      </div>
    </div>
  )
}
