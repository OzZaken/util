'use strict'

var nums = [3, 8, 1, 2]

var res = nums.reduce((accumulator, num, idx, arr) => {
    console.log('Num is', num, 'Acc is', accumulator)
    // debugger
    return accumulator + num
}, 0)

console.log('Res is:', res)


// const sum = [5, 8, -3].reduce((acc, n) => acc + n, 0)
// console.log('sum is:', sum)