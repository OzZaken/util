export const utilService = {
    // controller
    toggleDarkMode,
    delay,
    debounce,
    getQueryParam,
    // Array
    shuffleArr,
    shuffleFisher,
    getUniqueValues,
    getFlatten,
    // Object
    isObject,
    objToQueryString,
    // make
    makeId,
    makeLorem,
    makeChart,
    // format
    timeAgo,
    getFormatDate,
    getFormatTime,
    // random
    getRandomDate,
    getRandomColor,
    // math
    getRandomIntInclusive,
    getRandomFloatInclusive,
    formatFixedNum,
    // string
    padZero,
    getCapitalize,
    getCamelCase,
    getKebabCase,
    getNumWithCommas,
    getKebabFromCamel,
    getTitleCase,
    getCamelFromKebab,
    isValidEmail,
    isValidDate,
    isValidTime,
}

//  ---------------------------------   /* controller */   ---------------------------------  \\ 
function delay(ms = 1500) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function toggleDarkMode() {
    const elDarkModeSwitch = document.querySelector('#dark-mode-switch')

    const currentTheme = document.documentElement.getAttribute('data-theme')
    const isDarkMode = (currentTheme === 'dark')

    // Switch between `dark` and `light`
    const switchToTheme = isDarkMode ? 'light' : 'dark'
    elDarkModeSwitch.checked = !isDarkMode
    // Set our currenet theme to the new one
    document.documentElement.setAttribute('data-theme', switchToTheme)
    saveSettings({ isDarkMode: switchToTheme })
}

function debounce1(func, wait) {
    let timeout

    // This is the function that is returned and will be executed many times
    // We spread (...args) to capture any number of parameters we want to pass
    return function executedFunction(...args) {

        // The callback function to be executed after 
        // the debounce time has elapsed
        const later = () => {
            // null timeout to indicate the debounce ended
            timeout = null;

            // Execute the callback
            func(...args);
        };
        // This will reset the waiting every function execution.
        // This is the step that prevents the function from
        // being executed because it will never reach the 
        // inside of the previous setTimeout  
        clearTimeout(timeout);

        // Restart the debounce waiting period.
        // setTimeout returns a truthy value (it differs in web vs Node)
        timeout = setTimeout(later, wait);
    };
}

function debounce(func, wait, immediate) {
    let timeout
    return function () {
        const context = this
        const args = arguments

        const later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
}

//  ---------------------------------   /* array */   ---------------------------------  \\ 
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

/** Returns an array of unique values from the input array.
 * @param {Array} arr - Input array
 * @returns {Array} - Array of unique values
 */
function getUniqueValues(arr) {
    return Array.from(new Set(arr))
}
//  ---------------------------------   /* object */   ---------------------------------  \\ 
function isObject(value) {
    return value !== null && typeof value === 'object'
}

function objToQueryString(obj) {
    const keyValuePairs = []

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyValuePairs.push(
                encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
            )
        }
    }

    return keyValuePairs.join("&")
}

function shuffleArr(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

//  ---------------------------------   /* Date & Time */   ---------------------------------  \\ 

/* human-readable string that represents the time difference in terms of:
  years, months, weeks, days, hours, minutes, or seconds 
  (depending on the largest time range that the difference fits into).
  examples: if the function is called on March 26, 2023 at 10:30:00 AM UTC, the output could be:
  "in 1 year" if the ms parameter is set to March 26, 2024 at 10:30:00 AM UTC.
  "1 year ago" if the ms parameter is set to March 26, 2022 at 10:30:00 AM UTC.
  "in 6 months" if the ms parameter is set to September 26, 2023 at 10:30:00 AM UTC.
  "6 months ago", "in 2 weeks", "2 weeks ago" etc.*/
function timeAgo(ms = new Date()) {
    const date = ms instanceof Date ? ms : new Date(ms)
    const formatter = new Intl.RelativeTimeFormat('en')

    const ranges = {
        years: 3600 * 24 * 365,
        months: 3600 * 24 * 30,
        weeks: 3600 * 24 * 7,
        days: 3600 * 24,
        hours: 3600,
        minutes: 60,
        seconds: 1,
    }
    // calculates the time difference between the ms parameter and the current date.
    const secondsElapsed = (date.getTime() - Date.now()) / 1000


    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key]
            let time = formatter.format(Math.round(delta), key)
            if (time.includes('in')) {
                time = time.replace('in ', '')
                time = time.replace('ago', '')
                time += ' ago'
            }
            return time
        }
    }
}

