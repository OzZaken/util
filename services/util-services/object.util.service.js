function isObject(value) {
    return value !== null && typeof value === 'object'
}

function isEmptyObj(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false
    }
    return true
}

function objToQueryString(obj) {
    const keyValuePairs = []

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyValuePairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
        }
    }

    return keyValuePairs.join("&")
}

function isNullOrUndefined(value) {
    return value === null || value === undefined
}