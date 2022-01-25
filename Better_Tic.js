function getBoardString(gameBoard) {
  let BoardString = "";

  for (let i = 0; i < gameBoard.length; i += 1) {
    // `BoardString += `${gameBoard[i] === null ? i + 1 : gameBoard[i]}${same thing}${same thing}`
    //   BoardString += `${gameBoard[i] ?? i + 1}
    //                   ${gameBoard[i + 1] ?? i + 2}
    //                   ${gameBoard[i + 2] ?? i + 3}\n`;
    // }
    BoardString += `${gameBoard[i] ?? i + 1}`;
    if (i % 3 === 2) {
      BoardString += "\n";
    }
  }
  return BoardString;
}

function getUserInput(nextPlayerSymbol, gameBoard) {
  return +prompt(
    `Board:\n ${getBoardString(
      gameBoard
    )} Enter ${nextPlayerSymbol}'s next move (1-9)`
  );
}

function isMoveValid(move, gameBoard) {
  // if (typeof move !== "number" || move > 9 || move < 0) {
  //   return false;
  // }

  const boardIndex = move - 1;
  //   if (gameBoard[boardIndex] === null) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return (
    typeof move === "number" &&
    move >= 1 &&
    move <= 9 &&
    gameBoard[boardIndex] === null
  );
}

function makeAMove(gameBoard, nextPlayerSymbol) {
  // clone the game board before placing moves in it
  const newGameBoard = [...gameBoard];
  let move = null;
  do {
    move = getUserInput(nextPlayerSymbol, gameBoard);
  } while (!isMoveValid(move, gameBoard));

  const boardIndex = move - 1;
  newGameBoard[boardIndex] = nextPlayerSymbol;
  return newGameBoard;
  // return newGameBoard;
}

function hasLastMoverWon(lastMove, gameBoard) {
  let winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [i1, i2, i3] of winnerCombos) {
    if (
      gameBoard[i1] === lastMove &&
      gameBoard[i1] === gameBoard[i2] &&
      gameBoard[i1] === gameBoard[i3]
    ) {
      return true;
    }
  }
  return false;
}

function isGameOver(gameBoard, currentPlayerSymbol) {
  // 1. check if there is a winner
  if (hasLastMoverWon(currentPlayerSymbol, gameBoard)) {
    // Write a message that last mover has won the game
    alert(`Congratulations, ${currentPlayerSymbol} has won the game`);
    return true;
  }

  if (gameBoard.every((element) => element !== null)) {
    alert(`This is a draw`);
    return true;
  }
}

function isDraw(gameBoard) {
  for (let element of gameBoard) {
    if (element === null) {
      return false;
    }
  }
  return true;
}

function ticTacToe() {
  // State space
  let gameBoard = new Array(9).fill(null);
  let currentPlayerSymbol = null;

  // Computations
  do {
    currentPlayerSymbol = currentPlayerSymbol === "X" ? "O" : "X";
    gameBoard = makeAMove(gameBoard, currentPlayerSymbol);
  } while (!isGameOver(gameBoard, currentPlayerSymbol));

  // Return value
  // return undefined;
}
