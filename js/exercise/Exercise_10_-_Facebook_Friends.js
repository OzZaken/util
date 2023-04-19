'use strict'
/* Exercise 10 - Facebook Friends
 Ask the user how many friends he has on FB and print out an analysis:
 More than 500 friends – 'OMG, a celebrity!'
 More than 300 friends (and up to 500) – 'You are well connected!'
 More than 100 friends – 'You know some people...'
 Up to 100 friends – 'Quite picky, aren't you?'
 0 – 'Let’s be friends!' */
console.log('Exercise 10 - Facebook Friends')

var fbFriends = +prompt('How many friends you have on FB ?')
if (fbFriends > 500) console.log('OMG, a celebrity!')
else if (fbFriends > 300) console.log('You are well connected!')
else if (fbFriends > 100) console.log('You know some people...')
else if (fbFriends >= 1) console.log('Quite picky, aren\'t you?')
else console.log('Let\'s be friends!')