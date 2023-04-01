'use strict'
/* //* Exercise 35 - Encrypt
 Write the function encrypt which gets a string and encrypts it.
 Implement the function by replacing each character code with code + 5 (i.e. 'r' will be replaced by: 'w').
 Write the function decrypt which decrypts a message.
 Tip: try writing this in the console: 'ABC'.charCodeAt(0)
 Tip: search for the opposite function to charCodeAt
 Bonus: extract the common logic to an encode function which both encrypts and decrypts. */
console.log('Exercise 35 - Encrypt')

var str = 'This is an encrypted message!'
var decryptedStr = 'Ymnx%nx%fs%ijhw~uyji%rjxxjlj&'
var bonusMsg = 'Ymnx%nx%mt|%ymj%gtszx%xmtqi%qttp%qnpjD'

console.log('Encrypting:', encrypt(str))
console.log('Decrypting:', decrypt(decryptedStr))
console.log('encode(str):', encode(str))

function encrypt(str) {
    var encrypted = ''
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charCodeAt(i) + 5
        var encrypt = String.fromCharCode(currChar)
        encrypted += encrypt
    }
    return encrypted
}
function decrypt(str) {
    var decrypt = ''
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charCodeAt(i) - 5
        var encrypt = String.fromCharCode(currChar)
        decrypt += encrypt
    }
    return decrypt
}
function encode(str) {
    var isDecrypted = confirm('isDecrypted?')
    //? isDecrypted ? return decrypt(str) : return encrypt(str)
    if (isDecrypted) return decrypt(str)
    return encrypt(str)
}