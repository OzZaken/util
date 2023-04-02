# Sequelize
Sequelize is an Object-Relational Mapping (ORM) library for Node.js.
It provides a simple and powerful way to interact with relational databases such as MySQL, PostgreSQL, and SQLite.

# key features and concepts of SQL Sequelize
Sequelize uses models to represent tables in your database.
You define a model using the define method:

# Models:
Model represents a table in a database.
Each model is defined using the sequelize define method, which takes a table name and a schema object that defines the columns in the table.
Models also define associations between tables, such as one-to-many and many-to-many relationships.
# Associations:
Sequelize supports several types of associations between models, such as one-to-one, one-to-many, and many-to-many. Associations are defined using the hasMany, belongsTo, and belongsToMany methods.
# Migrations
Sequelize provides a mechanism for managing database schema changes using migrations. Migrations are JavaScript files that define changes to the database schema, such as creating or modifying tables and columns. Sequelize provides methods for running and reverting migrations.
# Queries
Sequelize provides a set of methods for querying the database, such as findAll, findOne, create, update, and destroy. These methods allow you to perform CRUD operations on the database using JavaScript syntax.## Installation
# Transactions
Sequelize supports transactions, which allow you to group multiple database operations into a single transaction that can be rolled back if any of the operations fail.

# Hooks
Sequelize provides hooks, which are functions that are called before or after certain events occur, such as creating or updating a record. Hooks can be used to perform additional operations, such as validating data or sending notifications.

beforeCreate: Called before a new record is created in the database.
afterCreate: Called after a new record is created in the database.
beforeUpdate: Called before a record is updated in the database.
afterUpdate: Called after a record is updated in the database.
beforeDestroy: Called before a record is deleted from the database.
afterDestroy: Called after a record is deleted from the database.

# install
MySQL:
```bash
npm install mysql2
npm install sequelize

```

# Setting up a connection

To use Sequelize, you'll need to create a connection to your database.
You can do this using the `Sequelize` constructor:

Replace database, username, and password with your database credentials:
```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost'
})
```

# Define a model and perform CRUD operation

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

# Syncing models
Before you can use a model, you need to sync it with your database. You can do this using the sync method:
```javascript
sequelize.sync()
  .then(() => {
    console.log('Database synced')
  })
```

# CRUD operations

### Creating a record
```javascript
User.create({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com'
})
  .then(user => {
    console.log(user.toJSON());
  })
```

### Reading records
This retrieves all users from the User table.

```javascript
User.findAll()
  .then(users => {
    console.log(users.map(user => user.toJSON()))
  })

```
This retrieves the user with the specified primary key.

```javascript
User.findByPk(1)
  .then(user => {
    console.log(user.toJSON())
  })

```
### Updating records
This updates the last name of the user with the specified first name.

```javascript
User.update({ lastName: 'Smith' }, {
  where: {
    firstName: 'John'
  }
})
  .then(() => {
    console.log('User updated')
  })

```
### Deleting records

```javascript
User.destroy({
  where: {
    lastName: 'Doe'
  }
})
  .then(() => {
    console.log('User deleted')
  })

```