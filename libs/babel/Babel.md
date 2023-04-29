Babel is a JavaScript compiler that converts modern JavaScript syntax (ES6, ES7, etc) into code that can be understood by older browsers. It allows developers to use the latest JavaScript features and still ensure compatibility with older browsers.

```html
<head> 
<script src="lib/react.development"></script>
<script src="lib/react-dom.development"></script>


</head>
<body> 

<script type="module/babel" data-presets="ca-preset" src="app.js"></script>
<script src="lib/babel.js"></script>
<script src="lib/babel-preset.js"></script>
    
</body>
```