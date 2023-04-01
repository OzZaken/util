var nums: number[] = _getNums()
const len: number = nums.length

console.log(`sorting ${len} numbers Array`, nums)
// methodSort: 7.595ms
// simpleSort: 62.962ms
// bubbleSort: 199.59ms
// mergeSort: 43.549ms
// insertionSort: 61.582ms
// selectionSort: 93.885ms
// quickSort: 6.814ms
// heapSort: 16.8ms
console.time('methodSort')
methodSort(_getNums())
console.timeEnd('methodSort')

console.time('simpleSort')
simpleSort(_getNums())
console.timeEnd('simpleSort')

console.time('bubbleSort')
bubbleSort(_getNums())
console.timeEnd('bubbleSort')

console.time('mergeSort')
mergeSort(_getNums())
console.timeEnd('mergeSort')

console.time('insertionSort')
insertionSort(_getNums())
console.timeEnd('insertionSort')

console.time('selectionSort')
selectionSort(_getNums())
console.timeEnd('selectionSort')

console.time('quickSort')
quickSort(_getNums())
console.timeEnd('quickSort')

console.time('heapSort')
heapSort(_getNums())
console.timeEnd('heapSort')

// Build js method 
function methodSort(nums: number[]): number[] {
    return nums.sort((a, b) => a - b)
}

// simple 
function simpleSort(nums: number[]): number[] {
    const sortArr: number[] = []
    const copyNums: number[] = nums.slice()
    for (let i = 0; i < nums.length; i++) {
        const minIdx = _getMinIdx(copyNums)
        const minNum = copyNums.splice(minIdx, 1)[0]
        sortArr.push(minNum)
    }
    return sortArr
}

function _getMinIdx(nums: number[]): number {
    let minNum = Infinity
    let minIdx = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minNum) {
            minNum = nums[i]
            minIdx = i
        }
    }
    return minIdx
}

// Bubble - O(n^2)
function bubbleSort(nums: number[]): number[] {
    const len = nums.length

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                // Swap adjacent elements if they are in the wrong order
                const temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
}

// Merge  - O(n*log(n))
function mergeSort(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);

    const left = nums.slice(0, mid);

    const right = nums.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    let sortArr: number[] = [];

    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortArr.push(left[i]);
            i++;
        } else {
            sortArr.push(right[j]);
            j++;
        }
    }
    return sortArr.concat(left.slice(i)).concat(right.slice(j));
}

function merge1(left: number[], right: number[]): number[] {
    let sortedArr: number[] = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) sortedArr.push(left.shift());
        else sortedArr.push(right.shift());
    }
    return [...sortedArr, ...left, ...right];
}

// Insertion  - O(n^2)
function insertionSort(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = current;
    }
    return nums;
}

// Selection  - O(n^2)
function selectionSort(nums: number[]): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) minIndex = j;
        }
        if (minIndex !== i) [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
}

// Quick  - O(n*log(n))
function quickSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums;
    }

    let pivot = nums[Math.floor(Math.random() * nums.length)];
    let left = [];
    let right = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else if (nums[i] > pivot) {
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Heap  - O(n*log(n))
function heapSort(nums: number[]): number[] {
    buildMaxHeap(nums);

    for (let i = nums.length - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        maxHeapify(nums, 0, i);
    }

    return nums;
}

function buildMaxHeap(nums: number[]): void {
    let n = nums.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(nums, i, n);
    }
}

function maxHeapify(nums: number[], i: number, n: number): void {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;

    if (left < n && nums[left] > nums[largest]) largest = left;

    if (right < n && nums[right] > nums[largest]) largest = right;

    if (largest !== i) {
        [nums[i], nums[largest]] = [nums[largest], nums[i]];
        maxHeapify(nums, largest, n);
    }
}

// Radix  - O(k*n) where k is the maximum number of digits in the input
function radixSort(nums: number[]): number[] {
    let maxDigits = getMaxDigits(nums);

    for (let i = 0; i < maxDigits; i++) {
        let buckets: number[][] = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            buckets[digit].push(nums[j]);
        }

        nums = buckets.flat();
    }

    return nums;
}

function getMaxDigits(nums: number[]): number {
    let max = 0;

    for (let num of nums) {
        max = Math.max(max, num.toString().length);
    }

    return max;
}

function getDigit(num: number, i: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function _getNums(): number[] {
    var longNums: number[] = [];
    for (let i = 0; i < 10000; i++) {
        longNums.push(Math.ceil(Math.random() * 99));
    }
    return longNums;
}