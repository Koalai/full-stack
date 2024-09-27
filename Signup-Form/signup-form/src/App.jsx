import { Main } from "./components/Main"
import { Sidebar } from "./components/Sidebar"



function App() {
  return (
    <div className="flex w-5/6 mx-auto bg-white font-mono">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
