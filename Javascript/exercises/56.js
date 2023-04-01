'use strict'
/*//* Exercise 56 - Symmetric Matrices
 A symmetric matrix is a matrix that passes this boolean condition:
       mat[i][j] === mat[j][i]
 Write the function checkIfSymmetric(mat).*/
console.log('Exercise 56 - Symmetric Matrices')

var gSymmetric = [
    [0, 1, 2],
    [1, 0, 1],
    [2, 1, 0]
]

var gNotSymmetric = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log('checkIfSymmetric() Expected: true',  checkIfSymmetric(gSymmetric))
console.log('checkIfSymmetric() Expected: false', checkIfSymmetric(gNotSymmetric))

function checkIfSymmetric(mat) {
    for (var i = 0; i < mat.length; i++) {
        for (var j = i + 1; j < mat.length; j++) {
            console.log('mat[i][j] | mat[j][i]', mat[i][j],'|',mat[j][i])
            if (mat[i][j] !== mat[j][i]) return false
        }
    }
    return true
}