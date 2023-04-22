const fs = require('fs')
const readline = require('readline')
const path = require('path')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// format a file name based on user's choice of format type
function formatFileName(fileName, formatType) {

    // Replace all underscores with empty string
    let formattedName = fileName.replace(/_/g, '')

    // Add hyphens before and after sequences of digits
    formattedName = formattedName.replace(/(\d+)/g, '-$1-')

    // Remove any leading or trailing hyphens
    formattedName = formattedName.replace(/^-+|-+$/g, '')

    // Apply chosen format type
    switch (formatType) {
        case 'camelFormat':
            formattedName = formattedName.replace(/-([a-z])/g, (match, p1) => p1.toUpperCase())
            break
        case 'snake_format':
            formattedName = formattedName.replace(/-/g, '_')
            break
        case 'kebab-format':
            // already done in the previous steps
            break
        default:
            // basic format - do nothing
            break
    }
    return formattedName
}

// recursively search a directory and its subdirectories for files to format
function searchDirectory(directory, formatType, parentFolderName, includeSubfolders) {
    fs.readdir(directory, { withFileTypes: true }, (err, files) => {
        if (err) throw err
        files.forEach(file => {

            if (ignoreList.includes(file.name)) return // Ignore files in ignore list

            const filePath = path.join(directory, file.name)

            if (file.isDirectory() && includeSubfolders) searchDirectory(filePath, formatType, file.name, includeSubfolders)

            else {
                const formattedName = formatFileName(file.name, formatType)
                const newFilePath = path.join(directory, parentFolderName ? `${formattedName}.${parentFolderName}` : formattedName);
                fs.rename(filePath, newFilePath, (err) => {
                    if (err) throw err
                    console.log(`${filePath} renamed to ${newFilePath}`)
                })
            }
        })
    })
}

// Start prompting user for input
rl.question('Enter path to format: ', (directory) => {

    rl.question('Include subfolders? (yes/no): ', (answer) => {
        const includeSubfolders = answer.toLowerCase() === 'yes'
        rl.question('Choose format type (camelFormat/snake_format/kebab-format/custom): ', (formatType) => {

            rl.question('Add .[PARANT_FOLDER_NAME]? (yes/no): ', (answer) => {
                const addParentFolderName = answer.toLowerCase() === 'yes'
                searchDirectory(directory, formatType, addParentFolderName ? path.basename(directory) : null, includeSubfolders)
                rl.close()
            })
        })
    })
})