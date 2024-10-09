import "./App.css"
import { useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { SidebarItems } from "./components/SidebarItems"
import { House, CalendarCheck, CalendarDays } from "lucide-react"
import { Main } from "./components/Main"
import { ProjectsProvider } from "./components/ProjectsProvider"

function App() {
  const [isNightMode, setIsNightMode] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode)
  }

  return (
    <div
      className={` App ${
        isNightMode ? "bg-gray-800 text-white" : "bg-white text-slate-600"
      } flex`}
    >
      <ProjectsProvider>
        <Sidebar
          toggleNightMode={toggleNightMode}
          isNightMode={isNightMode}
          expanded={expanded}
          setExpanded={setExpanded}
        >
          <SidebarItems icon={<House size={40} />} text="All Task" />
          <SidebarItems icon={<CalendarCheck size={40} />} text="Today" />
          <SidebarItems icon={<CalendarDays size={40} />} text="This Week" />
          <hr className="w-full" />
        </Sidebar>
        <Main expanded={expanded} />
      </ProjectsProvider>
    </div>
  )
}

export default App
