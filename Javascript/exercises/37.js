'use strict'
/*//* Exercise 37 - Generate Password
 Implement a function named generatePass(passLength) 
 which generates a password of the specified length.
 The password is made out of random digits and letters. */
console.log('Exercise 37 - Generate Password')
const SYMBOLS = '!@#$%^&*(){}[]=<>/,.'

var passLength = +prompt('Enter length of New Password')

console.log('option 1: ', generatePass(passLength))
console.log('option 2: ', generateStrongPass(passLength))

function generatePass(passLength) {
    var abc = 'abcdefghijklmnopqrstuvwxyz'
    var pass = ''
    for (var i = 0; i < passLength; i++) {
        var randIdx = getRandomInt(0, abc.length)
        pass += abc.charAt(randIdx)
    }
    return pass
}
function generateStrongPass(passLength) {
    var pass = ''
    if (pass == false) pass += getRandomUpper(passLength)
    while (passLength !== 1) {
        if (passLength > 7) pass += getRandomLower(passLength)
        else if (passLength > 5) pass += getRandomNumber(passLength)
        else pass += getRandomSymbol(passLength)
        --passLength
    }
    return pass
}
///////////////////////////////////////////////////////////////////////////////////////////////
// Util
function getRandomInt(min, max) { return Math.floor(Math.random() * max - min) + min }
function getRandomLower() { return String.fromCharCode(Math.floor(Math.random() * 26) + 97) }
function getRandomUpper() { return String.fromCharCode(Math.floor(Math.random() * 26) + 65) }
function getRandomNumber() { return String.fromCharCode(Math.floor(Math.random() * 10) + 48) }
function getRandomSymbol() { return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] }