export function debounce(func, delay) {
    let timerInterval
    return function (...args) {
        clearTimeout(timerInterval)
        timerInterval = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

export function throttle(func, limit) {
    let inThrottle = false
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args)
            inThrottle = true
            setTimeout(() => {
                inThrottle = false
            }, limit)
        }
    }
}

export function debounceAndThrottle(func, debounceDelay, throttleInterval) {
    let lastInvokeTime = 0;
    let invokeCount = 0;
    let timeout;

    return function executedFunction(...args) {
        const now = Date.now()
        const elapsedTime = now - lastInvokeTime

        clearTimeout(timeout)

        if (elapsedTime > throttleInterval) {
            lastInvokeTime = now
            invokeCount = 0
            func(...args)
        }
        else if (invokeCount === 0) {
            timeout = setTimeout(() => {
                lastInvokeTime = Date.now()
                invokeCount = 0
                func(...args)
            }, debounceDelay)
        }

        invokeCount++
        if (invokeCount >= 2) lastInvokeTime = Date.now()
    }
}