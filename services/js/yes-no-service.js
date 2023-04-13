'use strict'
// vanilla
function ask(cb) {
    const xhr = new XMLHttpRequest()
    console.log('XMLHttpRequest', XMLHttpRequest)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            cb(res)
        }
    }
    xhr.open('GET', 'https://yesno.wtf/api', true)
    xhr.send();
}
// fetch
function askVerbose() {
    const prm = fetch('https://yesno.wtf/api')
   
    const data = prm.then((res) => {
        const prmAns = res.json()
        return prmAns.then((ans) => ans)
    })
    
    return data
}
// JQuery
function jQueryAsk(cb) {
    $.get('https://yesno.wtf/api', cb)
}


// Axios
function axiosAsk() {
    return axios.get('https://yesno.wtf/api').then((res) => res.data)
}

function axiosAskVerbose() {

    const prm = axios.get('https://yesno.wtf/api')
    console.log('prm', prm)
    const prmRes = prm.then((res) => res.data)
    console.log('prmRes', prmRes)
    return prmRes

}