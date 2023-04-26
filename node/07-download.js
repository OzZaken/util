const fs = require('fs')
const request = require('request')

const url = 'https://i.pinimg.com/originals/01/62/4a/01624a1b21d9557f45667802439c2589.gif'
download(url, 'downloads/horse.gif')
    .then(() => {
        console.log('File downloaded!')
    })


function download(url, fileName) {
    return new Promise((resolve, reject) => {
        request(url)
            .pipe(fs.createWriteStream(fileName))
            .on('close', resolve)
            .on('error', reject)
    })

}