'use strict'
/* Exercise 7 - Two Numbers Equal the Third
 Read 3 numbers from the user and check if the 3rd is the sum of the first two.
 If it is, print all the numbers to the console like this: 6 + 4 = 10
 If not, print them like this: 3 + 5 != 10 */
console.log('Exercise 7 - Two Numbers Equal the Third')

var num1 = 6
var num2 = 4
var num3 = 10
var sign = num1 + num2 === num3 ? '=' : '!='
console.log(`${num1} + ${num2} ${sign} ${num3}`)