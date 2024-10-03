import { useState } from "react"
import { Board } from "./components/Board"
import Modal from "react-modal"

Modal.setAppElement('#root');

function App() {
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
 

  const startGame = (e) => {
   e.preventDefault()
    if (player1 && player2) {
      setGameStarted(true)
      setModalIsOpen(false)
    }
  }


  return (
    <div className="flex flex-col items-center gap-20 justify-center mt-12">
      <h1 className="text-4xl font-bold">Tic Tac Toe Game</h1>

      <Board player1={player1} player2={player2} setModalIsOpen={setModalIsOpen} />
      {!gameStarted && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="bg-white p-4 rounded shadow-lg w-1/4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <form onSubmit={startGame} className="flex flex-col gap-8 px-16 py-2">
            <h2 className="text-2xl font-bold text-center">
              Create player name
            </h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="player1">Player1:</label>
              <input
                type="text"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                className="border border-gray-300 rounded-lg focus:outline-blue-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="player2">Player2:</label>
              <input
                type="text"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                className="border border-gray-300 rounded-lg focus:outline-blue-600"
              />
              <button
                type="submit"
                className="bg-green-600 w-1/3 mx-auto mt-8 rounded-lg px-4 py-2 text-white font-bold"
              >
                Save
              </button>
            </div>
          </form>
        </Modal>
      )}
     
    </div>
  )
}

export default App
