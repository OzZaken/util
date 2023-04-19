`cookie-parser` is a middleware for the Node.js Express framework that parses incoming cookies and makes them available in the request object.
It provides an easy way to handle cookies in a Node.js application, allowing you to read, write, and delete cookies with a simple API.

It is a third-party library that needs to be installed via npm before use. Once installed, you can use cookie-parser in your Express application by including it as middleware in your app.js file or equivalent:
```javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
```

This allows you to access cookies from incoming requests and set cookies in outgoing responses using the req.cookies and res.cookie() methods, respectively.

For example, you could use the following code to retrieve a cookie value and set a new cookie:

```javascript
const cookieParser = require('cookie-parser')
app.use(cookieParser())

var visited = req.cookies.visitCount
```