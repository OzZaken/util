'use strict'
/*//* Exercise 40 - Lorem Ipsum
 Implement a function named getLoremIpsum(wordsCount) which return a sentence with random dummy text (google: lorem ipsum...)
 Here are the steps you may use to solve this:
 Create a string or an array of all the characters in the English ALPHABET.
 Write a function named getWord() which returns a single word made of 3 - 5 random letters. The length of the word will be generated randomly.
 Call this function in a loop to create a sentence. */
console.log('Exercise 40 - Lorem Ipsum')

var gAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

console.log(getLorem(+prompt('How much Words?')))

function getLorem(wordsCount) {
    var sentence = ''
    for (var i = 1; i < wordsCount + 1; i++) {
        sentence += getWord() + ' '
        if (i % getRandomIntInclusive(13, 17) === 0) console.log('i:', i), sentence = sentence.replace(/.$/, ",\n")
    }
    sentence = sentence.charAt(0).toUpperCase() + sentence.substring(1)
    return sentence.replace(/.$/, ".")
}
function getWord() {
    var word = ''
    var wordLength = getRandomIntInclusive(3, 5)
    for (var i = 0; i < wordLength; i++) {
        word += gAlphabet[getRandomIntInclusive(0, gAlphabet.length - 1)]
    }
    return word
}
function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }