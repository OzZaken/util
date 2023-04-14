'use strict'
/* Exercise 12 - Guess Who
 Use the alert function, and ask the user to think about an actor.
 Use the confirm function and ask the user two yes/no questions:
 Question 1: 'Is he a man?'
 If the answer to question 1 is 'Yes', then Question 2 becomes: 'Is he blonde?'
 If the answer to question 2 is 'Yes' - Philip Seymour!
 If the answer to question 2 is 'No' - Tom Cruise!
 If the answer to question 1 is 'No', then Question 2 becomes: 'Is she English?'
 If the answer to question 2 is 'Yes' - Keira Knightley!
 If the answer to question 2 is 'No' - Natalie Portman!*/
console.log('Exercise 12 - Guess Who')

guessWho(alert('Think about an actor.'))
function guessWho() {
    var isMan = confirm('Is he a man?')
    if (isMan) {
        var isBlonde = confirm('Is he blonde?')
        if (isBlonde) alert('Philip Seymour!')
        else alert('Tom Cruz!')
    }
    else {
        var isEnglish = confirm('Is she English')
        if (isEnglish) alert('Keira Knightley!')
        else alert('Natalie Portman!')
    }
}