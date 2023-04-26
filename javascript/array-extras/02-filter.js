'use strict'

var nums = [8, 9, 2, 6, 7, 11, 14]

// Filtering an array using forEach - BAD WAY

// var filteredNums = []
// nums.forEach(function(num){
//     if (num % 2 === 0) filteredNums.push(num)
// })
// console.log('Even numbers:', filteredNums)

// var evens = nums.filter(num => (num % 2 === 0))
// console.log('Evens:', evens)


var students = [
    {name: 'Buli', grade: 89},
    {name: 'Vuli', grade: 76},
    {name: 'Muli', grade: 65},
    {name: 'Kuli', grade: 10}
]

var passedStudents = students.filter(student => student.grade >= 70)
// console.log('Passed Students:', passedStudents)


// var names = ['Kiki', 'Miki', 'Tiki', 'Kiti']
// // var filteredNames = names.filter(myFunc)
// var filteredNames = names.filter(item => item.startsWith('K'))
// console.log('filteredNames', filteredNames)

// function myFunc(item){
//     return item.startsWith('K')
// }


// var arr = [null, 10, false, undefined, '', 0, -17, 'false', ' ']

// // var truthyItems = arr.filter(function(x) { return x })
// // var truthyItems = arr.filter(x => x)
// var truthyItems = arr.filter(item => item)
// console.log('Truthies:', truthyItems)


// Lets implement Array.filter
function myFilter(items, func) {
    var filteredItems = []
    for (var i = 0; i < items.length; i++) {
        var item = items[i]
        var res = func(item, i, items)
        if (res) filteredItems.push(item)
    }
    return filteredItems
}
