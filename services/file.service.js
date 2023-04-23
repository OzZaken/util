const fs = require('fs')
const { promisify } = require('util')
const writeFileAsync = promisify(fs.writeFile) 

export const fileService = {
    loadFromFile,
    saveToFileSync,
    saveToFileAsync,
    saveToFileFast,
}

function saveToFileFast(path, data) {
    const str = JSON.stringify(data)
    fs.writeFile(path, str, (err) => {
        if (err) throw err 
    })
}

// using try catch
function saveToFileSync(path, data) {
    const str = JSON.stringify(data)
    try {
        fs.writeFileSync(path, str)
    } catch (err) {
        throw err
    }
}

async function saveToFileAsync(path, data) {
    const str = JSON.stringify(data)
    try {
        await writeFileAsync(path, str)
    } catch (err) {
        throw err
    }
}

async function loadFromFile(name) {
    try {
        const data = await fs.promises.readFile(`data/${name}.json`, 'utf-8')
        return JSON.parse(data)
    } catch (err) {
        console.log(`Error loading file ${name}: ${err.message}`)
        throw err
    }
}