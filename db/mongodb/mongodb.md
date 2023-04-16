# MongoDB 
[Run Commands](https://www.mongodb.com/docs/mongodb-shell/run-commands/)
[Methods](https://www.mongodb.com/docs/mongodb-shell/reference/methods/)

# install Node.js
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

# usage
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

# DBs and Collections
```bash
 > mongo
show dbs;
use my_db;
show collections
```


# Query
```javascript
db.customer.find();
db.customer.find().pretty();
db.customer.find({balance: 89});
db.customer.find({balance:{$gt:40 }});
db.customer.findOne({"_id":ObjectId("579c6ecab87b4b49be12664c")});
db.customer.find({$or: [{balance: {$gt: 40}},{fullName: 'A'}]}).pretty();
db.customer.find({'address.city': 'Boston'});
db.customer.find().sort({fullName: -1});
db.customer.find().count();
db.customer.find().limit(4);
```

# Add
```javascript
db.customer.insert({fullName: 'Madonna Sweet',balance: 32});
db.customer.insert({fullName: 'Shraga Puk',balance: 89});
db.customer.insert([{fullName: 'A',balance: 11}, {fullName: 'B',balance: 11}]);
db.customer.insert({fullName: 'Mick Jager', balance: 1132, address: {city: 'Boston'} })
```
# Remove
```javascript
db.customer.remove({balance: 0});
db.customer.remove({_id:ObjectId("579c6ecab87b4b49be12664c")});
db.customer.remove({balance: 11}, {justOne:true});
```

# Update
```javascript
// Replacing the found object (loosing the fullName)
db.customer.updateMany({ balance: 11 }, { balance: 20 });
// Just updating the balance:
db.customer.updateMany({ balance: 11 }, { $set: { balance: 20 } })
// Update one:
db.customer.updateOne({ "_id": ObjectId("579c6ecab87b4b49be12664c") },
 { $set: { balance: 20 } })
// In the real life we will have something like:
db.customer.updateOne({ "_id": ObjectId("579c6ecab87b4b49be12664c") },
 { $set: { ...updatedCustomer } })
```

# MORE
```javascript
// Insert if not exist in update
db.customer.update({ name: 'muki' }, { name: 'muki', price: 20 }, { upsert: true })
$or // https://docs.mongodb.com/manual/reference/operator/query/or
// everyone that has shmuli in his nicknames array
db.customer.find({ nicknames: 'Shmuli' })
db.customer.updateOne({ name: 'puki' }, { $inc: { price: 5 } })
// Add a user to Trip
db.trip.findOneAndUpdate({ _id: tripId },
{ $push: { interestedUsers: userId } },
{ returnNewDocument: true })

```
We can import the data directly to our DB by running (e.g. from Robo3T):
```javascript
db.getCollection('customer').insertMany([ arrayFromSomewhere ]);
```
# Accessing from NodeJS
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
