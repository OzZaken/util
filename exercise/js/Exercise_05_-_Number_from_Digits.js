'use strict'
/*  Exercise 5 - Number from Digits
 Read 3 digits from the user, join them to one number and print it.
 For example: if the user enters the digits 3, 2 and 6, we should store them in a variable holding the value '326' and then print that variable to the console.
 BONUS: In this case, working with strings is easier. try solving the task while using numeric variables. */
console.log('Exercise 5 - Number from Digits')

var digit1 = +prompt('Enter digit1')
var digit2 = +prompt('Enter digit2')
var digit3 = +prompt('Enter digit3')

console.log('' + digit1 + digit2 + digit3)
console.log(''.concat(digit1, digit2, digit3))
console.log(`${digit1}${digit2}${digit3}`)
console.log(digit1 * 100 + digit2 * 10 + digit3 * 1)