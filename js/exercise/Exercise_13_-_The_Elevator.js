"use strict"
/* Exercise 13 - The Elevator
 Keep a currentFloor variable, initialize it to 0
 Ask the user which floor would he like to go to.
 Validate the floor is between -2 and 4.
 Update the currentFloor variable accordingly.
 Let the user know his current floor.
 If the user goes to floor 0 alert 'Bye Bye'.
 If the user goes to the parking lot (negative floors) alert: 'Drive Safely'.
*/
console.log('Exercise 13 - The Elevator')

var currentFloor = 0,
    wantedFloor = +prompt('4  3\n2 1\n0\n-1 -2\nWhich floor would you like go to ?')

if (wantedFloor < 0) alert('Drive safely!'), console.log('current floor is:', currentFloor)
if (wantedFloor >= -2 && wantedFloor <= 4) currentFloor = wantedFloor
if (wantedFloor === 0) alert('Bye Bye!'), console.log('current floor is:', currentFloor)