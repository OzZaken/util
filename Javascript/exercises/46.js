'use strict'
/*//* Exercise 46 - Multiply Nums 
 Write the function: multBy(nums, multiplier) which modifies the nums array so that each of its items, is multiplied by multiplier.
 The function returns the modified array.
 Add another parameter to this function named isImmutable.
 When this parameter is true, use array.slice()to perform the function’s calculation on a copy of the array, and leave the original array unchanged.
 The function should return the modified array. */
console.log('Exercise 46 - Multiply Nums')

var nums = [1, 2, 3]
console.log('nums:', nums)


console.log('multBy(nums, 2, true):', multBy(nums, 2, true))
function multBy(nums, multiplier, isImmutable) {
    var result = isImmutable ? nums.slice() : nums
    for (var i = 0; i < nums.length; i++) result[i] *= multiplier
    return result
}


var modifiedNums = nums.map(num => num ** 2)
console.log('modifiedNums:', modifiedNums)