'use strict'
/* Exercise 6 - Quadratic Equation
 Read 3 variables from the user: a, band c.
 These will be the a, b and c coefficients of a quadratic equation. (מקדמי משוואה ריבועית)
 Print the values of the following calculations to the console:
 -b
 2a
 b² - 4ac
 BONUS: a quadratic equation looks like this: ax² + bx + c = 0
 The two solutions for of this equation are X₁ and X₂:
 Print the quadratic equation as a string to the console
 Print the solutions of X₁ and X₂ to the console.
 If the discriminant is 0 – the equation has a single solution
 If the discriminant is negative – the equation has no solutions
 Here’s an example:
 For the following equation:
 2x² – 5x + 2 = 0
 Your inputs are:
 a = 2, b = -5, c = 2
 your output to the console should be:
 2x² – 5x + 2 = 0
 x₁ = 2 ; x₂ = 0.5
 Hint: To print the x² to the console, use this: string: 'x\u00B2' */
console.log('Exercise 6 - Quadratic Equation')

var a = 2
var b = -5
var c = 2
var discriminant = b * b - 4 * a * c
var bOperator = b > 0 ? '+' : ' '
var cOperator = c > 0 ? '+' : ''

console.log(`UT:\na: ${a}|b: ${b}|c: ${c}`)

console.log(`-b: ${-b}\n2 * a: ${2 * a}\ndiscriminant: ${discriminant}`)

if (discriminant < 0) console.log('the equation has no solutions:')
else if (discriminant === 0) {
    console.log('the equation has a single solution')
    var x1 = -b / (2 * a)
    console.log('X1 =', x1)
} else {
    console.log('the equation has two solution')
    var x1 = (b + Math.sqrt(discriminant)) / (2 * a)
    var x2 = (-b + discriminant ** 0.5) / (2 * a)
    console.log('X1 =', x1)
    console.log('X2 =', x2)
}
console.log(`${a}x\u00B2${bOperator}${b}x ${cOperator}${c}`)