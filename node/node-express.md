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