# mysql-sample-db

Sample MySQL and MariaDB database data that can be used for upgrade testing.

Database structure and data are taken from [mysqltutorial.org](http://www.mysqltutorial.org/mysql-sample-database.aspx) and the database is initialized with the `mysqld` daemon of particular version.

The initialized data of a particular version are kept in corresponding branch.

The MySQL sample database schema consists of the following tables:

- Customers: stores customer’s data.
- Products: stores a list of scale model cars.
- ProductLines: stores a list of product line categories.
- Orders: stores sales orders placed by customers.
- OrderDetails: stores sales order line items for each sales order.
- Payments: stores payments made by customers based on their accounts.
- Employees: stores all employee information as well as the organization structure such as who reports to whom.
- Offices: stores sales office data.


Such data can be used for various tasks, for example testing upgrade.

Generation of the data can be done using `./mysql-sample-db generate` and the data are stored into `./data`.

Validity of the data can be checked using `./mysql-sample-db check` script.


# Load database into MySQL Server using the mysql program.

## Step 1
Download the `mysqlsampledatabase`.

## Step 2
save the downloaded file into a temporary folder.

You can use any folder you want, To make it simple, we will unzip the file to the `C:\temp`  folder.

## Step 3
Connect to the MySQL server using the `mysql` client program.

The `mysql` program is located in the `bin` directory of the MySQL installation folder.

> mysql -u root -p
Enter password: 

You will need to enter the password for the `root` user account to log in.

## Step 4
Use the source command to load data into the MySQL Server:

```bash
mysql> source c:\temp\mysqlsampledatabase.sql
Code language: SQL (Structured Query Language) (sql)
```


## Step 5
Use the SHOW DATABASES command to list all databases in the current server:

mysql> show databases;
Code language: SQL (Structured Query Language) (sql)
The output will look like the following that includes the newly created classicmodels database:

```sql
+--------------------+
| Database           |
+--------------------+
| `classicmodels`      |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

## Step 6 [mysql-basics](https://www.mysqltutorial.org/mysql-basics/)