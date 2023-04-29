## lodash
provides utility functions for common programming tasks. It helps you write clean and efficient code by offering a vast collection of functions to perform operations such as manipulating arrays, objects, and strings, testing values, creating functions and more.
## Doc:
https://lodash.com/docs/
## Basic Structure in use:
```javascript
_.funcName(argument,iteratee)
```

## Getting Started with Lodash
To use Lodash, you first need to install it in your project.
Once you have installed Lodash, you can import it into your code like this:
```javascript
const _ = require('lodash');
```
### using npm:
NOTE: i for install
```shell
`npm i --save lodash`
``` 

### in the Browser
```html
<script src="PATH/To/lib/lodash.js"></script>
```

### using node.js:
```javascript
// load modern build
var _ = require('lodash')
// load methods category
var array = require('lodash/array')
// or just methods 
var chunk = require('lodash/array/chunk')
```

## _.chunk
The _.chunk function splits an array into smaller arrays of a specified size.

```javascript
_.chunk(array, size);
```

```javascript
const array = [1, 2, 3, 4, 5];
const result = _.chunk(array, 2);
console.log(result);
// Output: [[1, 2], [3, 4], [5]]
```

## _.find
Find the first element in an array that satisfies a given condition.
```javascript
_.find([1, 2, 3, 4], (n)=> {
  return n % 2 == 0;
});
// 2
```

## _.filter
The _.filter function creates a new array with all elements that pass the test implemented by the provided function.

```javascript
_.filter(array, callback(element, index, array));
```

````javascript
const array = [1, 2, 3, 4, 5];
const result = _.filter(array, n => n % 2 === 0);
console.log(result);

// Output: [2, 4]

````

## _.get
Get a value at a given path in an object.
```javascript
const object = { 'a': [{ 'b': { 'c': 3 } }] };
_.get(object, 'a[0].b.c');
// 3

```

## _.set
 Set a value at a given path in an object.
 ```javascript
 const object = {};
 
_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// 4
```

## _.sum

## _.map
The _.map function creates a new array with the results of calling a provided function on every element in the original array.

```javascript
_.map(array, callback(element, index, array));


const array = [1, 2, 3, 4, 5];
const result = _.map(array, n => n * 2);
console.log(result);

// Output: [2, 4, 6, 8, 10]

```

## _.reduce
The _.reduce function reduces an array to a single value by iteratively combining elements using a callback function.

```javascript
_.reduce(array, callback(accumulator, currentValue, currentIndex, array), initialValue);

const array = [1, 2, 3, 4, 5];
const result = _.reduce(array, (sum, n) => sum + n, 0);
console.log(result);

// Output: 15

```

## _.sortBy
The _.sortBy function sorts an array in ascending order by the results of running each element through a callback function.

```javascript
_.sortBy(array, callback(element));

const array = [{name: 'John', age: 20}, {name: 'Jane', age: 22}, {name: 'Jim', age: 18}];
const result = _.sortBy(array, 'age');
console.log(result);

// Output: [{name: 'Jim', age: 18}, {name: 'John', age: 20}, {name: 'Jane', age: 22}]
```