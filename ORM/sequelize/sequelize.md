# Sequelize

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