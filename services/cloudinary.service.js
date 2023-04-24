/* Uploads an image to Cloudinary, * returns a promise that resolves with the response data. */
async function uploadImg(ev) {
    const CLOUD_NAME = process.CLOUD_NAME
    const UPLOAD_PRESET = 'CHECK'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData()
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('file', ev.target.files[0])
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        return res.json()
    } catch (error) {
        console.error(error, 'upload failed')
    }
}
