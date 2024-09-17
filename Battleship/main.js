const flipBtn = document.querySelector(".flip-btn");
const shipOptionsContainer = document.querySelector(".ship-options-container");
const shipOptions = Array.from(shipOptionsContainer.children);
const startBtn = document.querySelector(".start-btn");
const infoDisplay = document.querySelector(".display-info");
const playerTurnDisplay = document.querySelector(".player-turn-info");

let angleFlip = 0;

// Flip button
const flip = () => {
  angleFlip = angleFlip === 0 ? 90 : 0;
  shipOptions.forEach(
    (option) => (option.style.transform = `rotate(${angleFlip}deg)`)
  );
};

flipBtn.addEventListener("click", flip);

// Game board setup
const gameContainer = document.querySelector(".game-container");
const rowNum = 10;
const colNum = 10;
const gridArr = Array.from({ length: rowNum }, () => Array(colNum).fill(null));

const board = (color, user) => {
  const gameBoard = document.createElement("div");
  gameBoard.classList.add("game-board");
  gameBoard.style.backgroundColor = color;
  gameBoard.id = user;

  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cel-${i}-${j}`;
      cell.dataset.row = i;
      cell.dataset.col = j;

      // Only add click event listeners for `#bot` cells
      if (user === "bot") {
        cell.addEventListener("click", () => {
          if (gridArr[i][j] === "clicked") {
            return;
          }
          gridArr[i][j] = "clicked";
          cell.style.backgroundColor = "red";
        });
      }

      gameBoard.append(cell);
    }
  }

  gameContainer.append(gameBoard);
};

board("yellow", "Khoa");
board("pink", "bot");

class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const ship1 = new Ship("ship1", 2);
const ship2 = new Ship("ship2", 3);
const ship3 = new Ship("ship3", 3);
const ship4 = new Ship("ship4", 4);
const ship5 = new Ship("ship5", 5);

const ships = [ship1, ship2, ship3, ship4, ship5];
let shipDragged, notDropped;

function addShip(user, ship, startId) {
  const allCell = document.querySelectorAll(`#${user} div`);

  let placed = false;

  while (!placed) {
    const randomIndexCell = Math.floor(Math.random() * rowNum * colNum);
    const findedIndexCell = Array.from(allCell).findIndex(
      (cell) => cell.id === startId
    );
    const startCell = startId ? findedIndexCell : randomIndexCell;
    let isHorizontal = user === "Khoa" ? angleFlip === 0 : Math.random() < 0.5;
    let shipBlocks = [];

    if (isHorizontal) {
      if ((startCell % colNum) + ship.length <= colNum) {
        for (let i = 0; i < ship.length; i++) {
          let block = allCell[startCell + i];
          if (block.classList.contains("occupied")) {
            shipBlocks = [];
            break;
          }
          shipBlocks.push(block);
        }
      }
    } else {
      if (startCell + ship.length * colNum < rowNum * colNum) {
        for (let i = 0; i < ship.length; i++) {
          let block = allCell[startCell + i * colNum];
          if (block.classList.contains("occupied")) {
            shipBlocks = [];
            break;
          }
          shipBlocks.push(block);
        }
      }
    }

    if (shipBlocks.length === ship.length) {
      shipBlocks.forEach((shipBlock) => {
        shipBlock.classList.add(ship.name, "occupied");
      });
      placed = true;
    } else {
      notDropped = true;
      if (startId) break;
    }
  }
}

ships.forEach((ship) => addShip("bot", ship));

shipOptions.forEach((shipOption) => {
  shipOption.addEventListener("dragstart", dragStart);
  shipOption.addEventListener("dragend", dragEnd);
});

const allUserBlock = document.querySelectorAll("#Khoa");

allUserBlock.forEach((userBlock) => {
  userBlock.addEventListener("dragover", dragOver);
  userBlock.addEventListener("drop", drop);
});

function dragStart(e) {
  shipDragged = e.target;
  console.log(shipDragged);
  notDropped = false;
}

function dragEnd() {
  shipDragged = null;
  notDropped = true;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const startId = e.target.id;
  console.log(shipDragged);
  const ship = ships[shipDragged.id];
  addShip("Khoa", ship, startId);
  if (!notDropped) {
    shipDragged.remove();
  }
}

