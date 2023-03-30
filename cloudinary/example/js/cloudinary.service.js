/* Uploading an image to Cloudinary's API using some methods */

// vanilla  ~ `XMLHttpRequest`
function uploadImgXML(ev) {
    // Defining our variables...Later on process.env 
    const CLOUD_NAME = 'CLOUD_NAME' // Insert yours
    const UPLOAD_PRESET = 'UPLOAD_PRESET' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const xhr = new XMLHttpRequest()
    const formData = new FormData()

    // Building the request body
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', UPLOAD_PRESET)

    // Sending a post method request to Cloudniary's API
    xhr.open('POST', UPLOAD_URL, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const elImg = document.createElement('img')
            const res = JSON.parse(xhr.responseText)
            const { url } = res

            document.body.append(elImg)
            elImg.src = url
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
            console.error('ERROR!', xhr)
        }
    }
    xhr.send(formData)
}

// fetch ~ .then() and .catch()
function uploadImg2(ev) {
    const CLOUD_NAME = 'dmtlr2viw'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData()
    // console.log('target', ev.target)

    formData.append('file', ev.target.files[0])
    // console.log('ev.target.files[0]):', ev.target.files[0])

    formData.append('upload_preset', 'sbagxsff')
    // console.log('formData:', formData)

    fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })

        .then(res => res.json())
        .then(res => {
            console.log('res', res)

            const elImg = document.createElement('img')
            elImg.src = res.url
            document.body.append(elImg)
        })
        .catch(err => console.error(err))
}

// fetch ~ await 
const uploadImg = async (ev) => {
    // Defining our variables...Later on process.env 
    const CLOUD_NAME = 'CLOUD_NAME' // Insert yours
    const UPLOAD_PRESET = 'UPLOAD_PRESET' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData()

    // Building the request body
    FORM_DATA.append('file', ev.target.files[0])
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)

    // Sending a post method request to Cloudniary's API
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: FORM_DATA
        })
        const elImg = document.createElement('img')
        const { url } = await res.json()

        document.body.append(elImg)
        elImg.src = url

    } catch (err) {
        console.error('ERROR!', err)
    }
}

// axios ~ await 
const uploadImgAXIOS = async (ev) => {
    const CLOUD_NAME = 'CLOUD_NAME' // Insert yours
    const UPLOAD_PRESET = 'UPLOAD_PRESET' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData()
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', UPLOAD_PRESET)

    try {
        const res = await axios.post(UPLOAD_URL, formData)
        const elImg = document.createElement('img')
        const { url } = res.data

        document.body.append(elImg)
        elImg.src = url
    } catch (err) {
        console.error('ERROR!', err)
    }
}