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
function checkWinner() {

}

function restartGame() {

}