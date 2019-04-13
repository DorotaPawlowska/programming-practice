var orgBoard;
const humanPlayer = 'O';
const aiPlayer = 'X';
const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

const cells = document.querySelectorAll('.cell');
const restarBtn = document.querySelector('#replay');

const emptySquares = () => {
    return orgBoard.filter(s => typeof s == 'number');
}

const declareWinner = (who) => {
    document.querySelector('.endgame').style.display = 'block';
    document.querySelector('.endgame .text').textContent = who;
}

const checkTie = () => {
    if(emptySquares().length == 0){
        cells.forEach(cell => {
            cell.style.backgroundColor = 'green';
            cell.removeEventListener('click', turnClick, false);
        });
        declareWinner("Tie Game!");
        return true;
    }
    return false;
}

const bestSpot = () => {
    return emptySquares()[0];
}

const gameOver = (gameWon) => {
    for(let index of winCombinations[gameWon.index]){
        document.getElementById(index).style.backgroundColor = gameWon.player == humanPlayer ? 'blue' : 'red';
    }
    cells.forEach(cell => {
        cell.removeEventListener('click', turnClick, false);
    });
    declareWinner(gameWon.player == humanPlayer ? "You Win!" : "You lose.");
}

const checkWin = (board, player) => {
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for(let [index, win] of winCombinations.entries()){
        if(win.every(elem => plays.indexOf(elem) > -1)){
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

const turn = (sqId, player) => {
    orgBoard[sqId] = player;
    document.getElementById(sqId).textContent = player;
    let gameWon = checkWin(orgBoard, player);
    if(gameWon) gameOver(gameWon);
}

const turnClick = (square) => {
    // console.log(e.target.id);
    if(typeof orgBoard[square.target.id] == 'number'){
        turn(square.target.id, humanPlayer);
        if(!checkTie()) turn(bestSpot(), aiPlayer);
    }

}

const startGame = () => {
    document.querySelector('.endgame').style.display = 'none';
    orgBoard = Array.from(Array(9).keys());
    // console.log(orgBoard);
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.removeProperty('background-color');
        cell.addEventListener('click', turnClick, false);
    })
}

restarBtn.addEventListener('click', startGame);

startGame();
