import React, {useState, useEffect} from 'react';
import './App.css'

/*
let isPlayerTurn = true
let board = new Array(7).fill(0).map(() => new Array())
let lastDroppedToken;

let tokenValue = (isPlayerTurn) ? 'X' : 'O'

function dropToken(column) {
  board[column].push(tokenValue);
  lastDroppedToken = [column, board[column].length - 1]
}

function changePlayerTurn() {
  isPlayerTurn = !isPlayerTurn
  tokenValue = (isPlayerTurn) ? 'X' : 'O'
}

function checkGameState() {
  let column = lastDroppedToken[0];
  let row = lastDroppedToken[1]
  
  let currentTokenValue = board[column][row]
  
  let verticalCount = 1;
  let horizontalCount = 1;
  let ULdiagonalCount = 1;
  let URdiagonalCount = 1;

  function tokenInBounds(column, row) {
    return (column >= 0) && (column <= 6) && (row >= 0) && (row <= 6)
  }
  
  // check vertical win
  for (let i = 1; i <= 4; i++) {
    if (tokenInBounds(column, row - i) && board[column][row - i] === currentTokenValue) {
      verticalCount++
    }
  }
  
  if (verticalCount === 4) {
    console.log('win from verticalCount')
  }

  // check horizontal win
  for (let i = 1; i <= 4; i++) {
    if (tokenInBounds(column - i, row) && board[column - i][row] === currentTokenValue) {
      horizontalCount++
    }

    if (tokenInBounds(column + i, row) && board[column + i][row] === currentTokenValue) {
      horizontalCount++
    }
  }
  
  if (horizontalCount === 4) {
    console.log("win from horizontalCount");
  }

  // check diagonal win
  for (let i = 1; i <= 4; i++) {
    // UR diagonal
    if (tokenInBounds(column + i, row + i) && board[column + i][row + i] === currentTokenValue) {
      URdiagonalCount++;
    }
    // LL diagonal
    if (tokenInBounds(column - i, row - i) && board[column - i][row - i] === currentTokenValue) {
      URdiagonalCount++;
    }

    // UL diagonal
    if (tokenInBounds(column + i, row - i) && board[column + i][row - i] === currentTokenValue) {
      ULdiagonalCount++;
    }
    // LR diagonal
    if (tokenInBounds(column - i, row + i) && board[column - i][row + i] === currentTokenValue) {
      ULdiagonalCount++;
    }
  }

  if (URdiagonalCount === 4 || ULdiagonalCount === 4) {
    console.log("win from diagonal");
  }

  if (board.every((stack) => stack.length >= 7)) {
    console.log('game is tied')
  }
}

function selectColumn(column) {
  if (board[column].length < 7) {
    dropToken(column)
    changePlayerTurn()
    checkGameState()
  } else {
    alert("That column is full!");
  }
}

*/

function App() {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [board, setBoard] = useState(new Array(7).fill(0).map(() => new Array()))
  const [lastDroppedToken, setLastDroppedToken] = useState();

  let tokenValue = (isPlayerTurn) ? 'X' : 'O'

  function dropToken(column) {
    board[column].push(tokenValue);
    setLastDroppedToken([column, board[column].length - 1])
  }
  
  function changePlayerTurn() {
    setIsPlayerTurn(!isPlayerTurn)
  }
  
  function checkGameState() {
    let column = lastDroppedToken[0];
    let row = lastDroppedToken[1]
    
    let currentTokenValue = board[column][row]
    
    let verticalCount = 1;
    let horizontalCount = 1;
    let ULdiagonalCount = 1;
    let URdiagonalCount = 1;

    function tokenInBounds(column, row) {
      return (column >= 0) && (column <= 6) && (row >= 0) && (row <= 6)
    }
    
    // check vertical win
    for (let i = 1; i <= 4; i++) {
      if (tokenInBounds(column, row - i) && board[column][row - i] === currentTokenValue) {
        verticalCount++
      }
    }
    
    if (verticalCount === 4) {
      alert('win from verticalCount')
    }

    // check horizontal win
    for (let i = 1; i <= 4; i++) {
      if (tokenInBounds(column - i, row) && board[column - i][row] === currentTokenValue) {
        horizontalCount++
      }

      if (tokenInBounds(column + i, row) && board[column + i][row] === currentTokenValue) {
        horizontalCount++
      }
    }
    
    if (horizontalCount === 4) {
      alert("win from horizontalCount");
    }

    // check diagonal win
    for (let i = 1; i <= 4; i++) {
      // UR diagonal
      if (tokenInBounds(column + i, row + i) && board[column + i][row + i] === currentTokenValue) {
        URdiagonalCount++;
      }
      // LL diagonal
      if (tokenInBounds(column - i, row - i) && board[column - i][row - i] === currentTokenValue) {
        URdiagonalCount++;
      }

      // UL diagonal
      if (tokenInBounds(column + i, row - i) && board[column + i][row - i] === currentTokenValue) {
        ULdiagonalCount++;
      }
      // LR diagonal
      if (tokenInBounds(column - i, row + i) && board[column - i][row + i] === currentTokenValue) {
        ULdiagonalCount++;
      }
    }

    if (URdiagonalCount === 4 || ULdiagonalCount === 4) {
      alert("win from diagonal");
    }

    if (board.every((stack) => stack.length >= 7)) {
      alert('game is tied')
    }
  }
  
  function selectColumn(column) {
    if (board[column].length < 7) {
      dropToken(column)
      changePlayerTurn()
      checkGameState()
    } else {
      alert("That column is full!");
    }
  }
  
  return (
    <div>
      <div className="board">
        {
          board.map((stack, idx) => {
            const newStack = [...stack]

            for (let i = 0; i < 7 - stack.length; i++) {
              newStack.push(null)
            }

            return newStack.map((value, idx) => {
              console.log('test')
              return (<div key={idx} className="square">hello</div>)
            })
          })
        }
      </div>
    </div>
  )
}

export default App