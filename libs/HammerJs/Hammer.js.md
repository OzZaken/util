# Hammer.js
Popular JavaScript library for handling touch gestures and even mouse events in a consistent manner across different devices and platforms. It provides an easy way to bind touch events to a specific DOM element and recognize gestures such as swipe, pinch, rotate, and tap.

## Getting Started
To use Hammer.js, you need to include the library in your project by downloading the latest version from GitHub or including it via a package manager like npm.
npm install hammerjs

Then, you can import the library in your JavaScript file or include it in your HTML file:

```php
<script src="path/to/hammer.min.js"></script>
```

## Using Hammer.js
Here is an example of how to use Hammer.js to detect swipe gestures on a specific DOM element:
```javascript
var element = document.getElementById('element')
var hammer = new Hammer(element)
hammer.on('swipe', (event) => {
  console.log(event)
})
```