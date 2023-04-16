"use strict"
/* Exercise 9 - Absolute Value
 Read two positive numbers from the user.
 Calculate the difference between them (the absolute value).
 First, check that the input values are numbers (try googling something like ‘javascript check if number’)
 Print the inputs and the absolute difference between them to the console.
 If the difference is smaller than both input values, print a message to the console saying that those numbers are relatively close.
 It should look something like this –
 num1 = 5, num2 = 9, diff = 4 (numbers are relatively close!)
 num1 = 15, num2 = 89, diff = 74
*/
console.log(' Exercise 9 - Absolute Value')

var num1 = Math.abs(+prompt('Enter num1'))
var num2 = Math.abs(+prompt('Enter num2'))
var diff = num1 > num2 ? num1 - num2 : num2 - num1

if (isNaN(num1)) console.log('num1 is Not a Number!')
if (isNaN(num2)) console.log('num2 is Not a Number!')

console.log(`diff:${diff}`)