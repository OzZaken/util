https://nodejs.org/api/console.html#console

Creates a new Console with one or two writable stream instances. stdout is a writable stream to print log or info output. stderr is used for warning or error output. If stderr is not provided, stdout is used for stderr.

```javascript
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console
const count = 5;
logger.log('count: %d', count);
// In stdout.log: count 5
```