'use strict'
/* Exercise 38 - Bigger than 100
 Implement a function named biggerThan100.
 It receives an array of numbers and returns a new array containing only the numbers which are greater than 100.*/
console.log('Exercise 38 - Bigger than 100')

var nums = [21, 100, 50, 123, 99, 1000, 0]
console.log('nums:', nums)

console.log('Bigger the 100: ', biggerThan100(nums))

function biggerThan100(nums) {
    var res = []
    for (let i = 0; i < nums.length; i++) {
        var currNum = nums[i]
        if (currNum > 100) res.push(currNum)
    }
    return res
}

console.log('Using filter: ', nums.filter(num => num > 100))