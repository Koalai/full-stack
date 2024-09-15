const flipBtn = document.querySelector(".flip-btn")
const shipOptionsContainer = document.querySelector(".ship-options-container")
const gameContainer = document.querySelector(".game-container")
let angleFlip = 0

const flip = () => {
  angleFlip = angleFlip === 0 ? 90 : 0
  // console.log(shipOptionsContainer.children)
  const shipOptionsArr = Array.from(shipOptionsContainer.children)
  shipOptionsArr.forEach(
    (option) => (option.style.transform = `rotate(${angleFlip}deg)`)
  )
}

const rowNum = 10
const colNum = 10
const gridArr = Array.from({ length: rowNum }, () => Array(colNum).fill(null))

const board = (color) => {
  const gameBoard = document.createElement("div")
  gameBoard.classList.add("game-board")
  gameBoard.style.backgroundColor = color

  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      let cell = document.createElement("div")
      cell.classList.add("cell")
      cell.dataset.row = i
      cell.dataset.col = j

      cell.addEventListener("click", () => {
        if (gridArr[i][j] === "clicked") {
          console.log("Hi")
        }
        gridArr[i][j] = "clicked"

        console.log(cell)
        cell.style.backgroundColor = "red"
      })

      gameBoard.append(cell)
    }
  }

  gameContainer.append(gameBoard)
}

board("yellow")
board("pink")

flipBtn.addEventListener("click", flip)
