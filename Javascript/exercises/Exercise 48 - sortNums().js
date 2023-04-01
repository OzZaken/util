'use strict'
/* Exercise 48 - sortNums()
 Implement the function sortNums(nums). 
 This function returns a sorted version of the original nums array.
 It works by looping through the array, finding the minimum, splicing it out, and adding it to a new array.
 Read about how to sort an array yourself, by using the bubble sort algorithm. Google it, copy it, adjust it to match our coding conventions and use it. */
console.log('Exercise 48 - sortNums()')

var nums = getNums()
console.log('nums:', nums)

console.time('bubbleSort')
bubbleSort(nums)
console.timeEnd('bubbleSort')


console.time('sortNums')
sortNums(nums)
console.timeEnd('sortNums')


console.time('functionSort')
methodSort(nums)
console.timeEnd('functionSort')


console.time('mergeSort')
console.log(mergeSort(nums))
console.timeEnd('mergeSort')

function methodSort(nums) {
    return nums.sort((a, b) => a - b)
}

function sortNums(nums) {
    var sortArr = []
    var copyNums = nums.slice()
    for (var i = 0; i < nums.length; i++) {
        var minIdx = getMinIdx(copyNums)
        var minNum = copyNums.splice(minIdx, 1)[0]
        sortArr.push(minNum)
    }
    return sortArr
}

function getMinIdx(nums) {
    var minNum = Infinity
    var minIdx = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < minNum) minNum = nums[i], minIdx = i
    }
    return minIdx
}

function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                let tmp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = tmp
            }
        }
    }
    return nums
}

function mergeSort(nums) {
    const half = nums.length / 2
    if (nums.length <= 1) return nums
    const left = nums.splice(0, half)
    const right = nums
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) sortedArr.push(left.shift())
        else sortedArr.push(right.shift())
    }
    return [...sortedArr, ...left, ...right]
}

function getNums() {
    var longNums = []
    for (let i = 0; i < 10000; i++) {
        longNums.push(Math.ceil(Math.random() * 99))
    }
    return longNums
}