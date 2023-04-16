# Inquirer.js
library for creating command-line interfaces (CLIs) in Node.js. It provides a simple and intuitive way to prompt users for input, validate their responses, and handle the resulting data.

## Usage
To use Inquirer.js in your Node.js application, you need to require the module and create a new instance of the inquirer class:

```javascript
const inquirer = require('inquirer');
```

Once you have an instance of inquirer, you can use it to prompt the user for input using a variety of question types, such as input, confirm, list, checkbox, and more.

Here's an example of how to prompt the user for their name using the input question type:

```javascript
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.name}!`);
  });

```
In this example, the prompt method is called with an array of questions to ask the user. Each question is an object with a type, name, and message property.

The type property specifies the type of question to ask (in this case, input). The name property is used to reference the user's response later on. The message property is the text displayed to the user when the question is asked.

The then method is called with a callback function that is executed once the user has provided a response. The answers object contains the user's responses, keyed by the name property of each question.