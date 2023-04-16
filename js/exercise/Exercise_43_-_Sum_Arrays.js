'use strict'
console.log('Exercise 43 - Sum Arrays')

var array1 = [1, 4, 3]
var array2 = [2, 5, 1, 9,]
// var array1 = getArrayFromUser()
// var array2 = getArrayFromUser()

console.log('\t\t☼ U-T ☼\n',
    'INPUT:', array1, array2, '\n',
    'EXPECTED:', [3, 9, 4, 9], '\n',
    'ACTUAL:', sumArrays(array1, array2)
)

function sumArrays(nums1, nums2) {
    // if (nums1.length===nums2.length) 
    var shorterArr = ((nums1.length < nums2.length) ? nums1 : nums2).slice()
    var longerArr = ((nums1.length > nums2.length) ? nums1 : nums2).slice()
    for (var i = 0; i < shorterArr.length; i++) {
        longerArr[i] += shorterArr[i]
    }
    return longerArr
}

function getArrayFromUser() {
    var number = +prompt('enter number')
    var array = []
    while (number !== 999) {
        array.push(number)
        number = +prompt('enter number')
    }
    console.log(array)
    return array
}