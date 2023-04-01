"use strict"
/* Exercise 4 - Calculate Time
 Read a number from the user for distance and a number for speed and print the time.
 NOTE: Time = Distace / Speed */
console.log('Exercise 4 - Calculate Time')

var distance = +prompt('Enter distance in kn (Kilometer per hour)')
var speed = +prompt('Enter avarge km/h')
var time = distance / speed
console.log('Will Take about ' + time + ' hours.')