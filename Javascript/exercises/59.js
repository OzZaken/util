'use strict'
/*//* Exercise 59 - BINGO
Your challenge is to implement the famous game of BINGO. In this version of the game,
there are two players. Numbers are drawn at random, and each player marks the number if it appears in his board. The first player to mark all the numbers on his board, wins.
Here is the suggested data structure:

        var gPlayers = [
            {name: ‘Muki’, hitCount: 0, board: createBingoBoard()},
            {name: ‘Puki, hitCount: 0, board: createBingoBoard()}
        ]

//*Every cell in board will hold an object like {value: 17, isHit: false}
It is common practice to implement our code in several stages, starting with simplified version for some of the functions, which allow us to test other parts of our code first. Let’s try this approach:
Implement the createBingoBoard() function: It returns a 5 by 5 matrix containing cell object as described above, with the numbers 1 – 25 (Later on we will change it to 1 – 99).
Implement the function printBingoBoard(board) which prints the board by showing the number (value) in each cell.
If isHit is true, add 'v' to the printed number.
Check your function by manually setting a cell's isHit to true like this: gPlayers[0].board[0][0].isHit = true and printing the board (remember you can run code from the console).
//*Implement some empty (placeholder) functions:
//*drawNum() code a simple function returning a fixed number (e.g. 17)
//*markBoard() an empty function for now.
//*checkBingo() a simple function returning true (note, that if it returns false it will cause an infinite loop).
//*Implement the playBingo function:
//*Implement the markBoard function:
//*If the board contains a cell with calledNum in its value, update that cell's isHit value accordingly and increase the player’s hitCount .
//*Use the printBingoBoard function to debug your function and make sure it works correctly.
Implement the checkBingo function – Just check if the player’s hitCount has reached 25.
Implement the drawNum function:
We will later need this function to return a unique random number, so we will use an array - gNums.
Add the function resetNums which updates the global variable gNums to be an array with the numbers 1 – 25. This function should be called at the beginning of createBoard and also at the beginning of the playBingo function.
The function drawNum can just pop from that array for now (predictable order helps while developing)
Make sure you have a basic working game that ends after 25 iterations before moving on
Implement the following additions and modification:
The gNums array should hold the numbers from 1 to 99.
drawNum should return a random number from the array. Use splice for that, to make sure the drawn numbers do not repeat.
Print a happy greeting when a player –
completes a row – ‘Muki has completed a row!’.
completes the main diagonal – ‘Muki has completed the main diagonal!’
completes the secondary diagonal – ‘Muki has completed the secondary diagonal!’.
Slow down the game so it feels more realistic and easy to follow:
Use setInterval instead of the while loop: var gameInterval = setInterval(playTurn, 1000)
 Use clearInterval(gameInterval) when the game is over.
 Finalizing
 How easy would it be to make your game to work with a 6 by 6 Bingo board?
 How easy would it be, to add more players? */
console.log('Exercise 59 - BINGO')
'use strict'


var gPlayers
var gNums
var gStopGame
var gIsVictory
var gLengthBoard = 5
init()
function init() {
    gIsVictory = false
    if (gStopGame) clearInterval(gStopGame)
    gPlayers = [
        { name: '🐬', hitCount: 0, board: createBingoBoard(gLengthBoard) },
        { name: '🐵', hitCount: 0, board: createBingoBoard(gLengthBoard) }
    ]
    printBingoBoard(gPlayers[0])
    printBingoBoard(gPlayers[1])
    gNums=resetNums()
    gStopGame = setInterval(playTurn, 1000)
}

function createBingoBoard(lengthBoard) {
    gNums = resetNums()
    var board = []
    for (var i = 0; i < lengthBoard; i++) {
        board[i] = []
        for (var j = 0; j < lengthBoard; j++) {
            board[i][j] = {
                value: drawNum(),
                isHit: false
            }
        }
    }
    return board
}

function printBingoBoard(player) {
    var board = player.board
    var boardPrint = []
    for (var i = 0; i < board.length; i++) {
        boardPrint[i] = []
        for (var j = 0; j < board[0].length; j++) {
            var hit = board[i][j].isHit ? '✔' : ''
            boardPrint[i][j] = board[i][j].value + hit
        }

    }
    console.log(player.name);
    console.table(boardPrint)
}
///////////////////////////////////////////////////////////////////////////////////////////////
function playTurn() {
    var calledNum = drawNum()
    console.log('THE NUMBER DRAWN IS ' + calledNum)
    for (let i = 0; !gIsVictory && i < gPlayers.length; i++) {
        markBoard(gPlayers[i], calledNum)
    }

}

function markBoard(player, calledNum) {
    var board = player.board
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j].value === calledNum) {
                printBingoBoard(player)
                board[i][j].isHit = true
                player.hitCount++
                checkBingo(player, i, j)



                //check after num turn length*length
                if (gNums.length < (gLengthBoard ** 2) * 4 - (gLengthBoard ** 2)) {
                    gIsVictory = checkWin(player)
                    if (gIsVictory) gameOver(player.name)
                }
            }
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////
function checkWin(player) {
    return player.hitCount === gLengthBoard ** 2
}
function checkBingo(player, i, j) {
    if (checkCol(player.board, i)) {
        console.log(`Congratulations${player.name} you have finished column`);
    }
    if (checkRow(player.board, j)) {
        console.log(`Congratulations${player.name} you have finished row`);
    }
    if (i === j && checkMainDiagonal(player.board)) {
        console.log(`Congratulations${player.name} you have finished Main Diagonal`);
    }
    if (i + j === player.board.length - 1 && checkSecondDiagonal(player.board)) {
        console.log(`Congratulations${player.name} you have finished Second Diagonal`);
    }
}
function checkCol(mat, colIdx) {
    for (var i = 0; i < mat.length; i++) {
        if (!mat[colIdx][i].isHit) return false
    }
    return true
}
function checkRow(mat, colIdx) {
    for (var i = 0; i < mat.length; i++) {
        if (!mat[i][colIdx].isHit) return false
    }
    return true
}
function checkMainDiagonal(mat) {
    for (var i = 0; i < mat.length; i++) {
        if (!mat[i][i].isHit) return false
    }
    return true
}
function checkSecondDiagonal(mat) {
    for (var i = 0; i < mat.length; i++) {
        if (!mat[mat.length - 1 - i][i].isHit) return false
    }
    return true
}
///////////////////////////////////////////////////////////////////////////////////////////////
function resetNums() {
    var nums = []
    for (var i = 1; i <= (gLengthBoard ** 2) * 4; i++) {
        nums.push(i)
    }
    return nums
}
function drawNum() {
    return gNums.splice(getRandomInt(0, gNums.length), 1)[0]
}
function gameOver(name) {
    clearInterval(gStopGame)
    console.log('🥇🥇🥇\n', name, 'YOU WIN!!\n🥇🥇🥇');
}
///////////////////////////////////////////////////////////////////////////////////////////////
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}