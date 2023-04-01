'use strict'
/* Exercise 11 - Bank System
 Initialize a variable named currBalance with the value: 1000
 Initialize a constant named PIN with the value: '0796'
 Prompt the user to enter a secret pin code.
 If the user entered the correct pin code, ask him how much he would like to withdraw. Print a nice message with the new balance.
 If the pin code was wrong, alert the user with a different message, and don’t allow him make a withdrawal.
 Add a feature: don’t let the user withdraw more than he has in his account. */
console.log('Exercise 11 - Bank System')

const PIN = '0796'
var currBalance = 1000,
    secretPinCode = prompt('Enter the secret code')

if (PIN === secretPinCode) {
    var withdraw = +prompt('How much would you like to withdraw?')
    if (withdraw < currBalance) {
        currBalance -= withdraw
        console.log(`Withdraw successful!\n Your new is balance is: ${currBalance}`)
    }
    else console.log('Sorry\n The amount you tried to withdraw is greater then your balance.')
}
else alert('Wrong PIN')