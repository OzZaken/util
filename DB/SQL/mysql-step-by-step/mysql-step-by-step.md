# Load database into MySQL Server using the mysql program.

## Step 1
Download the `mysqlsampledatabase` database from the MySQL sample database section.

## Step 2
save the downloaded file into a temporary folder.

You can use any folder you want, To make it simple, we will unzip the file to the `C:\temp`  folder.

## Step 3
Connect to the MySQL server using the `mysql` client program.

The `mysql` program is located in the `bin` directory of the MySQL installation folder.

> mysql -u root -p
Enter password: `********`
Code language: SQL (Structured Query Language) (`sql`)

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
| classicmodels      |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

In this tutorial, you have learned step by step how to load the sample database into MySQL server using the mysql tool.