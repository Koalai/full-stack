import starIcon from "../assets/icons/star-plus.svg"
import eyeIcon from "../assets/icons/eye-plus.svg"
import shareIcon from "../assets/icons/share.svg"
import avatar1 from "../assets/images/avatar1.png"
import avatar2 from "../assets/images/avatar2.png"
import avatar3 from "../assets/images/profile-ava.jpg"
import avatar4 from "../assets/images/avatar4.png"

const items = [
  {
    title: "Super Cool Project",
    text: "The 'HealthyLife' app project is a platform designed to help users track and improve their health. The app offers features such as meal planning, calorie tracking, and workout scheduling.",
  },
  {
    text: "The 'SkillShare' app connects learners with experts across various fields. Users can browse topics like photography and coding, and join live classes or access recorded tutorials. ",
    title: "Less Cool Project",
  },
  {
    title: "Impossible App",
    text: "The 'TravelWise' app simplifies travel planning with personalized itineraries, flight bookings, and a live map of local attractions.",
  },
  {
    title: "Easy Peasy App",
    text: "The 'GroceryBuddy' app makes shopping easy by allowing users to create and manage grocery lists. ",
  },
  {
    title: "Ad Blocker",
    text: "Ad Blocker is a browser extension that prevents intrusive ads from displaying on websites.",
  },
  {
    title: "Money Maker",
    text: "The 'TaskRewards' app allows users to earn money by completing simple tasks like surveys, watching videos, and testing products.",
  },
]

export const Content = () => {
  return (
    <div className="flex-grow flex bg-slate-300 py-4">
      <div className="px-4 w-4/5 flex flex-col">
        <h1 className="font-bold text-xl mb-4">Your Projects</h1>
        <div className="grid grid-cols-2 gap-6 flex-grow max-w-4xl">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-xl px-4 py-4 border-l-8 border-l-yellow-400 bg-white rounded-xl flex flex-col"
              >
                <p className="font-bold text-lg">{item.title}</p>
                <p className="flex-grow text-sm">{item.text}</p>
                <div className="flex justify-end gap-4">
                  <img src={starIcon} className="w-8 h-6" />
                  <img src={eyeIcon} className="w-8 h-6" />
                  <img src={shareIcon} className="w-8 h-6" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex-grow px-6 h-1/2 flex flex-col w-2/5">
        <h1 className="font-bold text-xl mb-4">Announcements</h1>
        <div className="shadow-xl bg-white rounded-xl px-12 pt-4 w-4/5">
          <p className="font-bold text-md">Site Maintenance</p>
          <p className="text-sm mb-4">
            We are currently performing scheduled maintenance to improve our
            website. 
          </p>
          <hr />
          <p className="font-bold text-md">Community Share Day</p>
          <p className="text-sm mb-4">
            Join us for Community Share Day! We&apos;re excited to bring our
            community together to share resources, ideas, and skills.
          </p>
          <hr />
          <p className="font-bold text-md">Updated Privacy Policy</p>
          <p className="text-sm mb-4">
            We have updated our Privacy Policy to enhance your data protection
            and privacy rights.
          </p>
        </div>
              <div >
                  <h1 className="font-bold text-xl mt-4 mb-2">Trending</h1>
                  <div className="shadow-xl bg-white h-64 mt-4 pl-8 gap-4 w-4/5 justify-center rounded-xl flex flex-col">
                      <div className="flex gap-2 items-center">
                          <img src={avatar1} className="img-trend-custom"/>
                          <div>
                              <p>@tegan</p>
                              <p>World Peace Builder</p>
                          </div>
                      </div>
                      <div className="flex gap-2">
                          <img src={ avatar3} className="img-trend-custom"/>
                          <div>
                              <p>@koalai</p>
                              <p>Super Cool Project</p>
                          </div>
                      </div>
                      <div className="flex gap-2">
                          <img src={avatar2} className="img-trend-custom"/>
                          <div>
                              <p>@alex</p>
                              <p>No Traffic Maker</p>
                          </div>
                      </div>
                      <div className="flex gap-2">
                          <img src={avatar4} className="img-trend-custom"/>
                          <div>
                              <p>@kendall</p>
                              <p>Life Changing App</p>
                          </div>
                      </div>

                  </div>
        </div>
      </div>
    </div>
  )
}
