const fs = require('fs')

// read the package.json file
const packageData = fs.readFileSync('./package.json')

// parse the JSON data
const packageJSON = JSON.parse(packageData)

// create a new file 
const outputFilename = 'PACKAGE.md'
const stream = fs.createWriteStream(outputFilename)

// write the dependencies list to the file
stream.write('# Dependencies:\n')
let depCount = 1
for (const dependency in packageJSON.dependencies) {
  stream.write(`${depCount}. ${dependency}: ${packageJSON.dependencies[dependency]}\n`)
  depCount++
}

// write the scripts list to the file
stream.write('\n# Scripts:\n')
let scriptCount = 1
for (const script in packageJSON.scripts) {
  stream.write(`${scriptCount}. ${script}: ${packageJSON.scripts[script]}\n`)
  scriptCount++
}

// close the file stream
stream.end()

console.log(`The ${outputFilename} file has been created.`)
