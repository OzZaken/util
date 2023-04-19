const controller = {
    toggleDarkMode,
    delay,
    getQueryParam,
}

function render(template, data) {
    const regex = /{{\s*([a-zA-Z0-9_.-]+)\s*}}/g
    return template.replace(regex, (_, key) => {
        let value = data
        for (const part of key.split('.')) {
            value = value[part]
        }
        return value
    })
}
// ---------------------------------   ajax   ---------------------------------  
async function fetchData1(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// XHR
function fetchDataWithXHR(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function () {
            if (xhr.status === 200) resolve(JSON.parse(xhr.responseText))
            else reject(Error(xhr.statusText))
        }

        xhr.onerror = () => reject(Error('Network Error'))

        xhr.send(body ? JSON.stringify(body) : null)
    })
}

// fetch
async function fetchData(url, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (body) options.body = JSON.stringify(body)

    const response = await fetch(url, options)
    const data = await response.json()
    return data
}

// axios
async function fetchDataWithAxios(url, method = 'GET', body = null) {
    const options = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: body ? JSON.stringify(body) : null
    }
    const response = await axios(options)
    return response.data
}
// takes a HTML form element and returns an object with its form data serialized as key-value pairs.
function serializeForm(formElement) {
    const formData = new FormData(formElement)
    const serialized = {};
    for (const [key, value] of formData.entries()) {
        serialized[key] = value
    }
    return serialized
}

async function downloadFile(url, filename) {
    const response = await fetch(url)
    const blob = await response.blob()
    const urlObject = window.URL || window.webkitURL || window
    const url = urlObject.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    urlObject.revokeObjectURL(url)
}

// ---------------------------------   Theme   ---------------------------------  
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

function toggleTheme() {
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme')
}

// ---------------------------------   queryParams   ---------------------------------  
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
}
function getQueryParams(url) {
    const queryString = url.split('?')[1]
    const queryParams = {}
    if (queryString) {
        const pairs = queryString.split('&')
        for (const pair of pairs) {
            const [key, value] = pair.split('=')
            queryParams[key] = decodeURIComponent(value)
        }
    }
    return queryParams
}

//  takes a URL and returns an object with its query parameters parsed as key-value pairs.
function getQueryParams(url) {

    const queryString = url.split('?')[1]

    if (!queryString) return {}

    return queryString.split('&').reduce((params, param) => {
        const [key, value] = param.split('=')
        params[key] = decodeURIComponent(value)
        return params
    }, {})
}