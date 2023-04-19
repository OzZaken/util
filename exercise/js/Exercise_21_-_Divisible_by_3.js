'use strict'
/* Exercise 21 - Divisible by 3
 Read numbers from the user, until the number 999 is entered. For each number:
 Print if it is divisible by 3.
 If it is bigger by more than 10 from the previous number, print a suitable message.*/
console.log('Exercise 21 - Divisible by 3')

var num = +prompt('Enter num')
var prevNum = num

while (num !== 999 && num === '.') {
    console.log(`${num} % 3 === 0  ${num % 3 === 0}`)
    num > (prevNum + 10) ? console.log('num bigger by 10 then Prev num', num > (prevNum + 10)) : num > (prevNum + 10)
    prevNum = num
    num = +prompt('Enter num')
}