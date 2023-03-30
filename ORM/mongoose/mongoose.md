
# Mongoose
Mongoose is a popular ORM library for Node.js that allows you to interact with MongoDB databases.
Here are some key concepts to understand:
 
- **Schemas**: A schema is a blueprint for defining the structure of your documents in MongoDB. You can define fields, their types, validation rules, and more in a schema.
- **Models**: A model is a JavaScript representation of a MongoDB collection. It allows you to perform CRUD operations on the collection, as well as define methods and statics for the documents.
- **Queries**: You can use Mongoose to build complex queries for retrieving data from MongoDB. Mongoose supports chaining query methods to build up complex queries, and also provides a fluent API for building aggregation pipelines.


# Working with Mongoose

## Connecting to a MongoDB database

| Action | Mongoose code |
| --- | --- |
| Connect to a MongoDB database | `mongoose.connect('mongodb://localhost/mydatabase');` |

## Defining a schema

| Action | Mongoose code |
| --- | --- |
| Define a Mongoose schema | ```const schema = new mongoose.Schema({field1: type1,field2: type2});``` |

## Compiling a model

| Action | Mongoose code |
| --- | --- |
| Compile a Mongoose model | `const Model = mongoose.model('ModelName', schema);` |

## Creating a document

| Action | Mongoose code |
| --- | --- |
| Create a new document | ```const doc = new Model({field1: value1,field2: value2,...});doc.save();``` |

## Updating a document

| Action | Mongoose code |
| --- | --- |
| Update a document | ```Model.updateOne({_id: id}, {$set: {field1: value1,field2: value2,...}});``` |

## Finding documents

| Action | Mongoose code |
| --- | --- |
| Find documents | ```Model.find({field1: value1,field2: value2,...})``` |

## Deleting documents

| Action | Mongoose code |
| --- | --- |
| Delete a document | ```Model.deleteOne({_id: id})``` |

# Mongoose Query Operators

## Comparison Operators

| Operator | Description                                                         | Example                                      |
| -------- | ------------------------------------------------------------------- | -------------------------------------------- |
| `$eq`    | Matches values that are equal to a specified value.                 | `{ field: { $eq: value } }`                  |
| `$ne`    | Matches all values that are not equal to a specified value.         | `{ field: { $ne: value } }`                  |
| `$gt`    | Matches values that are greater than a specified value.             | `{ field: { $gt: value } }`                  |
| `$gte`   | Matches values that are greater than or equal to a specified value. | `{ field: { $gte: value } }`                 |
| `$lt`    | Matches values that are less than a specified value.                | `{ field: { $lt: value } }`                  |
| `$lte`   | Matches values that are less than or equal to a specified value.    | `{ field: { $lte: value } }`                 |
| `$in`    | Matches any of the values specified in an array.                    | `{ field: { $in: [value1, value2, ...] } }`  |
| `$nin`   | Matches none of the values specified in an array.                   | `{ field: { $nin: [value1, value2, ...] } }` |

## Logical Operators

| Operator | Description                                                                                             | Example                                                |
| -------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `$or`    | Joins query clauses with a logical OR returns all documents that match the conditions of either clause. | `{ $or: [ { field1: value1 }, { field2: value2 } ] }`  |
| `$and`   | Joins query clauses with a logical AND returns all documents that match the conditions of both clauses. | `{ $and: [ { field1: value1 }, { field2: value2 } ] }` |
| `$not`   | Inverts the effect of a query expression and returns documents that do not match the query expression.  | `{ field: { $not: { $eq: value } } }`                  |

## Element Operators

| Operator  | Description                                            | Example                          |
| --------- | ------------------------------------------------------ | -------------------------------- |
| `$exists` | Matches documents that have the specified field.       | `{ field: { $exists: true } }`   |
| `$type`   | Selects documents if a field is of the specified type. | `{ field: { $type: "string" } }` |

## Array Operators

| Operator     | Description                                                                                | Example                                             |
| ------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| `$all`       | Matches arrays that contain all elements specified in the query.                           | `{ field: { $all: [value1, value2, ...] } }`        |
| `$elemMatch` | Matches documents that contain an array element that matches all specified query criteria. | `{ field: { $elemMatch: { nestedField: value } } }` |
| `$size`      | Matches arrays that have the specified number of elements.                                 | `{ field: { $size: value } }`                       |

## Regular Expression Operators

| Operator   | Description                                                          | Example                                           |
| ---------- | -------------------------------------------------------------------- | ------------------------------------------------- |
| `$regex`   | Selects documents where values match a specified regular expression. | `{ field: { $regex: /pattern/ } }`                |
| `$options` | Provides options for the `$regex` operator.                          | `{ field: { $regex: /pattern/, $options: 'i' } }` |

## Miscellaneous Operators

| Operator | Description                                                   | Example |
| -------- | ------------------------------------------------------------- | ------- |
| `$where` | Allows the use of a JavaScript expression to filter documents |

