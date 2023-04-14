"use strict"
/* Exercise 15 - Sum of two Numbers
 Write a function which receives two numbers and returns their sum */
console.log('Exercise 15 - Sum of two Numbers')

var num1 = +prompt('Enter num1'),
    num2 = +prompt('enter num2')

console.log(getSum(num1, num2))
function getSum(num1, num2) { return num1 + num2 }