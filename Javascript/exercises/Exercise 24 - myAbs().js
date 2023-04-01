'use strict'
/* Exercise 24 - myAbs()
 Try playing around with the function Math.abs() and read its documentation on MDN.
 Implement a function called myAbs(), which mimics the behavior of Math.abs(). */
console.log('Exercise 24 - myAbs()')

var num = +prompt('Enter a num')
console.log(`input: ${num} output: ${myAbs(num)}`)

function myAbs(num) { return num < 0 ? -num : num }