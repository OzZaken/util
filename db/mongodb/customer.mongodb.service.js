const dbService = require('./mongo-db.service')
const { ObjectId } = require('mongodb')

module.exports = {
    add,     
    getById,  
    update,  
    remove,   
    query,    
}

async function query(filterBy = { txt: '' }) {
    const criteria = {}
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        criteria.fullName = { $regex: regex }
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: filterBy.minBalance }
    }
    try {
        const collection = await dbService.getCollection('customer')
        const customers = await collection.find(criteria).toArray()
        return customers
    } catch (err) {
        console.log('ERROR: cannot find customers')
        throw err
    }
}

async function getById(customerId) {
    try {
        const collection = await dbService.getCollection('customer')
        const customer = await collection.findOne({ _id: ObjectId(customerId) })
        return customer
    } catch (err) {
        console.log(`ERROR: cannot find customer ${customerId}`)
        throw err
    }
}

async function remove(customerId) {
    try {
        const collection = await dbService.getCollection('customer')
        return await collection.deleteOne({ _id: ObjectId(customerId) })
    } catch (err) {
        console.log(`ERROR: cannot remove customer ${customerId}`)
        throw err
    }
}

async function update(customer) {
    try {
        const collection = await dbService.getCollection('customer')
        await collection.updateOne({ _id: ObjectId(customer._id) }, { $set: customer })
        return customer
    } catch (err) {
        console.log(`ERROR: cannot update customer ${customer._id}`)
        throw err
    }
}

async function add(customer) {
    try {
        const collection = await dbService.getCollection('customer')
        await collection.insertOne(customer)
        return customer
    } catch (err) {
        console.log(`ERROR: cannot insert customer`)
        throw err
    }
}