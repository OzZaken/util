# MySQL
is a powerful open-source relational database management system that is widely used for web applications.
Here are some basic concepts and commands to get you started:
# basic usage
## CREATE DATABASE
To create a new database, use the CREATE DATABASE statement followed by the name of the database you want to create:
```sql
CREATE DATABASE mydatabase;
```

## Create a Table:
To create a new table in a database, use the CREATE TABLE statement followed by the name of the table and the columns you want to include:
```sql
CREATE TABLE mytable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age INT
);
```
In the above example, we created a table called "mytable" with columns for "id", "name", "email", and "age".
The "id" column is set to be the primary key and is automatically incremented with each new record.

## Insert Data:
To insert data into a table, use the INSERT INTO statement followed by the name of the table and the values you want to insert:

```sql
INSERT INTO mytable (name, email, age) VALUES ('John Doe', 'johndoe@example.com', 30);
```
In the above example, we inserted a new record into "mytable" with the name "John Doe", email "johndoe@example.com", and age "30".

## Select Data:
To retrieve data from a table, use the SELECT statement followed by the columns you want to retrieve and the name of the table:

```sql
SELECT * FROM mytable;
```

## Update Data:
To update data in a table, use the UPDATE statement followed by the name of the table, the column to update, and the new value:

```sql
UPDATE mytable SET age = 31 WHERE name = 'John Doe';
```

## Delete Data:
To delete data from a table, use the DELETE FROM statement followed by the name of the table and the condition for the records to delete:

```sql
DELETE FROM mytable WHERE age > 30;
```