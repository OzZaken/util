// The fs module is a CORE module of node
const fs = require('fs')

// demoSync()
demoAsync()

function demoSync() {
    const contents = fs.readFileSync('data/data.txt', 'utf8')
    console.log(contents)
}

function demoAsync() {
    fs.readFile('data/data.txt', 'utf8', (err, contents) => {
        if (err) return console.log('Cannot read file', err)
        console.log(contents)
    })
    console.log('after calling readFile')
}
