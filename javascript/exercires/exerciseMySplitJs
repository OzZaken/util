'use strict'
/* exercise 47 - mySplit()
 Implement your own version of the built-in javaScript split function - mySplit(str, sep).
 Test it with different types of strings and separators:
 You can try – 'Japan,Russia,Sweden' or '1-800-652-0198'
 You can assume that the separator (delimiter) is a single character.
 BONUS: don’t assume that, e.g: 'A|||B|||C' */
console.log('exercise 47 - mySplit()')

var str1 = 'Japan,Russia,Sweden'
var sep1 = ','

var str2 = '1--800-652-0198'
var sep2 = '-'

var str3 = 'A||||||B|||C'
var sep3 = '|||'

console.log(`str1 = 'Japan,Russia,Sweden'\nsep1 = ','\nmySplit(str1, sep1):`, mySplit(str1, sep1))
console.log(`str2 = '1-800-652-0198'\nsep2 = '-'\nmySplit(str2, sep2):\n`, mySplit(str2, sep2))
console.log(`str3 = 'A|||B|||C'\nsep3 = '|||'\nmySplit(str3, sep3):\n`, mySplit(str3, sep3))

function mySplit(str, sep) {
    str += sep
    var splitStr = []
    for (var i = 0; i < str.length; i = sepIdx + sep.length) {
        var sepIdx = str.indexOf(sep, i)
        var sepStr = str.substring(i, sepIdx)
        if (sepStr !== '') splitStr.push(sepStr)
    }
    return splitStr
}