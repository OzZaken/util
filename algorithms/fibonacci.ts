function fibonacci(n: number): number[] {
    const result = [0, 1]

    for (let i = 2; i < n; i++) {
        const num = result[i - 1] + result[i - 2]
        result.push(num)
    }

    return result
}

// Example usage: `ts-node C:\dev\util\algorithms\fibonacci.ts`
const fibSequence = fibonacci(10)
console.log(fibSequence) // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]