<h1>Application Programming Interface.</h1>

It is a set of protocols, tools, and routines for building software applications.
An API specifies how different software components should interact with each other, allowing different applications to communicate with each other.

API is a way for different applications to communicate with a web server.
An API typically uses HTTP requests to communicate with the server, and returns data in a format such as JSON or XML.

APIs are commonly used in web development for a variety of purposes, such as:

- Integrating different applications or services
- Enabling third-party developers to build applications on top of a platform
- Exposing data from a database or other data source to different applications or services
- Providing access to functionality or resources that would otherwise be unavailable to an application or service.

APIs can be designed and implemented in a variety of ways, depending on the specific use case and requirements.
# REST (Representational State Transfer)
is a common architectural style for building APIs, which involves using HTTP methods (GET, POST, PUT, DELETE) to manipulate resources on a web server.

API documentation typically includes information about the endpoints that are available, the parameters that can be passed to each endpoint, and the expected response format. This documentation is important for developers who are integrating with the API, as it provides guidance on how to use the API effectively.

# Base URL
The base URL for this API is:`https://example-api.com`.

# Authentication
All requests to this API require authentication using a JWT token.
To authenticate, send a POST request to /auth/login with your email and password in the request body.
The response will contain a JWT token that you can use in subsequent requests by including it in the `Authorization` header with the value `Bearer <token>`.

# Endpoints

### GET /users
This endpoint returns a list of all users in the system. To access this endpoint, send a GET request to /users.

Example response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com"
  }
]

```
### POST /users
This endpoint allows you to create a new user. To access this endpoint, send a POST request to /users with the user's name and email in the request body.

Example request:
```json
{
  "name": "Bob Johnson",
  "email": "bob@example.com"
}
```

```json
{
  "id": 3,
  "name": "Bob Johnson",
  "email": "bob@example.com"
}
```
### GET /users/:id
This endpoint returns information about a specific user. To access this endpoint, replace :id in the URL with the ID of the user you want to retrieve.

Example request: /users/1

Example response:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```
### PUT /users/:id
This endpoint allows you to update information about a specific user. To access this endpoint, replace :id in the URL with the ID of the user you want to update, and include the updated information in the request body.

Example request: /users/1
```json
{
  "name": "John Doe Jr.",
  "email": "john.doe.jr@example.com"
}
```
Example response:
```json
{
  "id": 1,
  "name": "John Doe Jr.",
  "email": "john.doe.jr@example.com"
}
```
### DELETE /users/:id
This endpoint allows you to delete a specific user. To access this endpoint, replace :id in the URL with the ID of the user you want to delete.

Example request: /users/1

Example response:
```json
{
  "message": "User with ID 1 has been deleted"
}
```
## GET /posts
This endpoint returns a list of all posts in the system.
To access this endpoint, send a GET request to /posts.

Example response:
```json
[ 
    {    
    "id": 1,    "user_id": 1,
    "title": "My First Post",
    "body": "This is the body of my first post." 
     },
    {
    "id": 2,
    "user_id": 2,
    "title": "My Second Post",
    "body": "This is the body of my second post."
     }
]
```