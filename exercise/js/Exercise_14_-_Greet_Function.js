"use strict"
/* Exercise 14 - Greet Function
 Write a function which receives a user name as a parameter and greets the user. */
console.log('Exercise 14 - Greet Function')

greetUser(prompt('Enter User Name'))
function greetUser(userName) { console.log(`Welcome ${userName} !`) }