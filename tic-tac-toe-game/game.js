const cells = document.querySelectorAll(".cells");
const textStatus = document.querySelector('#player-status-turn');
const restartBtn = document.querySelector("#restart-btn");

let holder = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameRunning = false;
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

initializationGame()

function initializationGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restartBtn.addEventListener('click', restartGame);
    textStatus.textContent = `It's ${currentPlayer}'s turn !`
    gameRunning = true;
}
   
function cellClicked() {
    let cellIndex = this.getAttribute('Data-index');

    if (holder[cellIndex] !== "" || !gameRunning) {
        return;
    }
    // I want everytime i clicked, it always 
    // update the cell and check if there is a winner of not.
    // So i call 2 of it
    // this toggle to the cell, because cell has call it in the line 22,
    // and the cellIndex toggle to the index of cell
    updateCell(this, cellIndex);
    checkWinner()
}
function updateCell(cell, index) {
    holder[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    textStatus.textContent = `It's ${currentPlayer}'s turn !`
}
function checkWinner() {
    let gameOver = false;
    for (let i = 0; i < winConditions.length; i++) {
        // loop through the winConditions and check for each case
        let condition = winConditions[i]
        // check between the holder and the condition to see if they match
        let cellA = holder[condition[0]]
        let cellB = holder[condition[1]]
        let cellC = holder[condition[2]]
        
        // if one of three still a empty string, then continue
        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        // if they equal, set the gameOver to true and break the loop
        if (cellA === cellB && cellB === cellC) {
            gameOver = true;
            break;
        }
    }
    // if game over, we want to display the the winner,
    // turn off the game
    // check if there is a draw or not
    // if dont just continue the game
    if (gameOver) {
        textStatus.textContent = `The winner is ${currentPlayer}`
        gameRunning = false
    } else if (!holder.includes("")) {
        textStatus.textContent = `We have a draw !`
        gameRunning= false
    }else {
        changePlayer();
   }
}
function restartGame() {
    holder = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    textStatus.textContent = `It's ${currentPlayer}'s turn !`
    cells.forEach(cell => cell.textContent = "")
}