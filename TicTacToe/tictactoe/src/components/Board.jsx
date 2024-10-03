import { useEffect, useState } from "react"
import Square from "./Square"

export const Board = ({player1, player2}) => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)



    
  const handleClick = (index) => {
    if (squares[index] || checkWinner(squares)) {
      return
    }
    const newBoard = squares.slice()
    newBoard[index] = xTurn ? "X" : "O"
    setSquares(newBoard)
    setXTurn(!xTurn)
  }

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
      if (squares.every(square => square !== null)){
          return "Draw"
      }
    return null
  }



  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 w-72 h-72">
        {squares.map((value, index) => {
          return (
            <Square
              key={index}
              value={value}
              handleClick={() => handleClick(index)}
            />
          )
        })}
          </div>
          <div className="flex gap-8 justify-center mr-4">
        <button
          onClick={() => setModalIsOpen(true)}
          className="bg-blue-500 rounded-lg px-4 py-2 font-bold text-white text-xl hover:bg-blue-600"
        >
          Start Game
        </button>
        <button
          onClick={resetGame}
          className="bg-red-600 rounded-lg px-4 py-2 font-bold text-white text-xl hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
