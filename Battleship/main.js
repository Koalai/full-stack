const flipBtn = document.querySelector(".flip-btn")
const shipOptionsContainer = document.querySelector(".ship-options-container")
const shipOptions = Array.from(shipOptionsContainer.children)
let angleFlip = 0

// flip button
const flip = () => {
  angleFlip = angleFlip === 0 ? 90 : 0
  shipOptions.forEach(
    (option) => (option.style.transform = `rotate(${angleFlip}deg)`)
  )
}

flipBtn.addEventListener("click", flip)

// game board
const gameContainer = document.querySelector(".game-container")
const rowNum = 10
const colNum = 10
const gridArr = Array.from({ length: rowNum }, () => Array(colNum).fill(null))

const board = (color, user) => {
  const gameBoard = document.createElement("div")
  gameBoard.classList.add("game-board")
  gameBoard.style.backgroundColor = color
  gameBoard.id = user

  for (let i = 1; i <= rowNum; i++) {
    for (let j = 1; j <= colNum; j++) {
      let cell = document.createElement("div")
      cell.classList.add("cell")
      cell.id = `cel-${i}-${j}`
      cell.dataset.row = i
      cell.dataset.col = j

      cell.addEventListener("click", () => {
        if (gridArr[i][j] === "clicked") {
          console.log("Hi")
        }
        gridArr[i][j] = "clicked"
        cell.style.backgroundColor = "red"
      })

      gameBoard.append(cell)
    }
  }

  gameContainer.append(gameBoard)
}

board("yellow", "Khoa")
board("pink", "bot")

class Ship {
  constructor(name, length) {
    this.name = name
    this.length = length
  }
}

const ship1 = new Ship("ship1", 2)
const ship2 = new Ship("ship2", 3)
const ship3 = new Ship("ship3", 3)
const ship4 = new Ship("ship4", 4)
const ship5 = new Ship("ship5", 5)

const ships = [ship1, ship2, ship3, ship4, ship5]


function addShip(user, ship, startId) {
  const allCell = document.querySelectorAll(`#${user} div`)

  let placed = false

  while (!placed) {
    const randomIndexCell= Math.floor(Math.random() * rowNum * colNum)
    const findedIndexCell = Array.from(allCell).findIndex(cell => cell.id === startId)
    const startCell = startId ? findedIndexCell : randomIndexCell
    let isHorizontal = user === 'Khoa' ? angleFlip === 0 : Math.random() < 0.5
    let shipBlocks = []

    if (isHorizontal) {
      // Ensure the ship fits in the row
      if ((startCell % colNum) + ship.length <= colNum) {
        for (let i = 0; i < ship.length; i++) {
          let block = allCell[startCell + i]
          if (block.classList.contains("occupied")) {
            shipBlocks = []
            break // If any block is occupied, stop the placement
          }
          shipBlocks.push(block)
        }
      }
    } else {
      // Ensure the ship fits in the column
      if (startCell + ship.length * colNum < rowNum * colNum) {
        for (let i = 0; i < ship.length; i++) {
          let block = allCell[startCell + i * colNum]
          if (block.classList.contains("occupied")) {
            shipBlocks = []
            break // If any block is occupied, stop the placement
          }
          shipBlocks.push(block)
        }
      }
    }

    // If the ship was successfully placed, mark blocks as occupied
    if (shipBlocks.length === ship.length) {
      shipBlocks.forEach((shipBlock) => {
        shipBlock.classList.add(ship.name, "occupied")
      })
      placed = true // Ship successfully placed
    } else {
      if (startId) break;
    }
  }
}

ships.forEach((ship) => addShip('bot', ship))

shipOptions.forEach((shipOption) => {
  shipOption.addEventListener("dragstart", dragStart)
})

const allUserBlock = document.querySelectorAll("#Khoa")
let shipDragged, notDropped


allUserBlock.forEach((userBlock) => {
  userBlock.addEventListener("dragover", dragOver)
  userBlock.addEventListener("drop", drop)
})

function dragStart(e) {
  shipDragged = e.target
  notDropped = false
}

function dragOver(e) {
  e.preventDefault()
}

function drop(e) {
  e.preventDefault()
  const startId = e.target.id
  const ship = ships[shipDragged.id]
  addShip("Khoa", ship, startId)
  if (!notDropped) {
    shipDragged.remove()
  }
}
