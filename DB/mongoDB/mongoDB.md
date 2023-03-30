# MongoDB 
[Run Commands](https://www.mongodb.com/docs/mongodb-shell/run-commands/)
[Methods](https://www.mongodb.com/docs/mongodb-shell/reference/methods/)

## install Node.js
[Download community Server](https://www.mongodb.com/try/download/community)
or go to the [official website](https://nodejs.org) and download the appropriate installer for your operating system.
Once the installer has finished downloading, run it and follow the on-screen instructions to complete the installation.
After the installation is complete, open your terminal or command prompt and type:
```bash
node -v
```
to verify that Node.js has been installed successfully.

Add the MongoDB binary files to your system's PATH variable:

On Linux or macOS,
add the following line to your shell profile file (e.g. ~/.bashrc or ~/.zshrc):
```bash
export PATH=<mongodb-install-directory>/bin:$PATH
```

On Windows,
 add the following directory to your system's PATH environment variable:
```php
<mongodb-install-directory>\bin
```

## usage
Start the MongoDB server by running:

```node
mongod
```
This will start the server on the default port of 27017.

To verify that the server is running, open another terminal or command prompt and run the following command:
```bash
mongo
```
This will open the MongoDB shell, where you can run commands to interact with the server.

Accessing from terminal
```bash
 > mongo
    show dbs
    use car_db
    show collections
```

Accessing from NodeJS
```javascript
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'tester_db'

MongoClient.connect(url, (err, client) => {
if (err) return console.log('Cannot connect to DB')
console.log('Connected successfully to server')
const db = client.db(dbName)
const collection = db.collection('customer')

// Find some documents
collection.find({ balance: { $gte: 10 } }).toArray((err, docs) => {
if (err) return console.log('Cannot find customers')
console.log("Found the following records")
console.log(docs)
})

client.close()
})
```