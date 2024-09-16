const flipBtn = document.querySelector(".flip-btn")
const shipOptionsContainer = document.querySelector(".ship-options-container")
const shipOptions = Array.from(shipOptionsContainer.children)
const startBtn = document.querySelector(".start-btn")
const infoDisplay = document.querySelector(".display-info")
const playerTurnDisplay = document.querySelector(".player-turn-info")

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

  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      let cell = document.createElement("div")
      cell.classList.add("cell")
      cell.id = `cel-${i}-${j}`
      cell.dataset.row = i
      cell.dataset.col = j

      cell.addEventListener("click", () => {
        if (gridArr[i][j] === "clicked") {
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
let shipDragged, notDropped

function addShip(user, ship, startId) {
  const allCell = document.querySelectorAll(`#${user} div`)

  let placed = false

  while (!placed) {
    const randomIndexCell = Math.floor(Math.random() * rowNum * colNum)
    const findedIndexCell = Array.from(allCell).findIndex(
      (cell) => cell.id === startId
    )
    const startCell = startId ? findedIndexCell : randomIndexCell
    let isHorizontal = user === "Khoa" ? angleFlip === 0 : Math.random() < 0.5
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
      notDropped = true
      if (startId) break
    }
  }
}

ships.forEach((ship) => addShip("bot", ship))

shipOptions.forEach((shipOption) => {
  shipOption.addEventListener("dragstart", dragStart)
})

const allUserBlock = document.querySelectorAll("#Khoa")

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

let gameOver = false
let playerTurn
let playerHits = []
let botHits = []

startBtn.addEventListener("click", startGame)
function startGame() {
  if (shipOptionsContainer.children.length !== 0) {
    infoDisplay.textContent = "Please place all your ship into battle!"
  } else {
    const botAllBlocks = document.querySelectorAll("#bot div")
    botAllBlocks.forEach((block) =>
      block.addEventListener("click", handleClick)
    )
  }
}

function handleClick(e) {
  if (!gameOver) {
    if (e.target.classList.contains("occupied")) {
      e.target.classList.add("boom")
      infoDisplay.textContent = "You hit the opponent's ship"
      let classes = Array.from(e.target.classList).filter(
        (className) => !["cell", "boom", "occupied"].includes(className)
      )

      playerHits.push(...classes)
      console.log(classes, playerHits)
    } else {
      infoDisplay.textContent = "You don't hit anything"
      e.target.classList.add("empty")
      playerTurn = false

      setTimeout(() => {
        botTurn()
      }, 1000)
    }
  }
}

function botTurn() {
  if (!gameOver) {

    infoDisplay.textContent = "The bot is attacking"
    playerTurnDisplay.textContent = "Let the bot go!"

    setTimeout(() => {
      let randomMove = Math.floor(Math.random() * rowNum * colNum)
      const allPlayerBlocks = document.querySelectorAll("#Khoa div")
      console.log(randomMove)
      if (
        allPlayerBlocks[randomMove].classList.contains("occupied") &&
        allPlayerBlocks[randomMove].classList.contains("boom")
      ) {
        botTurn()
        return;
      } else if (
        allPlayerBlocks[randomMove].classList.contains("occupied") &&
        !allPlayerBlocks[randomMove].classList.contains("boom")
      ) {
        allPlayerBlocks[randomMove].classList.add("boom")
        infoDisplay.textContent = "Bot hit your ship!"
        let classes = Array.from(allPlayerBlocks[randomMove].classList).filter(
          (className) => !["cell", "boom", "occupied"].includes(className)
        )
        botHits.push(...classes)
      } else {
        infoDisplay.textContent = "Bot don't hit you"
        allPlayerBlocks[randomMove].classList.add('empty')
        setTimeout(() => {
          playerTurn = true;
          playerTurnDisplay.textContent = "Khoa's turn"
          infoDisplay.textContent = "Please take your shot!"
        }, 1000)
      }
    }, 1000)
  }
}
