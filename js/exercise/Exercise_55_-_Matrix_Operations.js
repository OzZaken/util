'use strict'
/* Exercise 55 - Matrix Operations
 Fill up a matrix with numbers, and then, write the following functions:
 sumCol(mat, colIdx)
 sumRow(mat, rowIdx)
 findMax(mat, colIdx)
 findAvg(mat)
 sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd). */
console.log('Exercise 55 - Matrix Operations:')

var gMat = createMat(4, 4)
console.table(gMat)

console.log('sumCol(gMat, 0):', sumCol(gMat, 0))
console.log('sumRow(gMat,1)', sumRow(gMat, 1))
console.log('findMax(gMat, 2):', findMax(gMat, 2))
console.log('findAvg(gMat):', findAvg(gMat))
console.log('sumArea(gMat, 1, 2, 1, 3):', sumArea(gMat, 1, 2, 1, 3))

function sumCol(mat, colIdx) {
    var sum = 0
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][colIdx]
    }
    return sum
}
function sumRow(mat, rowIdx) {
    var sum = 0
    for (let i = 0; i < mat[rowIdx].length; i++) {
        sum += mat[rowIdx][i]
    }
    return sum
}
function findMax(mat, colIdx) {
    var max = mat[0][colIdx]
    for (let i = 1; i < mat[colIdx].length; i++) {
        max = max > mat[i][colIdx] ? max : mat[i][colIdx]
    }
    return max
}
function findAvg(mat) {
    var sum = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            sum += mat[i][j]
        }
    }
    return Math.ceil(sum / (mat.length ** 2))
}
function sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd) {
    var sum = 0
    for (let i = rowIdxStart; i <= rowIdxEnd; i++) {
        for (let j = colIdxStart; j <= colIdxEnd; j++) {
            sum += mat[i][j]
        }
    }
    return sum
}
function createMat(ROWS, COLS) {
    var mat = []
    for (var i = 0; i < ROWS; i++) {
        var row = []
        for (var j = 0; j < COLS; j++) {
            row.push(getRandomInt(0, 9))
        }
        mat.push(row)
    }
    return mat
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}