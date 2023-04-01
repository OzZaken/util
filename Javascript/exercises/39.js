'use strict'
/*//* Exercise 39 - Count Votes
 Implement a function named countVotes(votes, candidateName) which counts how many votes a candidate received.
 For example: if the votes array looks like this: ['Nuli', 'Pingi', 'Uza', 'Shabi', ‘Uza’],and the candidate name is 'Uza',the function returns 2.*/
console.log('Exercise 39 - Count Votes')

var votes = ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza', 'uza']
var fName = 'Uza'

console.log('votes:', votes)
console.log('fName:', fName)
console.log('Votes: ', countVotes(votes, fName))

function countVotes(votes, candidateName) {
    var counter = 0
    for (var i = 0; i < votes.length; i++) {
        if (votes[i].toLowerCase() === candidateName.toLowerCase()) counter++
    }
    return counter
}