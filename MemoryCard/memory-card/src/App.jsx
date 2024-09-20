import { useState } from "react"
import "./App.css"

import { CardContainer } from "./components/cardContainer"

function App() {
  return (
    <>
      <div className="game-container">
        <div className="header">
          <div className="welcome">
            <h1>Memory Game</h1>
            <p>Do not click the same image twice!</p>
          </div>
          <div className="score">
   
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
