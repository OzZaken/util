'use strict'

// // Numbers => Squares
// var nums = [6, 9, 2, 5]

// var modifiedNums = nums.map(num => num ** 2)
// console.log('modifiedNums:', modifiedNums)

// Strings => Objects

var gNextId = 1001
var names = ['Juni', 'Muki', 'Kuni', 'Netchi', 'Falulu']

var players = names.map((playerName) => {
  return { id: gNextId++, name: playerName }
})
console.log('Players', players)

renderPlayers(players)

// function renderPlayers(players){

//     var elList = document.querySelector('.players')

//     var strListItems = players.map(player => `<li>${player.name}</li>`)
//     var strHTML = strListItems.join('\n')

//     console.log('strListItems: ', strListItems)
//     console.log('strHTML: ', strHTML)

//     elList.innerHTML = strHTML
// }

// function renderPlayers(players){

//     var elList = document.querySelector('.players')

//     var strListItems = players
//         .filter(player => player.name.length < 5)
//         .map(player => `<li>${player.name}</li>`)

//     var strHTML = strListItems.join('\n')

//     console.log('strListItems: ', strListItems)
//     console.log('strHTML: ', strHTML)

//     elList.innerHTML = strHTML
// }

function renderPlayers(players) {
  var elList = document.querySelector('.players')

  var strHTML = players
    .filter((player) => player.name.length < 5)
    .map((player) => `<li>${player.name}</li>`)
    .join('')

  console.log('strHTML: ', strHTML)

  elList.innerHTML = strHTML
}

// // Lets implement Array.map
// var nums = [6, 9, 2, 5]
// var res1 = myMap(nums, function(num){ return num % 2 })
// console.log('res1', res1)

function myMap(items, func) {
  var mappedItems = []

  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    var res = func(item, i, items)
    mappedItems.push(res)
  }
  return mappedItems
}
