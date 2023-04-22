https://nodejs.org/api/readline.html

The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

To use the promise-based APIs:
```javascript
import * as readline from 'node:readline/promises';
```


To use the callback and sync APIs:
```javascript
import * as readline from 'node:readline';
```

The following simple example illustrates the basic use of the node:readline module.

```javascript
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();
```