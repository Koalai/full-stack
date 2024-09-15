const flipBtn = document.querySelector('.flip-btn');
const shipOptionsContainer = document.querySelector('.ship-options-container');
let angleFlip = 0;

// flip button
const flip = () => {
  angleFlip = angleFlip === 0 ? 90 : 0;
  // console.log(shipOptionsContainer.children)
  const shipOptionsArr = Array.from(shipOptionsContainer.children);
  shipOptionsArr.forEach(
    (option) => (option.style.transform = `rotate(${angleFlip}deg)`)
  );
};

flipBtn.addEventListener('click', flip);

// game board
const gameContainer = document.querySelector('.game-container');
const rowNum = 10;
const colNum = 10;
const gridArr = Array.from({ length: rowNum }, () => Array(colNum).fill(null));

const board = (color, user) => {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('game-board');
  gameBoard.style.backgroundColor = color;

  for (let i = 1; i <= rowNum; i++) {
    for (let j = 1; j <= colNum; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = user;
      cell.dataset.row = i;
      cell.dataset.col = j;

      cell.addEventListener('click', () => {
        if (gridArr[i][j] === 'clicked') {
          console.log('Hi');
        }
        gridArr[i][j] = 'clicked';

        console.log(cell);
        cell.style.backgroundColor = 'red';
      });

      gameBoard.append(cell);
    }
  }

  gameContainer.append(gameBoard);
};

board('yellow', 'Khoa');
board('pink', 'bot');

class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const ship1 = new Ship('ship1', 2);
const ship2 = new Ship('ship2', 3);
const ship3 = new Ship('ship3', 3);
const ship4 = new Ship('ship4', 4);
const ship5 = new Ship('ship5', 5);

const shipContainer = [ship1, ship2, ship3, ship4, ship5];

function addShip(ship) {
  const allCell = document.querySelectorAll('#bot');
  let placed = false;

  while (!placed) {
    const randomCell = Math.floor(Math.random() * rowNum * colNum);
    let isHorizontal = Math.random() < 0.5;
    let shipBlocks = [];

    if (isHorizontal) {
      // Ensure the ship fits in the row
      if ((randomCell % colNum) + ship.length <= colNum) {
        for (let i = 0; i < ship.length; i++) {
          let block = allCell[randomCell + i];
          if (block.classList.contains('occupied')) {
            shipBlocks = [];
            break; // If any block is occupied, stop the placement
          }
          shipBlocks.push(block);
        }
      }
    } else {
      // Ensure the ship fits in the column
      if (randomCell + ship.length * colNum < rowNum * colNum) {
        for (let i = 0; i < ship.length; i++) {
          let block = allCell[randomCell + i * colNum];
          if (block.classList.contains('occupied')) {
            shipBlocks = [];
            break; // If any block is occupied, stop the placement
          }
          shipBlocks.push(block);
        }
      }
    }

    // If the ship was successfully placed, mark blocks as occupied
    if (shipBlocks.length === ship.length) {
      shipBlocks.forEach((shipBlock) => {
        shipBlock.classList.add(ship.name, 'occupied');
      });
      placed = true; // Ship successfully placed
    }
  }
}

addShip(ship5);
addShip(ship1);
addShip(ship4);
addShip(ship3);
addShip(ship2);
