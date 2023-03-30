# ORM (Object Relational Mapping)

## Description 
technique that allows you to map data from a relational database to objects in your code. 
This helps to abstract away the complexities of working with a database, and makes it easier to work with your data in an object-oriented way.

## Mongoose

Mongoose is a popular ORM library for Node.js that allows you to interact with MongoDB databases. Here are some key concepts to understand when working with Mongoose:

- Schemas: A schema is a blueprint for defining the structure of your documents in MongoDB. You can define fields, their types, validation rules, and more in a schema.
- Models: A model is a JavaScript representation of a MongoDB collection. It allows you to perform CRUD operations on the collection, as well as define methods and statics for the documents.
- Queries: You can use Mongoose to build complex queries for retrieving data from MongoDB. Mongoose supports chaining query methods to build up complex queries, and also provides a fluent API for building aggregation pipelines.

Here's an example of how to define a schema and model in Mongoose:
```javascript
const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// Define a model
const User = mongoose.model('User', userSchema);

// Use the model to perform CRUD operations
const user = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password'
})

user.save((err, user) => {
  if (err) {
    console.error(err)
  } else {
    console.log(user)
  }
})

```

## Sequelize
Sequelize is an ORM library for Node.js that allows you to interact with SQL databases. Here are some key concepts to understand when working with Sequelize:
- Models: A model in Sequelize represents a table in your SQL database. You can define fields, their types, validation rules, and more in a model.
- Associations: Sequelize supports defining relationships between tables using associations. You can define one-to-one, one-to-many, and many-to-many relationships between tables.
- Queries: Sequelize provides a powerful query builder that allows you to build complex queries for retrieving data from your SQL database. You can use the query builder to build up complex queries using chained methods.

Here's an example of how to define a model and perform CRUD operations in Sequelize:

```javascript
const { Sequelize, DataTypes } = require('sequelize')

// Create a sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

// Define a model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// Use the model to perform CRUD operations
(async () => {
  await sequelize.sync({ force: true })

  const user = await User.create({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password'
  })

  console.log(user.toJSON())
})()

```