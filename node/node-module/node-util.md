

## Promisification
The util.promisify() method converts a callback-based function into a Promise-based function:
```javascript
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

readFile('file.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

## Inheritance
The util.inherits() method is used to inherit the prototype methods from one constructor into another:

```javascript
function Animal() {
  this.name = 'Animal';
}

Animal.prototype.sayName = function() {
  console.log(this.name);
};

function Dog() {
  Animal.call(this);
  this.name = 'Dog';
}

util.inherits(Dog, Animal);

const dog = new Dog();
dog.sayName(); // 'Dog'
```

## Debugging
The util.debuglog() method is used to create a function that conditionally writes to stderr based on the existence of a NODE_DEBUG environment variable:

```javascript
const debug = util.debuglog('myapp');

debug('Starting myapp...');

// To enable debugging for the 'myapp' module:
// $ NODE_DEBUG=myapp node app.js

```

## Formatting
The util.format() method is used to format a string using placeholders:

```javascript
const name = 'John';
const age = 30;

const message = util.format('%s is %d years old.', name, age);
console.log(message); // 'John is 30 years old.'
```

## Deprecation
The util.deprecate() method is used to mark a function as deprecated and log a warning message when it is called:

```javascript
function oldFn() {
  console.log('This function is deprecated.');
}

const newFn = util.deprecate(oldFn, 'Please use newFn() instead.');

oldFn(); // 'This function is deprecated.'
newFn(); // 'This function is deprecated. Please use newFn() instead.'
```