const { MongoClient } = require('mongodb');

class MongoDBService {
  constructor(connectionUri, databaseName) {
    if (!connectionUri) {
      throw new Error('Connection URI is required');
    }
    if (!databaseName) {
      throw new Error('Database name is required');
    }
    this.connectionUri = connectionUri;
    this.databaseName = databaseName;
    this.client = new MongoClient(connectionUri);
    this.db = null;
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db(this.databaseName);
    console.log('Connected to MongoDB');
  }

  async disconnect() {
    await this.client.close();
    console.log('Disconnected from MongoDB');
  }

  async insertOne(collectionName, document) {
    if (!this.db) {
      throw new Error('Not connected to MongoDB');
    }
    const collection = this.db.collection(collectionName);
    const result = await collection.insertOne(document);
    console.log(`Inserted document with _id: ${result.insertedId}`);
    return result.insertedId;
  }

  async findOne(collectionName, query) {
    if (!this.db) {
      throw new Error('Not connected to MongoDB');
    }
    const collection = this.db.collection(collectionName);
    const result = await collection.findOne(query);
    console.log(`Found document: ${JSON.stringify(result)}`);
    return result;
  }

  async updateOne(collectionName, query, update) {
    if (!this.db) {
      throw new Error('Not connected to MongoDB');
    }
    const collection = this.db.collection(collectionName);
    const result = await collection.updateOne(query, update);
    console.log(`Updated ${result.modifiedCount} document(s)`);
    return result.modifiedCount;
  }

  async deleteOne(collectionName, query) {
    if (!this.db) {
      throw new Error('Not connected to MongoDB');
    }
    const collection = this.db.collection(collectionName);
    const result = await collection.deleteOne(query);
    console.log(`Deleted ${result.deletedCount} document(s)`);
    return result.deletedCount;
  }
}

module.exports = MongoDBService;