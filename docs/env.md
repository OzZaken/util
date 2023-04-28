# .env
A `.env` file is a configuration file that is commonly used in web development projects to store environment variables.

Environment variables are key-value pairs that contain sensitive information, such as `API keys`, `database credentials`, and other configurations that should not be hard-coded into the codebase.

## benefit

1. `Security`: By storing sensitive information in a .env file, you can ensure that this information is not exposed to unauthorized users who may have access to your codebase.

2. `Scalability`: Environment variables can change depending on the environment where the application is deployed. Using a .env file allows you to easily change these variables without modifying your codebase.

3. `Collaboration`: By using a .env file, developers can share the same codebase without sharing sensitive information.

## Usage

1. Create a .env file in the root directory of your project.

2. Add your environment variables to the .env file in the following format:
3. 
```makefile
VAR_NAME=var_value
```

For example:

```makefile
DB_HOST=localhost
DB_PORT=5432
DB_NAME=my_database
DB_USER=my_username
DB_PASSWORD=my_password
```

In your code, access the environment variables by using the process.env object.

For example, to access the DB_HOST variable in Node.js:
```javascript
const dbHost = process.env.DB_HOST;
```