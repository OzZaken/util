'use strict'
/*//* Exercise 28 - Greatest Common Devisor
 Write a program which calculates the greatest common divisor (GCD) of two positive integers.
 For example: if the input are 6 and 15, the calculation’s result should be 3.
 Tip: we need a loop that runs from 6 to 2 and checks the modulus… */
console.log('Exercise 28 - Greatest Common Devisor')

console.log(findGCD(6, 15))
function findGCD(num1, num2) {
    if (!num2) return num1
    return findGCD(num2, num1 % num2)
}