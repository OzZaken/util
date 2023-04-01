'use strict'
/* Exercise 18 - Age Check
 Write a function named isAbove18 which receives a name and an age.
 The function should check if the age is above eighteen and use alert to show a message :
 If the user is younger than eighteen, the message will be     -  'You are too young.'
 otherwise, the message will be     -  'You are over 18!'
 Use the user's name within the alerts.
 The function should also return a boolean value - print it to the console. */
console.log('Exercise 18 - Age Check')

var fName = 'Moshe',
    age = 18

function isAbove18(fName, age) {
    if (age < 18) alert('You are too young.')
    else alert('You are over 18!')
    age < 18 ? check18 = true : check18 = false
    return check18
}