// YYYY-MM-DD format.
function getFormatDate(millisecond) {
    const valueDate = new Date(millisecond)
    return `${valueDate.getFullYear()}-${(valueDate.getMonth() + 1 + '').padStart(2, '0')}-${(valueDate.getDate() + '').padStart(2, '0')}`
}

// HH:MM format.
function getFormatTime(millisecond) {
    const valueTime = new Date(millisecond)
    return `${(valueTime.getHours() + '').padStart(2, '0')}:${(valueTime.getMinutes() + '').padStart(2, '0')}`
}

//  ---------------------------------   /* Random */   ---------------------------------  \\ 
function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeChart(labels, label, data) {
    const backgroundColor = (data) => {
        const backgroundColors = []
        const borderColors = []
        for (let i = 0; i < data.length; i++) {
            backgroundColors.push(getRandomColor())
            borderColors.push(getRandomColor())
        }
    }

    return {
        labels,
        datasets: [{
            label,
            data,
            backgroundColor,
            borderColor,
            borderWidth: 1
        }]
    }
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    //The maximum is inclusive and the minimum is inclusive 
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomFloatInclusive(min, max, decimals) {
    return +((Math.random() * (max - min)) + min).toFixed(decimals)
}

function formatFixedNum(num, toFixed = 2) {
    return +num.toFixed(toFixed)
}
/* Random */
function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// from 01/01/2020 until today
function getRandomDate(start = new Date(2020, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime()
}
//  ---------------------------------   /* Sting */   ---------------------------------  \\ 
// Pads a number with zeros to a certain length.
function padZero(num, size = 2) {
    let s = num + ""
    while (s.length < size) s = "0" + s
    return s
}
function getCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getNumWithCommas(str) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function getKebabCase(str) {
    return str.map(prop => {
        const regex = /[^A-Za-z0-9]+/g
        return prop.toLowerCase().replace(regex, '-')
    })
}

function getCamelCase(str) {
    return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

function getKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

function getTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
//  ---------------------------------   /* Validation */   ---------------------------------  \\ 

function isValidEmail(str) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return regex.test(str)
}

function isValidDate(str) {
    const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
    return regex.test(str)
}

function isValidTime(str) {
    const regex = /^(0?[1-9]|1[0-2]):[0-5]\d\s(am|pm)$/i
    return regex.test(str)
}

/** Explanation:
 * Start with a letter (both upper and lowercase) or a number
 * Have a length of at least 2 characters and at most 21 characters
 * Do not have consecutive dots, underscores, or hyphens.
 * Do not start or end with a dot, underscore, or hyphen. */
function isValidUsername(str) {
    const regex = /^(?=[a-zA-Z0-9])(?!.*[-_.]{2})[a-zA-Z0-9._-]{2,21}(?<![.-])$/
    return regex.test(str)
}

/** different type of passwords for different types of users:
 * user: at least 8 characters with at least one lowercase letter, one uppercase letter, and one number.
 * host: at least 12 characters with at least one lowercase letter, one uppercase letter, one number, and one special character ($, @, !, %, *, ?, or &).
 * admin: level password, I've included a regex that requires at least one lowercase letter, one uppercase letter, one digit, one special character, and a minimum length of 12 characters.*/
function isValidPass(str, passLvl = 'user') {
    let regex

    if (passLvl === 'user') regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    else if (passLvl === 'host') regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:<,.>?[\]\\\/])[a-zA-Z\d!@#$%^&*()\-_=+{};:<,.>?[\]\\\/]{8,}$/
    else if (passLvl === 'admin') regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:<,.>?[\]\\\/])[a-zA-Z\d!@#$%^&*()\-_=+{};:<,.>?[\]\\\/]{12,}$/
    else throw new Error(`Invalid passLvl parameter: ${passLvl}`)

    return regex.test(str)
}

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

function isEmptyObj(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}