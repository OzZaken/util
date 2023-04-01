'use strict'
/* Exercise 45 - Remove Duplicates
 Write the function removeDuplicates(nums). The parameternums, is an array of integers in the range 0 - 5 like this one:
 5452124
 For example: for this input array [5,4,5,2,1,2,4]
 the output will look like this:[5,4,2,1]
 Tip: Notice that the values are in a specific range */
console.log('Exercise 45 - Remove Duplicates')

var nums = [5, 4, 5, 2, 1, 2, 4]

console.log(nums)
console.log(removeDuplicates(nums))

let uniqueChars = [...new Set(nums)]
console.log('uniqueChars:', uniqueChars)
function removeDuplicates(nums) {
    var noDuplicates = []
    for (var i = 0; i < nums.length; i++){
        if (!noDuplicates.includes(nums[i])) noDuplicates.push(nums[i])
    }  
    return noDuplicates
}