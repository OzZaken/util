var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nums = _getNums();
var len = nums.length;
console.log("sorting ".concat(len, " numbers Array"), nums);
// methodSort: 7.595ms
// simpleSort: 62.962ms
// bubbleSort: 199.59ms
// mergeSort: 43.549ms
// insertionSort: 61.582ms
// selectionSort: 93.885ms
// quickSort: 6.814ms
// heapSort: 16.8ms
console.time('methodSort');
methodSort(_getNums());
console.timeEnd('methodSort');
console.time('simpleSort');
simpleSort(_getNums());
console.timeEnd('simpleSort');
console.time('bubbleSort');
bubbleSort(_getNums());
console.timeEnd('bubbleSort');
console.time('mergeSort');
mergeSort(_getNums());
console.timeEnd('mergeSort');
console.time('insertionSort');
insertionSort(_getNums());
console.timeEnd('insertionSort');
console.time('selectionSort');
selectionSort(_getNums());
console.timeEnd('selectionSort');
console.time('quickSort');
quickSort(_getNums());
console.timeEnd('quickSort');
console.time('heapSort');
heapSort(_getNums());
console.timeEnd('heapSort');
// Build js method 
function methodSort(nums) {
    return nums.sort(function (a, b) { return a - b; });
}
// simple 
function simpleSort(nums) {
    var sortArr = [];
    var copyNums = nums.slice();
    for (var i = 0; i < nums.length; i++) {
        var minIdx = _getMinIdx(copyNums);
        var minNum = copyNums.splice(minIdx, 1)[0];
        sortArr.push(minNum);
    }
    return sortArr;
}
function _getMinIdx(nums) {
    var minNum = Infinity;
    var minIdx = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < minNum) {
            minNum = nums[i];
            minIdx = i;
        }
    }
    return minIdx;
}
// Bubble - O(n^2)
function bubbleSort(nums) {
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                // Swap adjacent elements if they are in the wrong order
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}
// Merge  - O(n*log(n))
function mergeSort(nums) {
    if (nums.length <= 1)
        return nums;
    var mid = Math.floor(nums.length / 2);
    var left = nums.slice(0, mid);
    var right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var sortArr = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortArr.push(left[i]);
            i++;
        }
        else {
            sortArr.push(right[j]);
            j++;
        }
    }
    return sortArr.concat(left.slice(i)).concat(right.slice(j));
}
function merge1(left, right) {
    var sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0])
            sortedArr.push(left.shift());
        else
            sortedArr.push(right.shift());
    }
    return __spreadArray(__spreadArray(__spreadArray([], sortedArr, true), left, true), right, true);
}
// Insertion  - O(n^2)
function insertionSort(nums) {
    for (var i = 1; i < nums.length; i++) {
        var current = nums[i];
        var j = i - 1;
        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = current;
    }
    return nums;
}
// Selection  - O(n^2)
function selectionSort(nums) {
    var _a;
    for (var i = 0; i < nums.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex])
                minIndex = j;
        }
        if (minIndex !== i)
            _a = [nums[minIndex], nums[i]], nums[i] = _a[0], nums[minIndex] = _a[1];
    }
    return nums;
}
// Quick  - O(n*log(n))
function quickSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    var pivot = nums[Math.floor(Math.random() * nums.length)];
    var left = [];
    var right = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        }
        else if (nums[i] > pivot) {
            right.push(nums[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
}
// Heap  - O(n*log(n))
function heapSort(nums) {
    var _a;
    buildMaxHeap(nums);
    for (var i = nums.length - 1; i > 0; i--) {
        _a = [nums[i], nums[0]], nums[0] = _a[0], nums[i] = _a[1];
        maxHeapify(nums, 0, i);
    }
    return nums;
}
function buildMaxHeap(nums) {
    var n = nums.length;
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(nums, i, n);
    }
}
function maxHeapify(nums, i, n) {
    var _a;
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;
    if (left < n && nums[left] > nums[largest])
        largest = left;
    if (right < n && nums[right] > nums[largest])
        largest = right;
    if (largest !== i) {
        _a = [nums[largest], nums[i]], nums[i] = _a[0], nums[largest] = _a[1];
        maxHeapify(nums, largest, n);
    }
}
// Radix  - O(k*n) where k is the maximum number of digits in the input
function radixSort(nums) {
    var maxDigits = getMaxDigits(nums);
    for (var i = 0; i < maxDigits; i++) {
        var buckets = Array.from({ length: 10 }, function () { return []; });
        for (var j = 0; j < nums.length; j++) {
            var digit = getDigit(nums[j], i);
            buckets[digit].push(nums[j]);
        }
        nums = buckets.flat();
    }
    return nums;
}
function getMaxDigits(nums) {
    var max = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        max = Math.max(max, num.toString().length);
    }
    return max;
}
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function _getNums() {
    var longNums = [];
    for (var i = 0; i < 10000; i++) {
        longNums.push(Math.ceil(Math.random() * 99));
    }
    return longNums;
}
