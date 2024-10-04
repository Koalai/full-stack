import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"

function App() {


  return (
    <div className="font-mono w-full h-full flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
