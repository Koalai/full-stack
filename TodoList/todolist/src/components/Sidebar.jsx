import PropTypes from "prop-types"
import profileAva from "../assets/profile-ava.jpg"
import {
  ChevronFirst,
  MoreVertical,
  Moon,
  Sun,
  ChevronLast,

} from "lucide-react"
import logoWhite from "../assets/logoWhite.svg"
import logoBlack from "../assets/logoBlack.svg"
import { SidebarContext } from "../context/sidebarContext"
import ProjectSection from "./ProjectSection"

export const Sidebar = ({
  children,
  toggleNightMode,
  isNightMode,
  expanded,
  setExpanded,
}) => {
  const handleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <nav
      className={`border-r flex flex-col h-full ${
        expanded ? "w-1/5" : "w-20"
      } shadow-md h-screen`}
    >
      <div className="flex pt-4 px-4 justify-between">
        <img
          src={`${isNightMode ? logoWhite : logoBlack}`}
          className={`overflow-hidden transition-all h-8 ${
            expanded ? "w-28" : "w-0"
          } h-auto text-white`}
        />
        <button
          onClick={toggleNightMode}
          className={`p-1.5 rounded-lg ${
            isNightMode
              ? "bg-gray-700 hover:bg-gradient-blue hover:text-white"
              : "bg-gray-50 hover:bg-gradient-blue hover:text-white"
          } overflow-hidden transition-all ${expanded ? "block" : "hidden"}`}
        >
          {isNightMode ? <Sun /> : <Moon />}
        </button>
        <button
          className={`p-1.5 rounded-lg ${
            isNightMode
              ? "bg-gray-700 hover:bg-gradient-blue hover:text-white"
              : "bg-gray-50 hover:bg-gradient-blue hover:text-white"
          }`}
          onClick={handleExpanded}
        >
          {expanded ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>
      <div className={`flex-1 mt-6`}>
        <SidebarContext.Provider value={expanded}>
          <ul className={`flex flex-col gap-8 item-center justify-center`}>
            {children}
            <ProjectSection expanded={expanded} />
          </ul>
        </SidebarContext.Provider>
      </div>
      <div className="border-t flex p-2 items-center gap-4">
        <img src={profileAva} className="w-12 rounded-lg" />
        <div
          className={`flex justify-between transition-all overflow-hidden ${
            expanded ? "w-4/5" : "w-0"
          }`}
        >
          <div className={`flex flex-col justify-center font-black`}>
            <p className="text-xl">Koalai</p>
            <p className="text-sm text-gray-500">
              dangkhoanguyen0812@gmail.com
            </p>
          </div>
          <button
            className={`p-1.5 rounded-lg ${
              isNightMode
                ? "bg-gray-700 hover:bg-gradient-blue hover:text-white"
                : "bg-gray-50 hover:bg-gradient-blue hover:text-white"
            }`}
          >
            <MoreVertical />
          </button>
        </div>
      </div>
    </nav>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
  isNightMode: PropTypes.bool.isRequired,
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired
}
