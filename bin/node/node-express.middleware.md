# Express Middleware

Middleware is software that sits between different components of a system and manages communication between them.
In the context of web development, middleware is often used to handle requests and responses between the client and the server.

In the Express.js framework, middleware is a powerful tool that allows developers to add functionality to their application by modifying the request or response objects before they are processed by the main application code.
Middleware can be used for a wide variety of tasks, including authentication, logging, error handling, and more.

## Writing Middleware in Express

Middleware functions in Express have access to the `request` and `response` objects, as well as a `next` function that is used to pass control to the next middleware function in the chain. 

Middleware can be written as standalone functions or classes, and they are typically executed in the order that they are registered. To register a middleware function with an Express app, you can use the `app.use` method.

Here's an example of how middleware might be used in an Express.js application:

```javascript
const express = require('express')
const app = express()

// Define a middleware function that logs all incoming requests
const logRequestsMiddleware = (req, res, next) => {
  console.log(`Incoming request to ${req.path}`)
  next()
}

// Register the middleware function with the Express app
app.use(logRequestsMiddleware)

// Define a route handler for GET requests to the root path
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})


```

In this example, the logRequestsMiddleware function logs all incoming requests to the console, and the app.use method is used to register the middleware function with the Express app. The app.get method defines a route handler for GET requests to the root path, and the app.listen method starts the server.

## Types of Middleware
There are two types of middleware in Express: application-level middleware and router-level middleware.

### 01.Application-level Middleware
  Application-level middleware is bound to an instance of the express object, and is used to define middleware that applies to all routes in an Express app.
```javascript
// Define an application-level middleware function that sets a custom header
app.use((req, res, next) => {
  res.setHeader('X-My-Custom-Header', 'Hello, World!')
  next()
})
```

### 02.Router-level Middleware
Router-level middleware is bound to an instance of the express.Router object, and is used to define middleware that applies to specific routes in an Express app.

Here's an example of how to define router-level middleware:
```javascript
const express = require('express')
const router = express.Router()

// Define a router-level middleware function that logs all incoming requests
router.use((req, res, next) => {
  console.log(`Incoming request to ${req.path}`)
  next()
})

// Define a route handler for GET requests to the root path
router.get('/', (req, res) => {
  res.send('Hello, World!')
})

module.exports = router
```
n this example, the router.use method is used to define router-level middleware that logs all incoming requests to the console. The router.get method defines a route handler for GET requests to the root path, and the module.exports statement exports the router so that it can be used in other files.