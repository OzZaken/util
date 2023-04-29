# Moment.js
JavaScript library for working with dates and times.
It provides an easy and intuitive way to parse, validate, manipulate, and display dates and times in JavaScript.

## Getting Started
https://momentjs.com/

To use Moment.js, you need to include the library in your project by downloading the latest version from Moment.js website or including it via a package manager like npm.
Copy code
`npm install moment`
Then, you can import the library in your JavaScript file or include it in your HTML file:
```php
<script src="path/to/moment.min.js"></script>
```

## Using Moment.js
Here is an example of how to use Moment.js to format a date:
```lua
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(date); // February 4th 2023, 12:00:00 pm
```
Copy code
<script src="path/to/moment.min.js"></script>

Here is an example of how to use Moment.js to format a date:

Copy code
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(date); // February 4th 2023, 12:00:00 pm
In this example, we use the moment() function to get the current date and time, and then use the format() method to specify the format we want to use. The format string uses various tokens, such as MMMM for the full month name and h for the 12-hour hour.

You can also use Moment.js to manipulate dates and perform operations such as adding or subtracting time units: