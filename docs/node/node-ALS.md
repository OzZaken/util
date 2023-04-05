# Async Local Storage (ALS)
allows developers to store data in a context-specific manner. It is an extension of the Node.js async_hooks module, which provides a way to track asynchronous resources across asynchronous boundaries.

ALS provides a way to store data in a "local storage" that is specific to a given asynchronous context, such as a particular request in a web application. 

 This allows developers to pass data through multiple levels of callbacks or other asynchronous functions without having to manually pass the data as function arguments or store it globally.

 ```javascript
 const async_hooks = require('async_hooks')
const { AsyncLocalStorage } = require('async_hooks')

// Create an AsyncLocalStorage instance
const als = new AsyncLocalStorage()

// Use the AsyncLocalStorage instance to store data
function exampleAsyncFunction() {
  als.enterWith({ key: 'value' })

  setTimeout(() => {
    console.log(als.getStore()) // { key: 'value' }
  }, 1000)
}

// Wrap the async function in an async context
async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    const store = als.getStore()
    if (store)als.enterWith(store)
  },
  destroy(asyncId) {
    als.exit()
  }
}).enable()

exampleAsyncFunction()
```