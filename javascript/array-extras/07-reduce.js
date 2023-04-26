'use strict'

// Reduce can convert an array, to an object:
reduceArrayToMapSample()
// mapUsingReduce()


function reduceArrayToMapSample() {
    
    var votes = ['bb', 'bb', 'gants', 'bb', 'gants', 'gants', 'Puki']
    console.log('Votes:', votes)

    var electionMap = votes.reduce((acc, vote) => {
        // console.log('Called with ', acc, vote);
        if (!acc[vote]) acc[vote] = 0
        acc[vote]++
        return acc
    }, {})

    console.log('Elections Map', electionMap)
}

function mapUsingReduce() {
    var nums = [2, 8, 9]
    var res = nums.map(function (num) {
        return num ** 2
    })
    console.log('RES', res)

    // Reduce is powerful:
    var res1 = nums.reduce(function (acc, num) {
        acc.push(num ** 2)
        return acc
    }, [])
    console.log('RES1', res1)
}

const vals = [4, 7, 1]
function accumulateSum(acc, num){
    return acc + num
}
var r = myReduce(vals, accumulateSum, 0)
// console.log('Got: ', r)


function myReduce(items, func, accInitialVal) {
    var acc = accInitialVal
    for (var i = 0; i < items.length; i++) {
        var item = items[i]
        acc = func(acc, item)
    }
    return acc
}