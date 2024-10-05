import "./App.css"
import { useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { SidebarItems } from "./components/SidebarItems"
import {
  House,
  CalendarCheck,
  CalendarDays,
  Settings,
  CircleHelp,
  SquareChartGantt,
} from "lucide-react"

function App() {
  const [isNightMode, setIsNightMode] = useState(false)

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode)
  }
  return (
    <div
      className={`App ${
        isNightMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar toggleNightMode={toggleNightMode} isNightMode={isNightMode}>
        <SidebarItems icon={<House size={40} />} text="Home" />
        <SidebarItems icon={<CalendarCheck size={40} />} text="Today" />
        <SidebarItems icon={<CalendarDays size={40} />} text="This Week" />
        <hr className="w-full" />
        <div className="flex flex-col justify-center ">
          <SidebarItems icon={<SquareChartGantt size={40} />} text="Project" />
        </div>
        <hr className="w-full" />
        <SidebarItems icon={<Settings size={40} />} text="Settings" />
        <SidebarItems icon={<CircleHelp size={40} />} text="Help" />
      </Sidebar>
    </div>
  )
}

export default App
