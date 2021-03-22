
let cells = document.querySelectorAll('.row>div');
let turn = 0;
let gameOver = false;
let tieGame = false;
let oWins = false;
let xWins = false;
//  Creates h2 Element
let h2 = document.createElement('h2');
//  modifies h2 element
let msgGameOver = document.createTextNode('');
// styles created h2 element
h2.style.color = 'red';
h2.style.className = "msgGameState";
h2.style.textAlign = "center";
h2.style.height = "3rem";

h2.appendChild(msgGameOver);
document.body.appendChild(h2);

// adds event listener to html button to refresh page when clicked
let resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetClicked);
function resetClicked(e){
  location.reload();
}

document.getElementById("Reset-Button").style.visibility='hidden';
 




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
      h2.innerText = 'X done gave it to Ya !!!';
      setTimeout(function() {
      document.getElementById("Reset-Button").style.visibility='visible';
      }, 800);
    } else {
      h2.innerText = 'O is the Winner!!!';
      setTimeout(function() {
        document.getElementById("Reset-Button").style.visibility='visible';
      }, 800);
    }
  }

  //  Declares a draw from conditions set in function winCheck()
  function tieFunc() {
    h2.innerText = "It\'s a Draw";
    setTimeout(function() {
      document.getElementById("Reset-Button").style.visibility='visible';
    }, 800);
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
     
