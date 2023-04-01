'use strict'
/* Exercise 19 - Even and Odd Numbers
 Read 10 numbers from the user. Check each number and print it along with a short message indicating whether it is even or odd.
 For example:
 21 is Odd
 48 is Even */
console.log('Exercise 19 - Even and Odd Numbers')

for (let i = 0; i < 10; i++) {
    var num = +prompt('Enter a num')
    num % 2 === 0 ? console.log(num, 'is Even') : console.log(num, 'is Odd')
}