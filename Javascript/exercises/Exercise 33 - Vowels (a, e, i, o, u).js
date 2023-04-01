'use strict'
/* Exercise 33 - Vowels (a, e, i, o, u)
 Write the following functions:
 printVowelsCount(str)- which receives a string and prints how many times each vowel appears.
 flipCase- which gets a string and changes the vowels to lowercase letters, and the rest to uppercase letters (i.e. Upset uPSeT).
 doubleVowels- which gets a string and doubles all the vowels in it.
 Test the functions using these inputs: 'aeiouAEIOU' & 'TelAvivBeach' */
console.log('Exercise 33 - Vowels (a, e, i, o, u)')

const VOWELS = 'aeiouAEIOU'
var str = 'TelAvivBeach'
console.log('str', str)

printVowelsCount(str)
console.log('flipCase(str):', flipCase(str))
console.log('doubleVowels(str):', doubleVowels(str))

function printVowelsCount(str) {
    for (var i = 0; i < VOWELS.length; i++) {
        var currVowel = VOWELS.charAt(i)
        var counter = 0
        for (var j = 0; j < str.length; j++) if (currVowel === str.charAt(j)) counter++
        console.log(`current Vowel: ${currVowel} →  ${counter} Count`)
    }
}

function flipCase(str) {
    var resStr = ''
    str = str.toUpperCase()
    for (var j = 0; j < str.length; j++) {
        var char = str.charAt(j)
        if (isVowel(char)) char = char.toLowerCase()
        resStr += char
    }
    return resStr
}

function doubleVowels(str) {
    var newStr = ''
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i)
        if (isVowel(char)) newStr += char
        newStr += char
    }
    return newStr
}

function isVowel(char) { return VOWELS.includes(char) }