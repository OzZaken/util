'use strict'
/* Exercise 57 - find the matrix mode
 In statistics, the most common value in a set of data, is called the mode  (שכיח).
 Write the function findMode(mat).
 The function prints the number which appears most frequently in a matrix.
 //* BONUS: If there are ties, e.g. both 47 and 53 appeared 17 times, print both of them, or all of them.
 //* Tip: use an object map to count the numbers. */
console.log('Exercise 57 - find the matrix mode')

var gLotsOfOne = [
    [3, 2, 1],
    [1, 1, 1],
    [1, 2, 1]
]

var gMatEven = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 2]
]

console.log('findMode(gLotsOfOne):', findMode(gLotsOfOne))
console.log('findMode(gMatEven):', findMode(gMatEven))
console.log('findMode(gMatOfStr):', findMode(gMatOfStr))


function findMode(matrix) {
    var modeNums = []
    var numsCountMap = getNumsCountMap(matrix)
    var modeNumsCount = Object.values(numsCountMap)
    var highestValue = Math.max(...modeNumsCount)
    for (var num in numsCountMap) {
        if (numsCountMap[num] === highestValue) modeNums.push([num, numsCountMap[num]])
    }
    return modeNums
}

function getNumsCountMap(mat) {
    var numsCountMap = {}
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[0].length; j++) {
            numsCountMap[mat[i][j]] = numsCountMap[mat[i][j]] ? numsCountMap[mat[i][j]] + 1 : 1
        }
    }
    return numsCountMap
}