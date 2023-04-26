# Node.js
built on the V8 JavaScript engine developed by Google, and it allows developers to write server-side JavaScript applications using a non-blocking, event-driven I/O model that makes it highly scalable and efficient. It has become increasingly popular in recent years for building server-side web applications, command-line tools, and other types of software that require server-side programming.

## [apis](https://nodejs.org/api/documentation.html)

## Globals
`global`.username = 'Oz'
`__dirname`full path to the directory


| **Installation and Version Check** | Command |
| Install Node.js | curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -; sudo apt-get install -y nodejs |
| Check Node.js version | node -v |

| **File Management **                | Command                         |
| ----------------------------------- | ------------------------------- |
| Create a Node.js file               | touch fileName.js               |
| Run a Node.js file                  | node fileName.js                |
| **NPM Package Management**          | Command                         |
| ---                                 | ---                             |
| Install a package                   | npm install packageName         |
| NPM init                            | npm init                        |
| NPM install with a specific version | npm install packageName@version |
| NPM update                          | npm update packageName          |
| NPM uninstall                       | npm uninstall packageName       |
| NPM list                            | npm list                        |
| NPM search                          | npm search packageName          |
| Creating global packages            | npm install packageName -g      |

| **Debugging, Read/Write Files, and Events** | Command                                                               |
| ------------------------------------------- | --------------------------------------------------------------------- |
| Debugging with Node.js                      | node --inspect fileName.js                                            |
| Reading and writing files with Node.js      | fs.readFileSync(fileName); fs.writeFileSync(fileName, data)           |
| Using events in Node.js                     | const EventEmitter = require('events'); emitter.emit(eventName, data) |

## Basic 

```javascript
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
// Async IO is very common in node
fs.readFile(fileName,[options],cb)
fs.stat(fileName,cb)
fs.watch(fileName,[options],cb)
```