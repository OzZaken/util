console.log('Hello Node, Hi Mongo')
const {MongoClient} = require('mongodb')

const customerService = require('./services/customer.service')
const url = 'mongodb://localhost:27017' // Connection URL
const dbName = '[DATABASE_NAME]' // Database Name

// tryMongo()
;(async () => {
    var customer = await customerService.getById('62cfd4eb0ddf1c657c994103')
    console.log('Got Customer: ', customer)

    // var customers = await customerService.query()
    // console.log('Got Customers: ', customers)

    // customer.balance += 100
    // var updatedCustomer = await customerService.update(customer)
    // console.log('Updated Customer: ', updatedCustomer)

    // const newCustomer = {fullName : 'Shumuts', balance: 220}

    // var addedCustomer = await customerService.add(newCustomer)
    // console.log('Added Customer: ', addedCustomer)

    const res = await customerService.remove('62cfd4eb0ddf1c657c994103')
    console.log('Customer Removed?', res)
})()


function tryMongo() {
    // Use connect method to connect to the server
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log('Cannot connect to DB')
        console.log('Connected successfully to server')
        const db = client.db(dbName)
        const collection = db.collection('customer')
        // Find some documents
        collection.find({ balance: { $gte: 10 } }).toArray((err, docs) => {
            if (err) return console.log('Cannot find customers')
            console.log('Found the following documents:')
            console.log(docs)
        })
        client.close()
    })
}