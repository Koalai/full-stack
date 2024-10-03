import { useEffect, useState } from "react"
import Square from "./Square"
import PropTypes from "prop-types"

const checkWinner = (squares, player1, player2) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a] === "X" ? player1 : player2
    }
  }

  if (squares.every((square) => square !== null)) {
    return "Draw" // Nếu không còn ô trống
  }
  return null // Không có người thắng
}

export const Board = ({ player1, player2, setModalIsOpen }) => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)
  const [gameResult, setGameResult] = useState("")

  useEffect(() => {
    const result = checkWinner(squares, player1, player2)

    if (result) {
      setGameResult(result)
    }
  }, [player1, player2, squares])

  const handleClick = (index) => {
    if (!player1 || !player2) {
      alert("Please enter names for both player1 and player2")
      return
    }

    if (squares[index] || gameResult) {
      return
    }
    const newBoard = squares.slice()
    newBoard[index] = xTurn ? "X" : "O"
    setSquares(newBoard)
    setXTurn(!xTurn)
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setXTurn(true)
    setGameResult("")
  }

  return (
    <div className="flex flex-col">
      <div className="font-bold text-xl mb-4 text-center">
        {gameResult ? (
          <h2>
            {gameResult === "Draw" ? "It's a draw game" : `${gameResult} Wins!`}
          </h2>
        ) : (
          <h2>
            {`Current Turn: ${xTurn ? player1 : player2} (${
              xTurn ? "X" : "O"
            })`}
          </h2>
        )}
      </div>
      <div className="grid grid-cols-3 w-72 h-72">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="flex gap-8 justify-center mr-4 mt-8">
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


Board.propTypes = {
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
  setModalIsOpen: PropTypes.func.isRequired
}