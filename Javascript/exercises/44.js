'use strict'
/*//* Exercise 44 - NumCount()
 Write the function printNumsCount(nums). The parameter nums, is an array of integers in the range 0 - 3 like this one:
 3202203
 The function prints how many times each of these numbers appears in the array.
 For example: for this input array [3,2,0,2,2,0,3]
 the output will look like this:[2,0,3,2]
 Tip: the fact that the values are in a specific range allows us to use a second array, in which the index, is actually the number itself. The values of this second array, will store the occurrences of the numbers in nums. */
console.log('Exercise 44 - NumCount()')

var nums = [3, 2, 0, 2, 2, 0, 3]
console.log('nums:', nums)

console.log(printNumsCount(nums))
function printNumsCount(nums) {
    var numsCounts = [0, 0, 0, 0]
    for (var i = 0; i < nums.length; i++) {
        numsCounts[nums[i]]++
    }
    return numsCounts
}

var countMap = nums.reduce((acc, num) => {
    !acc[num] ? acc[num] = 0 : acc[num]++
    return acc
}, {})
console.log('countMap', countMap)