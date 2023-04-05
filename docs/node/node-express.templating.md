## Templating in Express.js

Templating in Express.js is the process of rendering dynamic content by combining static templates with dynamic data.
It allows you to generate HTML pages dynamically based on the data provided by the server.

Express.js supports several templating engines, including EJS, Pug, Handlebars, and Mustache.
Each of these engines has its own syntax and features, but they all share the same basic concept: a template file with placeholders that are replaced with dynamic data at runtime.

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

## Using Templating Engine in Express.js
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

## Templating Engine Syntax
The syntax of the templating engine you choose will depend on which engine you are using. Here are a few examples of syntax for some popular templating engines:

One reason for this is that templating engines are often simpler and easier to learn than full-blown front-end frameworks. They can be a good choice for smaller projects or for developers who are just getting started with web development.

In addition, many back-end web frameworks, such as Express.js for Node.js, have built-in support for templating engines. This makes it easy to integrate them into your application and use them to render dynamic content.

Another advantage of templating engines is that they can improve the SEO (search engine optimization) of your web pages. Since templating engines generate HTML on the server, the resulting HTML can be easily crawled and indexed by search engines. This is not always the case with single-page applications that rely heavily on client-side JavaScript.
### EJS
EJS uses embedded **JavaScript** to define dynamic content.
Here's an example of how to define a dynamic variable in EJS:
```html
<h1><%= title %></h1>
```
In this example, the title variable is wrapped in the <%= %> tags to indicate that it should be replaced with dynamic content at runtime.
### Pug
Pug (formerly known as Jade) uses indentation and white space to define HTML structure.
Here's an example of how to define a dynamic variable in Pug:
```pug
h1= title
```
### Handlebars
Handlebars uses curly braces and hash signs to define dynamic content. Here's an example of how to define a dynamic variable in Handlebars:
```html
<h1>{{title}}</h1>
```
### Mustache
Mustache uses double curly braces to define dynamic content. Here's an example of how to define a dynamic variable in Mustache:
```html
<h1>{{title}}</h1>
```