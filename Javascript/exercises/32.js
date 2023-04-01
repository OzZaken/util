'use strict'
/*//* Exercise 32 - Reverse a String
 Read a string from the user and print it backwards using a loop. */
console.log('Exercise 32 - Reverse a String')

var FullName = 'Oz Zaken'

console.log(reverseStr(FullName))

function reverseStr(str) {
    var reverseStr = ''
    for (var i = str.length - 1; i >= 0; i--) reverseStr += str.charAt(i)
    return reverseStr
}