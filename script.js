const board = document.querySelector(".tic-tac-toe-board");
const turn = document.querySelector('.turn');
const result = document.querySelector('.result');
const btn = document.querySelector('button');

const player1 = ['X', 'O'][parseInt(Math.random() * 2)];
const player2 = player1 === 'X' ? 'O' : 'X';
const players = document.querySelector('.players');
const [playerElement1, playerElement2] = Array.from(players.children);

playerElement1.textContent += player1;
playerElement2.textContent += player2;

const cells = Array.from(board.children);
let temp = 1;
turn.textContent = "Turn for " + (temp % 2 ? "Player1" : "Player2");

const winningPossibilities = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [3, 5, 7],
];
const winningArrayForPlayer1 = [];
const winningArrayForPlayer2 = [];

const checkForWin = (temp1, p) =>{
    let res = null;
    if(p === player1){
        winningArrayForPlayer1.push(temp1);
        res = winningPossibilities.some(subArr => subArr.every(el => winningArrayForPlayer1.includes(el)));
    }else{
        winningArrayForPlayer2.push(temp1)
        res = winningPossibilities.some(subArr => subArr.every(el => winningArrayForPlayer2.includes(el)));
    }
    return res;
}

const showResultSetting = () =>{
    board.innerHTML = '';
    turn.innerHTML = '';
    board.style.boxShadow = 'none';
    players.innerHTML = '';
}

cells.forEach((cell, index) =>{
    cell.addEventListener('click', () =>{
        if(!cell.textContent){
            cell.textContent = temp % 2 ? player1 : player2;
            cell.style.backgroundColor = '#f7f7f7';
            turn.textContent = "Turn for " + (temp % 2 ? "Player2" : "Player1");
            if(checkForWin(index + 1, temp, temp % 2 ? player1 : player2)){
                result.textContent = (temp % 2 ? "Player1" : "Player2") + ' Won';
                showResultSetting();
                return;
            }
            temp += 1;
            if(temp > 9){
                result.textContent = "Game Draw";
                showResultSetting();
                return;
            }
        }
    })
})

btn.addEventListener('click', () =>{
    window.location.reload();
})