'use strict'
/* Exercise 52 - Monsters
 Create an array of monsters with 4 monsters (use a createMonsters() function).
 Each monster object should have the following keys –
 id – a unique sequential number
 name – a name that will be read from the user
 power a random number (1 - 100)
 Implement the following functions:
 createMonsters()
 createMonster(name, power) – returns a new monster object. The name and power parameters are optional – set them to default values if they aren’t passed to the function.
 getMonsterById(id) – scans the array for a monster with the provided id and returns it.
 deleteMonster(id) – the function removes the specified monster from the array.
 updateMonster(id, newPower) – the function updates the specified monster, setting a new power.
 Write the function: findMostPowerful(monsters).
 Write the function: breedMonsters(monsterId1, monsterId2). This function returns a new monster. The breeded monster's power is an average of its parents power. Its name is the beginning half of the first parent name, and the second half is the end of the second parent name. */
console.log('Exercise 52 - Monsters')

var gId = 101
var gMonsters = []

console.log('Creating 4 Monsters:', createMonsters(4))
console.log('GetMonsterById(101):', getMonsterById(101))
console.log('DeleteMonster(102):', deleteMonster(102), gMonsters)
console.log('UpdateMonster(103, 53):', updateMonster(103, 53))
console.log('FindMostPowerful(gMonsters):', findMostPowerful(gMonsters))
console.log('BreedMonsters(103, 104):')
console.log(breedMonsters(103, 104))

function createMonsters(num) {
    for (var i = 0; i < num; i++) {
        gMonsters.push(createMonster())
    }
    return gMonsters
}
function createMonster(name = getMonsterName(), power = getRandomPower()) {
    var monster = {
        id: gId++,
        monsterName: name,
        power: power
    }
    return monster
}
function getMonsterById(id) {
    for (var i = 0; i < gMonsters.length; i++) {
        if (gMonsters[i].id === id) return gMonsters[i]
    }
    return null
}

function deleteMonster(id) {
    var deletedMonster = getMonsterById(id)
    for (var i = 0; i < gMonsters.length; i++) {
        if (gMonsters[i].id === deletedMonster.id) gMonsters.splice(i, 1)
    }
}
function updateMonster(id, newPower) {
    var monster = getMonsterById(id)
    monster.power = newPower
    return monster
}
function findMostPowerful(monsters) {
    var mostPwrMonster = monsters[0]
    for (var i = 1; i < monsters.length; i++) {
        if (gMonsters[i].power > mostPwrMonster.power) mostPwrMonster = gMonsters[i]
    }
    return mostPwrMonster
}
function breedMonsters(monsterId1, monsterId2) {
    var monsterPapa = getMonsterById(monsterId1)
    var monsterMama = getMonsterById(monsterId2)
    var firstHalfName = monsterPapa.monsterName.slice(0, monsterPapa.monsterName.length / 2)
    var secHalfName = monsterMama.monsterName.slice(monsterPapa.monsterName.length / 2, 6)

    var newMonsterName = firstHalfName + secHalfName

    var newMonsterPwr = Math.round(((monsterPapa.power + monsterMama.power) / 2))
    var newMonster = createMonster(newMonsterName, newMonsterPwr)
    return newMonster
}
function getMonsterName() {
    var abc = 'abcdefghijklmnopqrstuvwxyz'
    var monsterName = ''
    for (var i = 0; i < getRandomIntInclusive(4, 6); i++) {
        monsterName += abc.charAt(getRandomIntInclusive(0, abc.length - 1))
    }
    return monsterName.replace(monsterName.charAt(0), monsterName.charAt(0).toUpperCase())
}
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function getRandomPower() { return getRandomIntInclusive(1, 100) }