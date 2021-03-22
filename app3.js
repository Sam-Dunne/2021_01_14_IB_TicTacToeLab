//// Try 4
let cells = document.querySelectorAll('.row>div');
let reLoad = document.getElementById('board');
let turn = 0;
let gameOver = false;
let tieGame = false;
let oWins = false;
let xWins = false;
let msgGame = false
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}



//  Assigns 'X' to odd # events and 'O' to even # events
function cellClicked(event) {
// increments turn argument, only if cell has no content & gameOver is found true
if (event.target.textContent == '' && !gameOver) {
  turn++;
  //click places 'X' in cell
  if (turn % 2 == 0) {
    event.target.textContent = 'O';
   //click places 'X' in cell 
  } else if (turn % 2 == 1) {
    event.target.textContent = 'X';
  }
  // calls winCheck function after each players turn
  winCheck();
  
}
// if function winCheck evaluates both xWins and gameOver arguments as true,
// timeout delays alert until DOM painted. 
//  ? "" : location.reload(); reloads the page when alerts 'ok' is clicked
function declareWinnerFunc() {
  if (xWins && gameOver) {
      setTimeout(function() {
        alert('X is the Winner') ? '' : location.reload();
      }, 100);
  } else if (oWins && gameOver) {
    setTimeout(function() {
      alert('O is the Winner') ? '' : location.reload();
    }, 100);
  }
  
}

//  Declares a draw from conditions set in function winCheck()
function tieFunc() {
  setTimeout(function()  {
    alert('It\'s a Draw') ? '' : location.reload();
  }, 100);
}

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
      if (turn === 9 && gameOver === false) {
          tieGame = true
          tieFunc()
      }
  }
}

}

// // if function winCheck evaluates both xWins and gameOver arguments as true,
// // timeout delays alert until DOM painted. 
// //  ? "" : location.reload(); reloads the page when alerts 'ok' is clicked
// function declareWinnerFunc() {
//   if (xWins && gameOver) {
//       setTimeout(function() {
//         alert('X is the Winner') ? "" : location.reload();
//       }, 100);
//   } else {
//     setTimeout(function() {
//       alert('O is the Winner') ? "" : location.reload();
//     }, 100);
//   }
// }

// //  Declares a draw from conditions set in function winCheck()
// function tieFunc() {
//   setTimeout(function()  {
//     alert('It\'s a Draw') ? "" : location.reload();
//   }, 100);
// }

// function winCheck() {

//   //  X wins horizontal
//   if ((cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X')
//       || (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X')
//       || (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X')
//       ||
//       //  X wins Vertical
//       (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X')
//       || (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X')
//       || (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X')
//       //  X wins Diagonal
//       || (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X')
//       || (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X')) {
//       xWins = true;
//       gameOver = true;
//       declareWinnerFunc()
//   } else if
//       // O wins horizontal
//       ((cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O')
//       || (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O')
//       || (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O')
//       //  O wins Vertical
//       || (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O')
//       || (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O')
//       || (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O')
//       //  O wins Diagonal
//       || (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O')
//       || (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O')) {
//       oWins = true;
//       gameOver = true
//       declareWinnerFunc()
//   } else {
//       if (turn === 9 && gameOver === false) {
//           tieGame = true
//           tieFunc()
//       }
//   }
// }



// function incTurn(turn) {
//   turn++;
//   console.log();
// }
// incTurn();
// take turns
// while (turn < 9) {
//   turn++;
//   console.log(turn);
//   if (turn === 1 || 3 || 5 || 7 || 9) {
//     event.target.textContent == 'x';
//   } else if (turn === 2 || 4 || 6 || 8) {
//     event.target.textContent == 'o';
//   }
// }


// win condition

// ?cell empty?                       
