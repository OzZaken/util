'use strict'

var items = [8, 11, 4, 6, 2, 9]
// var items = [8, 4, 6, 2]

// With forEach - always iterates the whole array

var allEvens = true

// items.forEach(item => {
//     console.log('I am Called, with item', item)
//     if (item % 2 !== 0) allEvens = false
//     // NO break No continue
//     // return
// })
// console.log('All evens?', allEvens)
    
    
// // With every - stops when result is determined
// var allEvens = items.every(item => {
//     console.log('I am Called, with item', item)
//     return item % 2 === 0
// })
// console.log('All evens?', allEvens)


// some - stops when result is determined
var hasPrimes = items.some(isPrime)
console.log('hasPrimes?', hasPrimes)


// Lets implement every & some
function myEvery(items, func) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i]
        var res = func(item, i, items)
        if (!res) return false
    }
    return true
}


function mySome(items, func) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i]
        var res = func(item, i, items)
        if (res) return true
    }
    return false
}


function isPrime(num) {
  
    var limit = Math.sqrt(num)
    for (var i = 2; i <= limit; i++) {
        if (num % i === 0) return false
    }
    return true
}
