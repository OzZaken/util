https://nodejs.org/api/worker_threads.html


The worker_threads module is a built-in Node.js module that allows developers to create and run JavaScript code in separate threads (workers). This can be useful for running CPU-intensive tasks without blocking the main Node.js event loop, which can improve the performance and responsiveness of your Node.js application.


```javascript
const { Worker } = require('worker_threads');

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', (n) => {
    const result = fib(n);
    parentPort.postMessage(result);
  });
`);

worker.on('message', (result) => {
  console.log(`Fibonacci result: ${result}`);
});

worker.postMessage(40);

```