let gameOver = false;
let playerTurn;
let playerHits = [];
let botHits = [];
let playerSunkShips = [];
let botSunkShips = [];

startBtn.addEventListener("click", startGame);
function startGame() {
  if (playerTurn === undefined) {
    if (shipOptionsContainer.children.length !== 0) {
      infoDisplay.textContent = "Please place all your ships into battle!";
    } else {
      // Add click event listeners only to the bot's board cells
      const botAllBlocks = document.querySelectorAll("#bot div");
      botAllBlocks.forEach((block) =>
        block.addEventListener("click", handleClick)
      );
      playerTurn = true;
      playerTurnDisplay.textContent = "You go first!";
      infoDisplay.textContent = "Game has started!";
    }
  }
}

function handleClick(e) {
  if (!gameOver) {
    if (e.target.classList.contains("occupied")) {
      e.target.classList.add("boom");
      let classes = Array.from(e.target.classList).filter(
        (className) => !["cell", "boom", "occupied"].includes(className)
      );
      infoDisplay.textContent = "You hit the opponent's ship";
      playerHits.push(...classes);
      checkScore("Khoa", playerHits, playerSunkShips);
    } else {
      infoDisplay.textContent = "You don't hit anything";
      e.target.classList.add("empty");
      playerTurn = false;
    }
    setTimeout(() => {
      botTurn();
    }, 1000);
  }
}

function botTurn() {
  if (!gameOver) {
    infoDisplay.textContent = "The bot is attacking";
    playerTurnDisplay.textContent = "Let the bot go!";

    setTimeout(() => {
      let randomMove;
      const allPlayerBlocks = document.querySelectorAll("#Khoa div");

      do {
        randomMove = Math.floor(Math.random() * rowNum * colNum);
      } while (
        allPlayerBlocks[randomMove].classList.contains("empty") ||
        allPlayerBlocks[randomMove].classList.contains("boom")
      );

      allPlayerBlocks[randomMove].style.backgroundColor = "red";

      if (allPlayerBlocks[randomMove].classList.contains("occupied")) {
        if (allPlayerBlocks[randomMove].classList.contains("boom")) {
          botTurn();
        } else {
          allPlayerBlocks[randomMove].classList.add("boom");
          infoDisplay.textContent = "Bot hit your ship!";

          let classes = Array.from(
            allPlayerBlocks[randomMove].classList
          ).filter(
            (className) => !["cell", "boom", "occupied"].includes(className)
          );

          botHits.push(...classes);
          checkScore("bot", botHits, botSunkShips);

          botTurn();
        }
      } else {
        infoDisplay.textContent = "Bot missed!";
        allPlayerBlocks[randomMove].classList.add("empty");

        setTimeout(() => {
          playerTurn = true;
          playerTurnDisplay.textContent = "Khoa's turn";
          infoDisplay.textContent = "Please take your shot!";
        }, 1000);
      }
    }, 1000);
  }
}

function checkScore(user, userHits, userSunkShips) {
  function checkShip(shipName, shipLength) {
    const shipCount = userHits.filter(
      (storedShip) => storedShip === shipName
    ).length;

    if (shipCount === shipLength) {
      if (user === "Khoa") {
        playerHits = playerHits.filter((storedShip) => storedShip !== shipName);
      }
      if (user === "bot") {
        botHits = botHits.filter((storedShip) => storedShip !== shipName);
      }

      infoDisplay.textContent = `The ${user}'s ${shipName} has been sunk`;
      userSunkShips.push(shipName);
    }
  }

  ships.forEach((ship) => checkShip(ship.name, ship.length));

  console.log("playerHits", playerHits);
  console.log("playerSunkShips", playerSunkShips);

  if (playerSunkShips.length === 5) {
    infoDisplay.textContent = "You have sunk all the enemy ships. You won!";
    gameOver = true;
  }
  if (botSunkShips.length === 5) {
    infoDisplay.textContent = "The enemy has sunk all your ships. You lose!";
    gameOver = true;
  }
}
