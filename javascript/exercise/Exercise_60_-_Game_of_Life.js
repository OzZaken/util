

const GAME_FREQ = 1000;
const LIFE = '🎃';
const SUPER_LIFE = '🦄';

// The Model
var gBoard;
var gGameInterval;


function init() {
    gBoard = createBoard();
    renderBoard(gBoard)

    // play()
}


function play() {
    gBoard = runGeneration(gBoard);
    renderBoard(gBoard);
}


function createBoard() {
    var board = [];
    for (var i = 0; i < 8; i++) {
        board.push([])
        for (var j = 0; j < 8; j++) {
            board[i][j] = (Math.random() > 0.5) ? LIFE : ''
            // board[i][j] = (i === 0 || i === 7 || j === 0 || j === 7) ? LIFE : ''
        }
    }
    return board;
}

// DONE: add class 'occupied'
// DONE: render the board in table
function renderBoard(board) {
    // console.table(board);
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j]
            var className = (cell === LIFE || cell === SUPER_LIFE) ? 'occupied' : ''
            strHTML += `<td data-i="${i}" data-j="${j}" onclick="onCellClicked(this, ${i}, ${j})" class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }

    // console.log(strHTML);
    var elBoard = document.querySelector('tbody.board')
    elBoard.innerHTML = strHTML


}

// DONE: add toggle game btn
function toggleGame(elBtn) {
    // console.log('gGameInterval:', gGameInterval)
    if (gGameInterval) {
        clearInterval(gGameInterval)
        gGameInterval = null
        elBtn.innerText = 'Start'
    } else {
        gGameInterval = setInterval(play, GAME_FREQ);
        elBtn.innerText = 'Stop'
    }
}

// DONE: click on a TD with LIFE upgrade to SUPER_LIFE and never dies
function onCellClicked(elCell, cellI, cellJ) {
    // console.log('cellI, cellJ', cellI, cellJ)
    console.log('elCell.dataset:', elCell.dataset)
    if (gBoard[cellI][cellJ] === LIFE) {
        // Model
        gBoard[cellI][cellJ] = SUPER_LIFE

        // DOM
        elCell.innerText = SUPER_LIFE


        blowUpNegs(cellI, cellJ)
    }

    console.table(gBoard)
}


function blowUpNegs(cellI, cellJ) {

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= gBoard[i].length) continue;
            if (gBoard[i][j] === LIFE) {
                // Model 
                gBoard[i][j] = ''

                // DOM
                var elCell = renderCell(i, j, '')
                elCell.classList.remove('occupied')
            }
        }
    }

}


function renderCell(i, j, value) {
    // var elCell = document.querySelector(`[data-i][data-j]`)
    var elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`)
    elCell.innerText = value
    return elCell
}

function runGeneration(board) {
    var newBoard = copyMat(board);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var numOfNeighbors = countNeighbors(i, j, board);
            if ((numOfNeighbors > 2) && (numOfNeighbors < 6)) {
                if (board[i][j] === '') newBoard[i][j] = LIFE;
            }
            else if (board[i][j] === LIFE) newBoard[i][j] = '';
        }
    }
    return newBoard;
}

function countNeighbors(cellI, cellJ, mat) {
    var neighborsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            if (mat[i][j] === LIFE) neighborsCount++;
        }
    }
    return neighborsCount;
}

function copyMat(mat) {
    var newMat = [];
    for (var i = 0; i < mat.length; i++) {
        newMat[i] = [];
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j];
        }
    }
    return newMat;
}
