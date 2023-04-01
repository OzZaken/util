'use strict'
/* Exercise 42 - Starts with... 
 Write a function named startsWithS , which receives an array of names and returns a new array, containing only those names which begin with S.
 Now, refactor your function to work on any letter by adding a letter parameter. Rename the function to reflect its new functionality. */
console.log('Exercise 42 - Starts with...')

var names = ['sharon', 'Shaoul', 'Moshe', 'Natan', 'Oz', 'Maya']
var char = prompt('Starting With ?')

console.log('Start With:', char, startsWithAny(names, char))
console.log('Start with any: ' + startsWithS(names))

function startsWithS(names) {
    var arr = []
    for (var i = 0; i < names.length; i++) {
        var name = names[i]
        if (name.charAt(0).toUpperCase() === 'S') arr.push(name)
    } return arr
}
function startsWithAny(names, char) {
    var arr = []
    for (var i = 0; i < names.length; i++) {
        if (names[i].charAt(0).toUpperCase() === char.toUpperCase()) arr.push(names[i])
    }
    return arr
}