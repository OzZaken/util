'use strict'
/*//* Exercise 41 - Digits to Words
 Write a function named sayNum(num) which prints each digit in words
 For example:
 123  => One Two Three.
 7294 => Seven Two Nine Four.
 Tip: You may use switch inside a loop or an array named digitNames. (Or maybe… just try them both!) */
console.log('Exercise 41 - Digits to Words')


var str = prompt('Enter digits')

console.log(sayNum(str))

function sayNum(str) {
    const digitNames = [
        'Zero',
        'One',
        'Two',
        'three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'nine'
    ]
    var digits = ''
    for (var i = 0; i < str.length; i++)
        digits += digitNames[str.charAt(i)] + ' '
    return digits
}