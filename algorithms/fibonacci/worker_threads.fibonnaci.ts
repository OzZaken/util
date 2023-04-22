import { Worker, isMainThread, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

if (isMainThread) {
  const worker = new Worker(fileURLToPath(import.meta.url));
  worker.on('message', (result: number) => {
    console.log(`Fibonacci result: ${result}`);
  });

  worker.postMessage(40);
} else {
  parentPort?.on('message', (n: number) => {
    const result = fib(n);
    parentPort?.postMessage(result);
  });
}
