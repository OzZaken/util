'use strict'
/* Exercise 22 - myPow()
 Write a function named myPow() which receives 2 parameters: a base (n), and an exponent (exp) and returns nexp
 Sample unit testing:
 INPUT: 2, 3
 EXPECTED: 8
 ACTUAL: 8 */
console.log('Exercise 22 - myPow()')

var base = +prompt('Enter base num'),
    exp = +prompt("Enter exponent num")

console.log(`INPUT:\n\tbase: ${base}\n\texp: ${exp}\nEXPECTED: 8\nACTUAL:${myPow(2, 3)}`)
function myPow(n, exp) { return n ** exp }