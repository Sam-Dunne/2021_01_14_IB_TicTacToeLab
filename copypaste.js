let cells = document.querySelectorAll('.row>div');
let turn = 0;


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(event) {
    if (turn % 2 == 0) {
        event.target.textContent = 'X';
    } else {
        event.target.textContent = 'O';
    }
    turn++;
    //  X wins horizontal
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
        console.log('Winner');
    } else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
        console.log('Winner');
    } else if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
        console.log('Winner');
        //  X wins Vertical
    } else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        console.log('Winner');
    } else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        console.log('Winner');
    } else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        console.log('Winner');
        //  X wins Diagonal
    } else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        console.log('Winner');
    } else if (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
        console.log('Winner');
        // O wins horizontal
    } else if (cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent === 'O') {
        console.log('Winner');
    } else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        console.log('Winner');
    } else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('Winner');
        //  O wins Vertical
    } else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        console.log('Winner');
    } else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        console.log('Winner');
    } else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('Winner');
        //  O wins Diagonal
    } else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('Winner');
    } else if (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
        console.log('Winner');
    } else if (turn == 9) {
        console.log('Draw');
    }

}  


//// Try 3
let cells = document.querySelectorAll('.row>div');
let turn = 1;
let gameOver = false;
let tieGame = false;
let oWins = false;
let xWins = false;



for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

//  Assigns 'X' to odd # events and 'O' to even # events
function cellClicked(event) {
    //somewhere in here add a check to see if the clicked cell is empty before changing the contents
    turn++;

    if (!gameOver) {
        if (turn % 2 == 0) {
            event.target.textContent = 'X';
        } else if (turn % 2 == 1) {
            event.target.textContent = 'O';
        }
        winCheck();

    }
}

//  Conditions to determine if winner is Player X or Player O from conditions set in function winCheck
function declareWinnerFunc() {
    if (xWins && gameOver) {
        console.log('Winner is X');
    } else {
        if (oWins && gameOver) {
            console.log('Winner is O');
        }
    }
}

//  Declares a draw from conditions set in function winCheck()
function tieFunc() {
    console.log('It\'s a draw')
}

//  
function winCheck() {

    //  X wins horizontal
    if ((cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X')
        || (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X')
        || (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X')
        ||
        //  X wins Vertical
        (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X')
        || (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X')
        || (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X')
        //  X wins Diagonal
        || (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X')
        || (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X')) {
        xWins = true;
        gameOver = true;
        declareWinnerFunc()
    } else if
        // O wins horizontal
        ((cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O')
        || (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O')
        || (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O')
        //  O wins Vertical
        || (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O')
        || (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O')
        || (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O')
        //  O wins Diagonal
        || (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O')
        || (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O')) {
        oWins = true;
        gameOver = true
        declareWinnerFunc()
    } else {
        if (turn === 10 && gameOver === false) {
            tieGame = true
            tieFunc()
        }
    }
}





 // if (win === true){
    //     console.log('Winner');
    // } else if (win === false) {
    //     console.log('Draw');
    // } 
//  Draw Condition
    // } else if (turn == 9) {
    //     winOrDraw();
    // } else if (turn == 10) {
    //     console.log('Reset')
    // }
// let gameOver = " ";
// function winOrDraw(gameOver) {
//     if (gameOver)
// }

// if (cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') {
//     console.log('Winner');
// } else if (cells[3].textContent && cells[4].textContent && cells[5].textContent === 'X') {
//     console.log('Winner');
// }




 

// cells[0].textcontent

// if else -toggle player

// if (conditionOne && conditionTwo) {}
;ojsshg;ldfl;skjsdfshavfvdflsaf;hdflsh;akhf;




// stolen but appended


let cells = document.querySelectorAll('.row>div');
let h2 = document.querySelector('h2');
let gameOver = false;

let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function checkPlayerTurn(squares) {
    let num_x = 0;
    let num_o = 0;
    for (i = 0; i < squares.length; i++) {
        if (squares[i].textContent == 'X') {
            num_x ++
        }   else if (squares[i].textContent == 'O') {
            num_o ++
        }
    }
    if (num_x == num_o) {
        return 'X';
    }   else {
        return 'O';
    }
}

function checkWinConditions() {
    
    for (i=0; i < winConditions.length; i++) {
        oFreq = 0;
        xFreq = 0;
        for (j=0; j < winConditions[i].length; j++) {
            if (cells[winConditions[i][j]].textContent == 'X') {
                xFreq++;
            } else if (cells[winConditions[i][j]].textContent == 'O') {
                oFreq++;
            }
        }

        if (xFreq == 3) {
            h2.textContent = "X wins!";
            return true;
        }   else if (oFreq == 3) {
            h2.textContent = "O Wins!";
            return true;
        }  else {

        }
    }
    return false;
}

function checkForTie() {
    let cellsPopulated = 0;
    for (x = 0; x < cells.length; x++) {
        if (cells[x].textContent == 'X' || cells[x].textContent == 'O') {
            cellsPopulated++;
            
        }
    }

    if (cellsPopulated == 9) {
        h2.textContent = "It's a tie!";
        return true;
    } else {
        return false;
    } 
}

function clearBoard() {
    for (i=0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}


function cellClicked(erase) {
    if (gameOver == true) {
        clearBoard();
        gameOver = false;
        h2.textContent = " ";
        return;
    }
    let squareInputValue = checkPlayerTurn(cells);
    if (erase.target.textContent != '') {
        h2.textContent = "That square is already taken!";
    } else {
        erase.target.textContent = squareInputValue;
        h2.textContent = "";
    }

    console.log(gameOver);

    gameOver = checkWinConditions();
    if (gameOver == false) {
        gameOver = checkForTie();
    }
    console.log(gameOver);
    
}


