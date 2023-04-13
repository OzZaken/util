'use strict'
/* Exercise 3 - Temperature converting
 Read a temperature in Celsius from the user, and print it converted to Fahrenheit.
 NOTE: F=C×1.8+32 */
console.log('Exercise 3 - Temperature convertion')

var celsius = +prompt('Temperature in Celsius')
var fahrenheit = celsius * 1.8 + 32
console.log('fahrenheit', fahrenheit)