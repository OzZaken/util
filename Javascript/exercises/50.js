'use strict'
/*//* Exercise 50 - Making Water
 Making Water! Let's imagine that we have the following atoms:
 Hydrogen → H
 Boron → B
 Carbon → C
 Nitrogen → N
 Oxygen → O
 Fluorine → F
 Create an array of letters, each one representing one type of atom from the above list.
 Pick random atoms from the array to create molecules of 3 atoms.
 Stop when you get 'HOH' (Water – two Hydrogen atoms and one Oxygen atom).
 Print the number of attempts it took to get 'HOH'. */
console.log('Exercise 50 - Making Water')

var atom = ['H', 'B', 'C', 'N', 'O', 'F']
var randAtom = ''
var count = 0

console.time('found in'), hoh(), console.timeEnd('found in')

function hoh() {
    while (randAtom !== 'HOH') {
        for (var i = 0; i < 3; i++) {
            var randIdx = getRandomIntInclusive(0, atom.length - 1)
            randAtom += atom[randIdx]
        }
        if (randAtom === 'HOH') console.log(randAtom,'count:', count)
        else count++, randAtom = ''
    }
    return
}

function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }