'use strict'
/* Exercise 36 - Longest and Shortest Names
 Implement a function which receives a string of comma separated names, for example: 'Igal,Moshe,Haim',and prints the longest and shortest names.
 Tip: use the function indexOf. note that the function accepts two parameters. */
console.log('Exercise 36 - Longest and Shortest Names')

var str = 'Oz,Igal,Moshe,Haim,Mair,Osher'
console.log('str:', str)
getLongestShortestNames(str, ',')
getMultiLongestShortestNames(str, ',')

function getLongestShortestNames(strNames, separator) {
    var max = ''
    var min = strNames
    if (!strNames.endsWith(separator)) strNames += separator
    for (let i = 0; i < strNames.length; i = loc + 1) {
        var loc = strNames.indexOf(separator, i)
        var strName = strNames.substring(i, loc)
        if (max.length < strName.length) max = strName
        if (min.length > strName.length) min = strName
    }
    console.log('min length:', min)
    console.log('max length:', max)
    return
}

function getMultiLongestShortestNames(strNames, separator) {
    var namesCount = 0
    var longestName = 0
    var longestNameLength = -Infinity
    var shurtestName = ''
    var shurtestNameLength = Infinity
    if (strNames.charAt(0) === separator) strNames = strNames.substring(1)
    if (!strNames.endsWith(separator)) strNames += separator
    for (let i = 0; i < strNames.length; i++) if (strNames.charAt(i) === separator) namesCount++
    for (let i = 0; i < namesCount; i++) {
        var currName = strNames.substring(0, strNames.indexOf(separator))
        //  shurtestName
        if (currName.length < shurtestNameLength) {
            shurtestNameLength = currName.length
            shurtestName += currName
        }
        else
            if (currName.length === shurtestNameLength) shurtestNameLength += ',' + currName.length
        //  longestName
        if (currName.length > longestNameLength) {
            longestNameLength = currName.length
            longestName = currName
        }
        else
            if (currName.length === longestNameLength) longestName += ',' + currName

        strNames = strNames.substring(strNames.indexOf(separator) + 1)
    }
    console.log('longestName:', longestName)
    console.log('longestNameLength:', longestNameLength)
    console.log('shurtestName:', shurtestName)
    console.log('shurtestNameLength:', shurtestNameLength)
}