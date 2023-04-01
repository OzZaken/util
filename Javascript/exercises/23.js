'use strict'
/* Exercise 23 - Factorial!
 Write the function getFactorial which receives a number and returns n!
(Google ‘factorial’ if you are not sure what the mathematical definition of it is). */
console.log('Exercise 23 - Factorial!')

console.log(getFactorial(5))
function getFactorial(num) {
    var result = num - 1
    for (var i = 1; i < num; num--) {
        result *= num
    }
    return result
}