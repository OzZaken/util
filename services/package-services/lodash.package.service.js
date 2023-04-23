import _ from 'lodash'

export function flatMapDeep(collection, iteratee) {
  return _.flatMapDeep(collection, iteratee)
}

export function groupBy(collection, iteratee) {
  return _.groupBy(collection, iteratee)
}

export function debounce(func, wait, options) {
  return _.debounce(func, wait, options)
}

export function memoize(func, resolver) {
  return _.memoize(func, resolver)
}

export function times(n, iteratee) {
  return _.times(n, iteratee)
}

export function range(start, end, step) {
  return _.range(start, end, step)
}

export function uniqueId(prefix) {
  return _.uniqueId(prefix)
}

// ---------------------------------   Tests   ---------------------------------  
// import { flatMapDeep, groupBy, debounce, memoize, times, range, uniqueId } from './lodash.service.js'

const numbers = [1, 2, 3, 4, 5]
const flattenedNumbers = flatMapDeep(numbers, (n) => [n, n * 2])
console.log(flattenedNumbers); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']
const groupedNames = groupBy(names, (name) => name[0])
console.log(groupedNames) // { A: ['Alice'], B: ['Bob'], C: ['Charlie'], D: ['Dave'], E: ['Eve'] }

const debouncedFunction = debounce(() => console.log('Hello, World!'), 1000)
debouncedFunction() // (waits 1 second) Hello, World!

const memoizedFunction = memoize((a, b) => a + b)
console.log(memoizedFunction(1, 2)) // 3
console.log(memoizedFunction(1, 2)) // (returns cached result) 3

const squares = times(5, (n) => n * n)
console.log(squares); // [0, 1, 4, 9, 16]

const rangeValues = range(1, 10, 2)
console.log(rangeValues) // [1, 3, 5, 7, 9]

const uniqueIdValue = uniqueId('prefix')
console.log(uniqueIdValue) // 'prefix
