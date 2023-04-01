'use strict'
/* Exercise 17 - Get the Bigger Num
 Write a function named getBigger which receives two numbers and returns the bigger one. */
console.log('Exercise 17 - Get the Bigger Num')

var num1 = 5,
    num2 = 5

console.log(getBigger(num1, num2))
function getBigger(num1, num2) {
    var biggerNum
    if (num1 === num2) return 'nums equal'
    num1 > num2 ? biggerNum = num1 : biggerNum = num2
    return biggerNum
}