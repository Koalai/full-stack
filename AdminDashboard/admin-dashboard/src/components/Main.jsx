import { Header } from "./Header"
import { Content } from "./Content"


export const Main = () => {
  return (
    <div className="h-full w-4/5 flex flex-col">
          <Header />
          <Content />
    </div>
  )
}
