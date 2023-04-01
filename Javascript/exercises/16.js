'use strict'
/* Exercise 16 - Even and Odd
 Write a function named isEven(num) which receives a number, and returns trueif the number is even, and falseif it is odd. */
console.log('Exercise 16 - Even and Odd')

isEven(+prompt('Enter num'))
function isEven(num) { num % 2 === 0 ? console.log(num + ' is Evan') : console.log(num + ' is Odd') }