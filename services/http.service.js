import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:3030/api/'


var axios = Axios.create({
    withCredentials: true
})

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        if (err.response && err.response.status === 401) {
            sessionStorage.clear()
            // window.location.assign('/')
        }
        throw err
    }
}


// ---------------------------------   ajax   ---------------------------------  
// XHR
function fetchDataWithXHR(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status === 200) resolve(JSON.parse(xhr.responseText))
            else reject(Error(xhr.statusText))
        }

        xhr.onerror = () => reject(Error('Network Error'))

        xhr.send(body ? JSON.stringify(body) : null)
    })
}

// fetch
async function simpleFetch(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

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