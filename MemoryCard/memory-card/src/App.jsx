import { useState } from "react"
import "./App.css"
import { Score } from "./components/Score"
import { CardContainer } from "./components/cardContainer"

function App() {
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  
  return (
    <>
      <div className="game-container">
        <div className="header">
          <div className="welcome">
            <h1>Memory Game</h1>
            <p>Do not click the same image twice!</p>
          </div>
          <div className="score">
            <Score score={score} best={best} />
          </div>
        </div>
        <CardContainer
          score={score}
          setScore={setScore}
          best={best}
          setBest={setBest}
        />
      </div>
    </>
  )
}

export default App
