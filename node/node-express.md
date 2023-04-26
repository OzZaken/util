# Express

Express is a popular Node.js framework that allows developers to easily create web applications and APIs.
It provides a set of robust features for building web applications, including:

- Routing: Express allows you to define routes for your web application or API, making it easy to handle HTTP requests and responses.

- Middleware: Express provides middleware functions that can be used to add functionality to your web application or API, such as authentication and logging.

- Templating: Express supports a variety of templating engines, making it easy to render dynamic views.

To use Express, you first need to install it using npm. You can do this by running the following command in your terminal:

```bash
npm install express
```


Once you have installed Express, you can create a new Express application by requiring the `express` module and calling the `express` function. Here's an example:

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => {
res.send('Hello, World!')
})

app.listen(3000, () => {
console.log('Server is listening on port 3000')
})
```

Functions that have access to:
the request object (req),
• the response object (res)
• and the next middleware function in the application’s requestresponse cycle.

Middleware functions can perform the following tasks:
Make changes to the request and the response objects.
• End the request-response cycle.
• Call the next middleware function in the chain.

• If the current middleware function does not end the request-response cycle,
it must call next() to pass control to the next middleware function.
Otherwise, the request will be left hanging.

# Express Middleware

Middleware is software that sits between different components of a system and manages communication between them.
In the context of web development, middleware is often used to handle requests and responses between the client and the server.

In the Express.js framework, middleware is a powerful tool that allows developers to add functionality to their application by modifying the request or response objects before they are processed by the main application code.
Middleware can be used for a wide variety of tasks, including authentication, logging, error handling, and more.

### Writing Middleware in Express

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

### Types of Middleware
There are two types of middleware in Express: application-level middleware and router-level middleware.

#### 01.Application-level Middleware
  Application-level middleware is bound to an instance of the express object, and is used to define middleware that applies to all routes in an Express app.
```javascript
// Define an application-level middleware function that sets a custom header
app.use((req, res, next) => {
  res.setHeader('X-My-Custom-Header', 'Hello, World!')
  next()
})
```

#### 02.Router-level Middleware
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


# Templating in Express.js

Templating in Express.js is the process of rendering dynamic content by combining static templates with dynamic data.

It allows you to generate HTML pages dynamically based on the data provided by the server.

Express.js supports several templating engines, including `EJS`, `Pug`, `Handlebars`, and `Mustache`.

Each of these engines has its own syntax and features, but they all share the same basic concept:

Template file with placeholders that are replaced with dynamic data at runtime.

## Installing Templating Engines

```bash
npm install ejs --save
```

## Configuring Templating Engine in Express.js
Once you've installed a templating engine, you need to configure it in your Express.js application.
You can do this by calling the app.set() method and passing in the name of the setting and its value. Here's an example of how to configure EJS:

```javascript
const express = require('express')
const app = express()

// Set the view engine to use EJS
app.set('view engine', 'ejs')
```

# Using Templating Engine in Express.js
To render a view using a templating engine, you can use the res.render() method.
This method takes two arguments: the name of the view file (without the extension) and an object containing the dynamic data to be passed to the view.
Here's an example of how to render an EJS view:

```javascript
app.get('/', (req, res) => {
  const data = {
    title: 'My Page',
    message: 'Welcome to my page!'
  }
  res.render('index', data)
})
```

In this example, the index.ejs file would be located in the views directory of your Express.js project. It would contain placeholders for the title and message variables, which would be replaced with the values provided by the data object at runtime.

# Templating Engine Syntax
The syntax of the templating engine you choose will depend on which engine you are using.

One reason for this is that templating engines are often simpler and easier to learn than full-blown front-end frameworks.

They can be a good choice for smaller projects or for developers who are just getting started with web development.

In addition, many back-end web frameworks, such as Express.js for Node.js, have built-in support for templating engines.

This makes it easy to integrate them into your application and use them to render dynamic content.

Another advantage of templating engines is that they can improve the SEO (search engine optimization) of your web pages.

Since templating engines generate HTML on the server, the resulting HTML can be easily crawled and indexed by search engines.

This is not always the case with single-page applications that rely heavily on client-side JavaScript.

---
Here are a few examples of syntax for some popular templating engines:

### `EJS`
EJS uses embedded **JavaScript** to define dynamic content.
Here's an example of how to define a dynamic variable in EJS:
```html
<h1><%= title %></h1>
```
In this example, the title variable is wrapped in the <%= %> tags to indicate that it should be replaced with dynamic content at runtime.
### `Pug`
Pug (formerly known as Jade) uses indentation and white space to define HTML structure.
Here's an example of how to define a dynamic variable in Pug:
```pug
h1= title
```
### `Handlebars`
Handlebars uses curly braces and hash signs to define dynamic content. Here's an example of how to define a dynamic variable in Handlebars:
```html
<h1>{{title}}</h1>
```
### `Mustache`
Mustache uses double curly braces to define dynamic content. Here's an example of how to define a dynamic variable in Mustache:
```html
<h1>{{title}}</h1>
```