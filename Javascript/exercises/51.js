'use strict'
/*//* Exercise 51 - Object Map
 Implement the function countWordApperances(txt) which returns an object map.
 The object keys will be the words in the string.
 The values will be the number of times each of these words appears in the string.
 For example:
 countWordApperances ('puki ben david and muki ben david')
 will return:
 { puki: 1, ben: 2, david: 2, and: 1, muki: 1 } */
console.log('Object as a Map')

var gStr = 'puki ben david and muki ben david'
console.log('str:', gStr)

console.log('countWordAppearances(str):', countWordAppearances(gStr))

function countWordAppearances(txt) {
    var txts = txt.split(' ')
    var txtCountMap = {}
    for (var i = 0; i < txts.length; i++) {
        if (txtCountMap[txts[i]]) txtCountMap[txts[i]]++
        else txtCountMap[txts[i]] = 1
    }
    return txtCountMap
}