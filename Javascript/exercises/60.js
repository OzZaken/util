'use strict'

var gBoard

const CREATURE = "🎃"
var gLength = 10

init()


function init() {
    gBoard = createBoard(gLength)
    createCreatures((gLength ** 2) / 3)
    console.table(gBoard)
    var stopGame = setInterval(playGame, 1000 * 2)

}

function createBoard(lengthBoard) {
    var board = []
    for (var i = 0; i < lengthBoard; i++) {
        board[i] = []
        for (var j = 0; j < lengthBoard; j++) {
            board[i][j] = ''
        }
    }
    return board
}

function createCreatures(numCreatures) {
    for (var i = 0; i < numCreatures; i++) {
        var x = getRandomInt(0, gLength)
        var y = getRandomInt(0, gLength)
        gBoard[x][y] = CREATURE
    }
}

function playGame() {
    gBoard = runGeneration(gBoard)
    renderBoard(gBoard)
}

function runGeneration(gBoard) {
    var board = gBoard.slice()
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var countCall = countNeighbors(gBoard, i, j)
            if (countCall < 3) board[i][j] = ''
            else if ((countCall > 5)) board[i][j] = ''
            else board[i][j] = CREATURE
        }
    }
    return board
}

function renderBoard(gBoard) {
    console.clear()
    console.table(gBoard)
}

function countNeighbors(mat, rowIdx, colIdx) {
    var count = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > mat.length - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > mat[0].length - 1) continue
            if (i === rowIdx && j === colIdx) continue
            if (mat[i][j]) {
                count++
            }
        }
    }
    return count
}

//min- in, max-out
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
