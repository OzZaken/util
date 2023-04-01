'use strict'
/* Exercise 49 - getNthLargest()
 Write the function getNthLargest(nums, nthNum)
 to get the nth largest element from an array of unique numbers.
 For example: getNthLargest([ 7, 56, 88, 92, 99, 89, 11], 3)
 will return: 89
 Tip: This can be done more easily by first sorting the array.
 BONUS: Try writing the algorithm without sorting the array. */
console.log('Exercise 49 - getNthLargest()')

var nums = [7, 56, 88, 92, 99, 89, 11]
var nthNum = 3

console.log('nums:', nums)
console.log('nthNum:', nthNum)

console.log('getNthLargest2(nums, nthNum):', getNthLargest(nums, nthNum))
console.log('getNthLargest(nums, nthNum):', getNthLargest2(nums, nthNum))

function getNthLargest(nums, nthNum) {
    nums = functionSort(nums)
    return nums[nthNum + 1]
}
function functionSort(nums) { return nums.sort((a, b) => a - b) }

function getNthLargest2(nums, nthNum) {
    for (var i = 0; i < nthNum; i++) {
        var maxIdx = getMaxIdx(nums)
        var num = nums.splice(maxIdx, 1)[0]
    }
    return num
}
function getMaxIdx(nums) {
    var maxNum = -Infinity
    var maxIdx = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) maxNum = nums[i], maxIdx = i
    }
    return maxIdx
}