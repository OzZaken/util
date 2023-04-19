// ---------------   debounce: 
function delay(ms = 1500) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// ---------------   debounce:
function debounce1(func, wait) {
    let timeout
    // spread (...args) to capture any number of parameters we want to pass
    return function executedFunction(...args) {

        // The callback function to be executed after 
        // the debounce time has elapsed
        const later = () => {
            // null timeout to indicate the debounce ended
            timeout = null

            // Execute the callback
            func(...args)
        }
        // This will reset the waiting every function execution.
        // This is the step that prevents the function from
        // being executed because it will never reach the 
        // inside of the previous setTimeout  
        clearTimeout(timeout)

        // Restart the debounce waiting period.
        // setTimeout returns a truthy value (it differs in web vs Node)
        timeout = setTimeout(later, wait)
    }
}

function debounce(func, wait, isImmediate) {
    let timeout
    return function () {
        const context = this
        const args = arguments

        const later = function () {
            timeout = null
            if (!isImmediate) func.apply(context, args)
        }

        const callNow = isImmediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

// ---------------   Throttling:
// is a technique used in web development to limit the rate at which a particular function can be called.
// The idea is to prevent the function from being called more often than necessary, especially when the function involves expensive operations or network requests.
// example:
// search box on our website that sends an API request to fetch search results as the user types in the query.
// We don't want to overload the API server with too many requests, so we `throttle` the search function to only send a request once every 500 milliseconds.
//  This way, even if the user types in several characters quickly, only one request will be sent every 500 milliseconds, preventing a flood of requests.
function throttle1(func, limit) {
    let timeout
    return function (...args) {
        const context = this
        if (!timeout) {
            // if the function is not currently being throttled, call it immediately
            func.apply(context, args)
            timeout = setTimeout(() => {
                // after the specified time interval, clear the timeout and allow the function to be called again
                timeout = null
            }, limit)
        }
    }
}

function throttle(func, limit) {
    let timeoutId
    let lastExecTime = 0
    return function (...args) {
        const currentTime = Date.now()
        const timeSinceLastExec = currentTime - lastExecTime
        if (timeSinceLastExec >= limit) {
            func.apply(this, args)
            lastExecTime = currentTime
        } else {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                func.apply(this, args)
                lastExecTime = Date.now()
            }, limit - timeSinceLastExec)
        }
    }
}