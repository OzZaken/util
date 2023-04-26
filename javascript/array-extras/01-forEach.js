'use strict'

var players = [
  { name: 'p1', score: 19 },
  { name: 'p2', score: 12 },
  { name: 'p3', score: 16 },
  { name: 'p4', score: 21 },
  { name: 'p5', score: 10 },
]

// Instead of:
for (var i = 0; i < players.length; i++) {
  var player = players[i]
  player.score++
}
console.log('players: ', players)

// // You can do:
// players.forEach(player => player.score++)
// console.log('players: ', players)

function print(item, idx) {
  console.log(`${idx}: `, item)
}

// players.forEach(print)
players.forEach(function (item, idx) {
  console.log(`${idx}: `, item)
})

// Lets implement forEach
function myForEach(items, func) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    func(item, i, items)
  }
}

// console.log('myForEach:')
// myForEach(players, print)
