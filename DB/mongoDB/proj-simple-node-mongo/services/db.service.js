
var dbConn = null

const MongoClient = require('mongodb').MongoClient
const dbName = '[DATABASE_NAME]' // Database Name

// Connection URL
const url = ( process.env.NODE_ENV === 'production') ?
    'mongodb+srv://theDbUser:camay2019@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority'
    : 'mongodb://localhost:27017'

async function _connect() {
    if (dbConn) return dbConn
    try {
        const client = await MongoClient.connect(url)
        const db = client.db(dbName)
        dbConn = db
        return db
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err
    }
}


async function getCollection(collectionName) {
    const db = await _connect()
    return db.collection(collectionName)
}

module.exports = { getCollection }