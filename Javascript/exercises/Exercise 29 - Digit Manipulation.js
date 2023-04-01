'use strict'
/* Exercise 29 - Digit Manipulation
 Read a number from the user ( keep it as a string i.e. "24367") and then:
 Basic operations:
 Print each of its digits in a separate line.
 Calculate the sum of its digits.
 Calculate the multiplication (מכפלה) of its digits.
 Sum its first and last digits.
 Print it with its first and last digits swapped. (2731 => 1732)
 Check whether it is symmetric. ( like this number: 95459)
 Print the number reversed.
 BONUS: Print the number reversed as a number and not as string.
 BONUS: Special Numbers
 Check if the number is an Armstrong number. An Armstrong number is an integer, such that the sum of each of its digits, raised to a power equal to the number of its digits, is equal to the number itself.
 For example: 371 is an Armstrong number, because 3 ³+7 ³+1 ³ = 371.
 Another example: 548,834 is an Armstrong number, because 5⁶+4⁶+8⁶+8⁶+3⁶+3⁶ = 548,834
 If the number passed the test, print it to the console.
 Check if the number is a Perfect number. A Perfect number is a positive integer that is equal to the sum of its divisors. For example: 6 is a Perfect number (1+2+3).
 Read a number from the user and store it in a variable named max. Implement a function which will print all the Perfect numbers and all the Armstrong numbers that are smaller than max.
*/
console.log('Exercise 29 - Digit Manipulation')

var digits = '24367'
var res = isSymmetric(digits)
console.log('digits:', digits)

console.log('separateLine(digits):')
separateLine(digits)
console.log('The Sum of the First and Last nums:', calculateSum(digits))
console.log('The Multiplication of the digits:', multiStringNums(digits))
console.log('swappedFirstAndLast():', swappedFirstAndLast())
console.log('isSymmetric(digits):', isSymmetric(digits))
console.log('reversedString(digits): STR', reversedString(digits))
console.log('reversedString(digits): INT', +reversedString(digits))

function separateLine(str) {
    while (str > 0) {
        var digit = +str.charAt(0)
        console.log(digit)
        str = str.substring(1, str.length)
    }
}
function calculateSum(digits) {
    var num1 = +digits.charAt(0),
        num2 = +digits.charAt(digits.length - 1),
        sum = parseInt(num1 + num2)
    return sum
}
function multiStringNums(digits) {
    var sum = 1
    while (digits > 0) {
        var digit = digits % 10
        sum *= digit
        digits = parseInt(digits / 10)
    } return sum
}
function swappedFirstAndLast() {
    var firstDigit = digits.charAt(0)
    var lastDigit = digits.charAt((digits.length) - 1)
    var cutDigits = digits.substring(1, digits.length - 1)
    var swapped = lastDigit + cutDigits + firstDigit
    return swapped
}
function firstAndLastSum(digits) {
    var firstDigit = digits.charAt(0)
    var lastDigit = digits.charAt((digits.length) - 1)
    var sum = firstDigit + lastDigit
    return sum
}
function isSymmetric(num) {
    var length = (num + '').length
    var divider = 10 ** (length - 1)
    while (num >= 10) {
        var rightDigit = num % 10
        var leftDigit = parseInt(num / divider)
        if (rightDigit !== leftDigit) return false
        num = parseInt(num / 10)
        divider /= 10
        num -= leftDigit * divider
        divider /= 10
    }
    return true
}
function reversedString(digits) {
    var reversed = ''
    while (digits > 0) {
        var digit = digits % 10
        reversed += digit
        digits = parseInt(digits / 10) // 85% 😑
    }
    return reversed
}
function reversedString(digits) {
    var reversed = ''
    while (digits > 0) {
        var digit = digits % 10
        reversed += digit
        digits = parseInt(digits / 10) // 85% 😑
    }
    return reversed
}