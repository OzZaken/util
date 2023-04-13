const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

const dbName = '[DATABASE_NAME]' // 

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