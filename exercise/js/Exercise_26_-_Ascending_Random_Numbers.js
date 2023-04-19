'use strict'
/* Exercise 26 - Ascending Random Numbers
Write a program which generates 10 ascending random numbers (each number is greater than the previously generated number).
The first number n , should be in the range 0 – 1000,
and each subsequent number, should be in the range (n+1) – (n+1000)
For example:
First random number:
0 – 1000 => 100
Second random number:
101 – 1101 => 748
Third random number:
749 – 1749 => 1650… */
console.log('Exercise 26 - Ascending Random Numbers')

generatesAscending()
function generatesAscending() {
    var index = 0
    var floorRage = 0
    var ceilRage = 1000

    while (index < 10) {
        index++
        var newFloorRage = getRandomIntInclusive(floorRage, ceilRage)
        console.log(newFloorRage)
        floorRage = newFloorRage
        ceilRage += newFloorRage
    }
}
function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }