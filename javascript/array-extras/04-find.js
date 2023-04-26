'use strict'

var players = [
    { id: 101,  name: 'Barry', age: 28, score: 30 },
    { id: 102,  name: 'Larry', age: 22, score: 29 },
    { id: 103,  name: 'Garry', age: 21, score: 22 },
    { id: 104,  name: 'Bobby', age: 26, score: 32 },
    { id: 105,  name: 'Robby', age: 19, score: 30 },
]

const id = 102

// Finding a player by id with a loop
// var player = findPlayerById(id)

// function findPlayerById(playerId){
//     for(var i = 0; i < players.length; i++){
//         if(players[i].id === playerId ) return players[i]
//     }
//     return null
// }
// console.log('player: ', player)


// // now, with find
// var player = players.find(player => player.id === id)
// console.log('player: ', player)


// // Finding a player's index by id with a loop
// var playerIdx = findPlayerIdxById(id)

// function findPlayerIdxById(playerId){
//     for(var i = 0; i < players.length; i++){
//         if(players[i].id === playerId ) return i
//     }
//     return -1
// }
// console.log('playerIdx: ', playerIdx)


// // now, with findIndex
// var playerIdx = players.findIndex(player => player.id === id)
// console.log('playerIdx: ', playerIdx)


// // Find a player by his score
// var player = players.find(player => player.score === 30)
// console.log('player: ', player)


// // remove a player from the array by his id

// var playerIdx = players.findIndex(player => player.id === id)
// players.splice(playerIdx, 1)

// console.log('players: ', players)


// // remove by id with filter
// players = players.filter(player => player.id !== id)
// console.log('players: ', players)


// // remove by score with filter
// players = players.filter(player => player.score !== 30)
// console.log('players: ', players)