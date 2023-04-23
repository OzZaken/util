/** The Fisher-Yates algorithm, also known as the Knuth shuffle,
 *  is an algorithm for generating a random permutation of an array. The algorithm works by iterating through the array from the last element to the first, and swapping each element with a random element that comes before it.
 * @param {Array} arr 
 * @returns {Number}
steps of the algorithm:
01.Start at the last element of the array (index n-1).
02.Generate a random index j between 0 and n-1 (inclusive).
03.Swap the element at index j with the element at the current index (i.e., the last element on the first iteration, the second-to-last element on the second iteration, and so on).
04.Decrement the current index by 1.
If the current index is greater than or equal to 0, go back to step 2.
05.The algorithm runs in O(n) time, where n is the length of the array, because it requires one pass through the array and swaps at most n elements.
 */
function shuffleFisher(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

// if .flat() stop to exits
function getFlatten(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), [])
}

//  Returns an array of unique values from the input array.
function getUniqueValues(arr) {
    return Array.from(new Set(arr))
}

function shuffleArr(arr) {
    return arr.sort(() => Math.random() - 0.5)
}