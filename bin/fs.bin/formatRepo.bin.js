const fs = require('fs')
const path = require('path')
const readline = require('readline')

import { listDirectory } from '../modules/directory/list.directory'

let gRootDir = process.cwd()

// files to ignore format
const ignoreList = [
    'node_modules',
    '.git',
    '.gitignore',
    '.vscode',
    'socket.io-examples',
    'pdf',
    'public',
    'demo',
    'env',
    '.env'
]

let gIncludeSubFolders = true
let gFormatType = 'camelCaseFormat'
let gIsAddParentFolder = true
// askUser()
addGitIgnoreToIgnoreList()
formatFiles(gRootDir, gIncludeSubFolders, gFormatType, gIsAddParentFolder)

function askUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    rl.question(
        'Enter repository path to format or press Enter to execute from current location: ', (repoPath) => {
            gRootDir = repoPath ? repoPath : process.cwd()

            rl.question('Include subfolders? (y/n): ', (subfolders) => {
                gIncludeSubFolders =
                    subfolders.toLowerCase() === 'y' || subfolders.toLowerCase() === 'yes'

                rl.question('Choose format type (camelCaseFormat/snake_case_format/kebab-case-format/custom regex): ',
                    (formatType) => {
                        gFormatType = formatType

                        rl.question(
                            'Adding `.[PARENT_FOLDER_NAME]` folder name to the files? (y/n): ',
                            (addParentFolder) => {
                                gIsAddParentFolder =
                                    addParentFolder.toLowerCase() === 'y' || addParentFolder.toLowerCase() === 'yes'
                                rl.close()
                            }
                        )
                    }
                )
            })
        }
    )
}

// modified global variables
function askUser() {
    rl.question('Enter repository path to format or press Enter to execute from current location: ', (repoPath) => {
        gExecuteAtFolderPath = repoPath ? repoPath : process.cwd()

        rl.question('Include subfolders? (y/n): ', (subfolders) => {
            gIsContainsSubFolder = subfolders.toLowerCase() === 'y' || subfolders.toLowerCase() === 'yes'

            rl.question('Choose format type (camelCaseFormat/snake_case_format/kebab-case-format/custom regex): ', (formatType) => {
                gFormatType = formatType

                rl.question('Adding `.[PARENT_FOLDER_NAME]` folder name to the files? (y/n): ', (addParentFolder) => {
                    gIsAddParentFolder = addParentFolder.toLowerCase() === 'y' || addParentFolder.toLowerCase() === 'yes'

                    rl.close()
                })
            })
        })
    })
}

function formatFiles(rootDir, isIncludeSubFolders, formatType, isAddParentFolder) {
    const regex = getRegex(formatType)

    fs.readdir(rootDir, { withFileTypes: true }, (err, files) => {
        if (err) throw err

        files.forEach((file) => {
            const fileName = file.name
            if (shouldIgnore(fileName)) return

            const filePath = path.join(rootDir, fileName)
            if (file.isDirectory() && isIncludeSubFolders)
                formatFiles(filePath, true, formatType, isAddParentFolder)
            else {
                const newFileName = formatFileName(fileName, regex)
                const newPath = isAddParentFolder ? addParentFolderToPath(filePath) : filePath

                fs.rename(filePath, newPath + '/' + newFileName, (err) => {
                    if (err) throw err
                    console.log(`${fileName} => ${newFileName}`)
                })
            }
        })
    })
}

function getRegex(formatType) {
    switch (formatType) {
        case 'camelCaseFormat':
            return /([-_][a-z])/gi;
        case 'snake_case_format':
            return /([- ])/gi;
        case 'kebab-case-format':
            return /([_ ])/gi;
        case 'custom regex':
            // TODO: Implement custom regex
            return /([-_ ][a-z])/gi;
        default:
            throw new Error(`Invalid format type: ${formatType}`);
    }
}

function addParentFolderToPath(filePath) {
    const parentFolderName = path.basename(path.dirname(filePath))
    const newPath = path.join(path.dirname(filePath), `.${parentFolderName}`, path.basename(filePath))
    fs.mkdirSync(path.join(path.dirname(filePath), `.${parentFolderName}`), { recursive: true })
    return newPath
}

function formatFileName(fileName, regex) {
    return fileName.replace(regex, function (_, match) {
        return match.toUpperCase().replace(/[-_ ]/g, '')
    })
}

function addGitIgnoreToIgnoreList() {
    const scriptDir = gRootDir
    const files = fs.readdirSync(scriptDir)
    const gitIgnoreFiles = files.filter(file => file.match(/^\.gitignore(\..+)?$/)) //fileName.startsWith('.') || fileName.endsWith('.ignore')

    gitIgnoreFiles.forEach(file => {
        const contents = fs.readFileSync(path.join(scriptDir, file), 'utf8')
        const lines = contents.split('\n')
        lines.forEach(line => {
            line = line.trim()
            if (line && !ignoreList.includes(line)) ignoreList.push(line)
        })
    })
}

function formatFiles(rootDir, isSubfolders, formatType, isAddParentFolder) {
    const regex = getRegex(formatType)

    fs.readdir(rootDir, { withFileTypes: true }, (err, files) => {
        if (err) throw err

        files.forEach(file => {
            const fileName = file.name
            if (shouldIgnore(fileName)) return

            const filePath = path.join(rootDir, fileName)
            if (file.isDirectory() && isSubfolders) formatFiles(filePath, true, formatType, isAddParentFolder)

            else {
                const newFileName = formatFileName(fileName, regex)

                const newPath = isAddParentFolder ? addParentFolderToPath(filePath) : filePath

                fs.rename(filePath, newPath + '/' + newFileName, (err) => {
                    if (err) throw err
                    console.log(`${fileName} => ${newFileName}`)
                })
            }
        })
    })
}

function getRegex(formatType) {
    switch (formatType) {
        case 'camelFormat':
            return /([a-zA-Z0-9]+)[_-]([a-zA-Z0-9])/g
        case 'snake_format':
            return /([a-zA-Z0-9]+)[_-]([a-zA-Z0-9]+)/g
        case 'kebab-format':
            return /([a-zA-Z0-9]+)[ _-]([a-zA-Z0-9])/g
        default:
            return new RegExp(formatType, 'g')
    }
}

function shouldIgnore(fileName) {
    for (let i = 0; i < ignoreList.length; i++) {
        if (fileName.match(ignoreList[i])) return true
    }
    return false
}

function formatFileName(fileName, regex) {
    let newFileName = fileName.replaceAll('_', '').replaceAll(' ', '')
    newFileName = newFileName.replace(regex, '$1-$2')
    return newFileName
}

function addParentFolderToPath(filePath) {
    const parentFolder = path.basename(path.dirname(filePath))
    const fileName = path.parse(filePath).name
    const newPath = path.join(path.dirname(filePath), `${fileName}.${parentFolder}`)
    if (fs.existsSync(newPath)) return filePath
    else return newPath
}