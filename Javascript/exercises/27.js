'use strict'
/*//* Exercise 27 - Asterisks!
 Implement the function getAsterisks(length) which returns a string of asterisks. The number of asterisks in the string is determined by length.
 For example: when the requested length is 4, it returns '****'
 Implement the function getTriangle(height) which returns a triangle. For example, getTriangle(4) , will return a string which will look like this when printed to the console:
     *
     **
     ***
     ****
     ***
     **
     *
 Hint: use the function getAsterisks() in a loop. Also, use '\n' to create new lines.
 Implement the function getMusicEqualizer(rowCount) which generates random numbers between 1 and 10 and returns rows of random lengths.
 For example, getMusicEqualizer(5) , will return a string which will look something like this when printed to the console:
     **
     ******
     *****
     ***
     *****
 Implement the function getBlock(rows, cols) which returns a block of asterisks in the dimensions given by its parameters. For example, getBlock(4, 5) , will return a string which will look like this when printed to the console:
     *****
     *****
     *****
     *****
 Now Implement getBlockOutline(rows, cols), which only returns the block outline:
     *****
     *   *
     *   *
     *****    
Surprise! There is a new requirement to support any character (not necessarily asterisks). The character should be decided by the user. Refactor your code to support this requirement How would you rename the function to better describe its new functionality?*/
console.log('Exercise 27 - Asterisks')

console.log('getAstrix(3):\n', getSymbul(3))
console.log(`getTriangle(4):\n${getTriangle(4)}`)
console.log(`getMusicEqualizer(5):\n${getMusicEqualizer(5)}`)
console.log(`getBlock(4, 5):\n${getBlock(4, 5)}`)
console.log(`getOutLine(6):\n${getOutLine(6)}`)
console.log(`getNiceSqure(cols:20, rows:5):\n${getNiceSqure(20, 5)}`)

function getSymbul(length, symbul = '*') {
    var str = ''
    for (var i = 0; i < length; i++) {
        str += symbul
    }
    return str
}
function getTriangle(height) {
    var str = ''
    var index = 0
    var currHeight = 1
    for (var i = 0; i < height * 2 - 1; i++) {
        str += getSymbul(currHeight) + '\n'
        index >= height - 1 ? currHeight-- : currHeight++
        index++
    }
    return str
}
function getMusicEqualizer(rows) {
    var str = ''
    while (rows) {
        var rowLength = getRandomIntInclusive(1, 5)
        str += getSymbul(rowLength) + '\n'
        rows--
    }
    return str
}
function getBlock(rowCount, colsCount) {
    var str = ''
    while (rowCount) {
        str += getSymbul(colsCount) + '\n'
        rowCount--
    }
    return str
}
function getOutLine(rowCount, symbul = '*') {
    var str = ''
    str += getSymbul(rowCount, symbul) + '\n'
    for (var i = 0; i < rowCount - 2; i++) {
        str += symbul + getSymbul(rowCount - 2, ' ') + symbul + '\n'
    }
    str += getSymbul(rowCount, symbul) + '\n'
    return str
}
function getNiceSqure(cols, rows) {
    var str = `╔${getSymbul(cols - 2, '═')}╗\n`
    for (var i = 0; i < rows; i++) {
        str += `║${getSymbul(cols - 2, ' ')}║\n`
    }
    str += `╚${getSymbul(cols - 2, '═')}╝\n`
    return str
}
function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }