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

}
function updateCell(cell, index) {
}

function changePlayer() {
}

function checkWinner() {
}

function restartGame() {

}