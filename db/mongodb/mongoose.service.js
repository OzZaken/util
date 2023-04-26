const mongoose = require('mongoose')

class MongooseService {
  constructor(connectionUri) {
    if (!connectionUri) {
      throw new Error('Connection URI is required');
    }
    this.connectionUri = connectionUri;
  }

  async connect() {
    await mongoose.connect(this.connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to MongoDB using Mongoose');
  }

  async disconnect() {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB using Mongoose');
  }

  async insertOne(model, data) {
    const document = new model(data);
    await document.save();
    console.log(`Inserted document with _id: ${document._id}`);
    return document._id;
  }

  async findOne(model, query) {
    const document = await model.findOne(query);
    console.log(`Found document: ${JSON.stringify(document)}`);
    return document;
  }

  async updateOne(model, query, update) {
    const result = await model.updateOne(query, update);
    console.log(`Updated ${result.nModified} document(s)`);
    return result.nModified;
  }

  async deleteOne(model, query) {
    const result = await model.deleteOne(query);
    console.log(`Deleted ${result.deletedCount} document(s)`);
    return result.deletedCount;
  }
}

module.exports = MongooseService