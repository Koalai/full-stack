import dashboardIcon from "../assets/icons/dashboard.png"
import homeIcon from "../assets/icons/home.png"
import profileIcon from "../assets/icons/profile.png"
import messageIcon from "../assets/icons/message.png"
import historyIcon from "../assets/icons/history.png"
import taskIcon from "../assets/icons/task.png"
import groupIcon from "../assets/icons/group.png"
import settingIcon from "../assets/icons/settings.png"
import helpIcon from "../assets/icons/help.png"
import privacyIcon from "../assets/icons/privacy.png"

const mainItems = [
  { src: homeIcon, text: "Home" },
  { src: profileIcon, text: "Profile" },
  { src: messageIcon, text: "Message" },
  { src: historyIcon, text: "History" },
  { src: taskIcon, text: "Task" },
  { src: groupIcon, text: "Group" },
]

const subItems = [
  { src: settingIcon, text: "Settings" },
  { src: helpIcon, text: "Support" },
  { src: privacyIcon, text: "Privacy" },
]
export const Sidebar = () => {
  return (
    <div className="w-1/5 bg-blue-400 text-white font-bold font-roboto">
      <div className="flex items-center gap-2 ml-4 mt-4">
        <img src={dashboardIcon} className="w-16 h-auto" />
        <h1 className="text-4xl  ">Dashboard</h1>
      </div>
      <div className="mt-16 ml-8 text-2xl flex flex-col gap-4 ">
        {mainItems.map((item, index) => {
          return (
            <div key={index} className="icon-sidebar">
              <img src={item.src} className="img-custom" />
              <p>{item.text}</p>
            </div>
          )
        })}
        <div className="mt-12 flex flex-col gap-4">
          {subItems.map((itm, index) => {
            return (
              <div key={index} className="icon-sidebar">
                <img src={itm.src} className="img-custom" />
                <p>{itm.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
