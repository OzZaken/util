# pdfkit

## usage 
```javascript
const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));

doc.fontSize(25).text('Hello, World!', 100, 100);

doc.end();

```
 In this example, the prompt method is called with an array of questions to ask the user. Each question is an object with a type, name, and message property.

The type property specifies the type of question to ask (in this case, input). The name property is used to reference the user's response later on. The message property is the text displayed to the user when the question is asked.

The then method is called with a callback function that is executed once the user has provided a response. The answers object contains the user's responses, keyed by the name property of each question.