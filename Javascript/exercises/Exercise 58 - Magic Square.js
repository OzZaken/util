'use strict'
/* Exercise 58 - Magic Square
 For a matrix to be a Magic Square, it must meet the following conditions:
 It must be a square. → mat.length === mat[0].length
 The sums of the rows, columns, and the two diagonals should all be equal.
 For example:
 Write a function which receives a 2D array, and tests whether it is a magic square: */
console.log('Exercise 58 - Magic Square')
var gMat = [
    //0 1 2
    [2, 7, 6],  //0
    [9, 5, 1],  //1
    [4, 3, 8]   //2
]
console.table(gMat)
console.log(isMagicSquare(gMat))

function sumCol(mat, colIdx) {
    var sumCol = 0
    for (var i = 0; i < mat.length; i++) {
        sumCol += mat[i][colIdx]
    }
    return sumCol
}

function sumRow(mat, rowIdx) {
    var sumRow = 0
    for (var i = 0; i < mat[0].length; i++) {
        sumRow += mat[rowIdx][i]
    }
    return sumRow
}

function isSquare(mat) {
    return (mat.length === mat[0].length)
}

function sumDiagonalLeft(mat) {
    var sumDiagonal = 0
    for (var i = mat.length - 1; i > 0; i--) {
        for (var j = 0; j < mat.length; j++) {
            sumDiagonal += mat[i][j]
        }
    }
    return (sumDiagonal / (mat.length - 1))
}

function sumDiagonalRight(mat) {
    var sumDiagonal = 0
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat.length; j++) {
            sumDiagonal += mat[i][j]
        }
    }
    return (sumDiagonal / mat.length)
}

function isMagicSquare(mat) {
    var cols = 0
    var rows = 0

    for (var i = 0; i < mat.length; i++) {
        cols += (sumCol(mat, i) / mat.length)
        rows += (sumRow(mat, i) / mat.length)
        if (!(cols === rows)) return false
    }
    if (isSquare(mat)) {
        if (sumDiagonalLeft(mat) === sumDiagonalRight(mat)) {
            if (sumDiagonalRight(mat) === cols) return true
        }
    }
    return false
}