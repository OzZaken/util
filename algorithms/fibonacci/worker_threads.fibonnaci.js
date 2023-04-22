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