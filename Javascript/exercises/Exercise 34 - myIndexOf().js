'use strict'
/* Exercise 34 - myIndexOf()
 Implement a function named myIndexOf(str, searchStr) which receives two strings.
 The function returns the index of the second string within the first, or -1 if it wasn’t found (do not use the built-in indexOf()function… ).
*/
console.log('Exercise 34 - myIndexOf()')

var str = 'Hello Javascript (\\n...🧐)\nNice string...'
var indexOf = '🧐'

console.log('str:', str)
console.log('indexOf:', indexOf)

console.log('myIdexOf(str, indexOf):', myIdexOf(str, indexOf))

function myIdexOf(str, searchStr) {
    for (var i = 0; i < str.length; i++) if (str.charAt(i) === searchStr.charAt(0))
        if (str.substring(i, i + searchStr.length) === searchStr) return i
    return -1
}