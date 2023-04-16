<h1>Sequelize</h1>
Sequelize is an Object-Relational Mapping (ORM) library for Node.js.
It provides a simple and powerful way to interact with relational databases such as MySQL, PostgreSQL, and SQLite.
Sequelize uses models to represent tables in your database.

# Tip read the [Doc](https://sequelize.org/)
You are encouraged to run code examples locally while reading the Sequelize docs. This will help you learn faster. The easiest way to do this is using the SQLite dialect:
```javascript
const { Sequelize, Op, Model, DataTypes } = require("sequelize")
const sequelize = new Sequelize("sqlite::memory:")

// Code here! It works!
```

> ---
> **&excl; Support New and existing databases &#x2714;**
> 
> 
> ---
>- [install](#install)
>- [Connecting to a database](#connecting-to-a-database)
>  - [Testing connection:](#testing-connection)
>  - [Closing the connection](#closing-the-connection)
>- [PERSIST AND QUERY:](#persist-and-query)
>  - [Data Modeling](#data-modeling)
>  - [Syncing models](#syncing-models)
>- [Associations:](#associations)
>- [Soft deletion](#soft-deletion)
>- [Migrations](#migrations)
>- [Queries](#queries)
>- [Transactions](#transactions)
>- [Hooks](#hooks)
>- [Setting up a connection](#setting-up-a-connection)
>- [Define a model and perform CRUD operation](#define-a-model-and-perform-crud-operation)
>- [CRUD operations](#crud-operations)
>    - [Creating a record](#creating-a-record)
>    - [Reading records](#reading-records)
>    - [Updating records](#updating-records)
>    - [Deleting records](#deleting-records)

# install
MySQL:
```bash
npm install sequelize sqlite3
# or
yarn add sequelize sqlite3

npm install --save sequelize
```
You'll also have to manually install the driver for your database of choice:
```javascript
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database
```

# Connecting to a database <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

To connect to the database, you must create a Sequelize instance.
This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI:

```javascript
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
```

# Testing connection: <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

You can use the `.authenticate()` function to test if the connection is OK:

```javascript
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```

# Closing the connection <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Sequelize will keep the connection open by default, and use the same connection for all queries.

If you need to close the connection, call `sequelize.close()` (which is asynchronous and returns a Promise).
> **&excl;** Once `sequelize.close()` has been called, it's impossible to open a new connection. You will need to create a new Sequelize instance to access your database again.


# PERSIST AND QUERY: <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Model represents a table in a database.
Each model is defined using the sequelize define method, which takes a table name and a schema object that defines the columns in the table.
Models also define associations between tables, such as one-to-many and many-to-many relationships.
Define Models:

```javascript
import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:')
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
})
```
## Data Modeling <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Define your models with ease and make optional use of automatic database synchronization.
```javascript
const Wishlist = sequelize.define("Wishlist", {
  title: DataTypes.STRING,
})
const Wish = sequelize.define("Wish", {
  title: DataTypes.STRING,
  quantity: DataTypes.NUMBER,
})

// Automatically create all tables
await sequelize.sync()
```
## Syncing models <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Before you can use a model, you need to sync it with your database.

You can do this using the sync method:
```javascript
sequelize.sync()
  .then(() => {
    console.log('Database synced')
  })
```

# Associations: <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Sequelize supports several types of associations between models, such as one-to-one, one-to-many, and many-to-many. Associations are defined using the hasMany, belongsTo, and belongsToMany methods.
Define associations between models and let Sequelize handle the heavy lifting.
```javascript
Wish.belongsTo(Wishlist);
Wishlist.hasMany(Wish);

const wishlist = await Wishlist.findOne();
const wishes = await wishlist.getWishes();
const wish = await wishlist.createWish({ 
  title: 'Toys', quantity: 3,
});

await wishlist.removeWish(wish);
```

# Soft deletion <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Mark data as deleted instead of removing it once and for all from the database.
```javascript
const User = sequelize.define("User", 
  { username: DataTypes.STRING },
  { paranoid: true },
});

const user = await User.findOne();

await user.destroy();
await User.findAll(); // non-deleted only
await User.findAll({ paranoid: false }); // all
```

# Migrations <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Sequelize provides a mechanism for managing database schema changes using migrations. Migrations are JavaScript files that define changes to the database schema, such as creating or modifying tables and columns. Sequelize provides methods for running and reverting migrations.

# Queries <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Sequelize provides a set of methods for querying the database, such as findAll, findOne, create, update, and destroy. These methods allow you to perform CRUD operations on the database using JavaScript syntax.
```javascript
const jane = await User.create({
  username: 'janedoe',
  birthday: new Date(1980, 6, 20),
});

const users = await User.findAll();
```

# Transactions <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Sequelize supports transactions, which allow you to group multiple database operations into a single transaction that can be rolled back if any of the operations fail.

# Hooks <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>

Sequelize provides hooks, which are functions that are called before or after certain events occur, such as creating or updating a record. Hooks can be used to perform additional operations, such as validating data or sending notifications.

beforeCreate: Called before a new record is created in the database.
afterCreate: Called after a new record is created in the database.
beforeUpdate: Called before a record is updated in the database.
afterUpdate: Called after a record is updated in the database.
beforeDestroy: Called before a record is deleted from the database.
afterDestroy: Called after a record is deleted from the database.


# Setting up a connection <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>


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

# Define a model and perform CRUD operation <a href="#tip-for-reading-the-doc" style="float:right;">↑</a>


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