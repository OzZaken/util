'use strict'
/*//* Exercise 54 - Airline
 Build a data structure for an airline company with the enteties listed below. For each type of entity, define an object and implement a create function.
 A Plane object with the following keys:
 model
 seatCount
 Tip: implement createPlane(model, seatCount)
 A passenger object –
 id – composed of 7 random digits
 fullName
 flights – an array of pointers to the relevant flight objects
 A flight object –
 date
 departure – where the flights takes off from…
 destination – …and where it lands.
 plane – a pointer to a plane object
 passengers – an array of pointers to the relevant passenger objects
 Initialize all variables with consistent data – date should be 0, passengers should be an empty array, etc…
 Create an array of 5 passengers (gPassengers is a good name)
 Create an array of 2 planes.
 Create an array of 2 flights. Each flight should have a plane property that points to a plane object, and a passengers property that points to a passengers array.
 TIP: first create a passenger with an empty flights array, and the flight with an empty passengers array, and then connect them.
 Write the functions:
 bookFlight(flight, passenger) – this function connects between the pointers of the passengers and their flights.
 getFrequentFlyers() – returns the passengers with the maximal flights count.
 isFullyBooked(flight) – checks if all seats are booked, and returns true if they are. Where would it make sense to invoke this function?*/
console.log('Exercise 54 - Airline')

var gNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var gPassengers = createPassengers()
var gPlanes = []
var gFlights = []

gPlanes.push(createPlane('Boeing 737', 350))
gPlanes.push(createPlane('Boeing 800', 200))

gFlights.push(createFlight(new Date(2020, 5, 14), 'Israel', 'Italy', gPlanes[0], []))
gFlights.push(createFlight(new Date(2020, 5, 20), 'Italy', 'Israel', gPlanes[1], []))

bookFlight(gFlights[0], gPassengers[3])
bookFlight(gFlights[1], gPassengers[3])
bookFlight(gFlights[0], gPassengers[1])
bookFlight(gFlights[1], gPassengers[1])
bookFlight(gFlights[0], gPassengers[2])

console.log('gPassengers', gPassengers)
console.log('gPlanes', gPlanes)
console.log('gFlights', gFlights)
console.log(gFlights)
console.log('gPassengers', gPassengers)
console.log(getFrequentFlyers())

function createPassengers() {
    var passengers = []
    passengers.push(createPassenger('Yair Mizrahi', []))
    passengers.push(createPassenger('Shiran Abir', []))
    passengers.push(createPassenger('Moshe Israeli', []))
    passengers.push(createPassenger('Haim Cohen', []))
    passengers.push(createPassenger('Eyal Shani', []))
    return passengers
}
function createPassenger(fullName, flights) {
    return {
        id: getId(),
        fullName: fullName,
        flights: flights,
    }
}
function createPlane(model, seatCount) {
    var plane = {
        model: model,
        seatCount: seatCount,
    }

    return plane
}
function isFullyBooked(flight) {
    return (flight.passengers.length === flight.plane.seatCount)
}
function bookFlight(flight, passenger) {
    if (isFullyBooked(flight)) {
        console.log('Sorry were full')
        return
    }
    passenger.flights.push(flight)
    flight.passengers.push(passenger)
    console.log('Booked successfully!')
}
function getFrequentFlyers() {
    var maxFlightsCount = 0
    var maxFlightsPassengers = []
    for (var i = 0; i < gPassengers.length; i++) {
        var currPassenger = gPassengers[i]
        if (currPassenger.flights.length > maxFlightsCount) {
            maxFlightsCount = currPassenger.flights.length
            maxFlightsPassengers = [currPassenger]
        }
        else if (currPassenger.flights.length === maxFlightsCount) {
            maxFlightsPassengers.push(currPassenger)
        }
    }
    return maxFlightsPassengers
}
function createFlight(date, departure, destination, plane, passengers) {
    var flight = {
        date: date,
        departure: departure,
        destination: destination,
        plane: plane,
        passengers: passengers,
    }
    return flight
}
function getId() {
    var id = ''
    var idLength = 7
    for (var i = 0; i < idLength; i++) {
        var randIdx = getRandomInt(0, gNums.length)
        var num = gNums[randIdx]
        id = id + num
    }
    return id
}
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}