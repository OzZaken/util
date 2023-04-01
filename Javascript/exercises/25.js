'use strict'
/*//* Exercise 25 - getRandomInt()
 Write A function named getRandomInt(min, max). The function should generate a random integer between min and up to, but not including, max.
 Tip: use Math.Random() and Math.Floor().
 After you've worked it out, read this page and look at the implementation of the getRandomInt() function. */
console.log('Exercise 25 - getRandomInt()')

console.log(getRandomInt(1, 10))
function getRandomInt(min, max) { // The maximum is exclusive and the minimum is inclusive
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }