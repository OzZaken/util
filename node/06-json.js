const fs = require('fs')
const data = require('./data/data.json')

console.log('Got Data', data)
getJSONFromFile('data/pet.json', handleError)


function handleError(err, data) {
    if (err) {
        console.log('Had issues:', err)
        return
    }
    console.log('Pets:', data)
}

function getJSONFromFile(filename, cb) {
    fs.readFile(filename, (err, data) => {
        if (err) return cb(err)
        var json
        try {
            json = JSON.parse(data)
        } catch (e) {
            return cb(e)
        }
        // everything went fine
        cb(null, json)  
    })
}
