const fs = require('fs')
const path = require('path')
const readline = require('readline')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//  default 
const DEMO_FOLDER_NAME = 'demo'

var gRootDemoFolder = path.join(process.cwd(), DEMO_FOLDER_NAME)
var gIncludeDemoFormat = true
var gIncludeDemoData = true
var gIncludeDemoFiles = true

// delete folder if already exists 
if (fs.existsSync(DEMO_FOLDER_NAME)) {
    fs.rmdirSync(gRootDemoFolder, { recursive: true })
    console.log(`Deleted exits ${DEMO_FOLDER_NAME} folder.`)
}
fs.mkdirSync(gRootDemoFolder)

// optional
promptIncludeDemos()

init() 

function promptIncludeDemos() {
    rl.question('Include all demo folders? (y/n): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            gIncludeDemoFormat = true
            gIncludeDemoData = true
            gIncludeDemoFiles = true
        } else if (answer.toLowerCase() === 'n') {
            rl.question('Include demo-format? (y/n): ', (answer) => {
                gIncludeDemoFormat = answer.toLowerCase() === 'y'

                rl.question('Include demo-data? (y/n): ', (answer) => {
                    gIncludeDemoData = answer.toLowerCase() === 'y'

                    rl.question('Include demo-files? (y/n): ', (answer) => {
                        gIncludeDemoFiles = answer.toLowerCase() === 'y'
                        rl.close()
                    })
                })
            })
        } else {
            console.log('Invalid input. Please enter y/n.')
            promptIncludeDemos()
        }
    })
}

function init() {
    gIncludeDemoFormat && _createDemoFormat()
    gIncludeDemoData && _createDemoData()
    gIncludeDemoFiles && _createDemoFiles()
}

async function _createDemoFormat() {
    const demoFormatFolderPath = path.join(gRootDemoFolder, 'demo-format')
    fs.mkdirSync(demoFormatFolderPath)
    console.log(' `demo-format` Created')
    // Create files with different naming conventions
    const formatFileNames = ['demo_snake_case.txt', 'demo-kebab-case.txt', 'demoCamelCase.txt']
    for (const fileName of formatFileNames) {
        const filePath = path.join(demoFormatFolderPath, fileName)
        const content = `This is a ${fileName} file.`
        await writeFile(filePath, content)
    }

}

async function _createDemoData() {
    const demoDataPath = path.join(gRootDemoFolder, 'demo-data');
    fs.mkdirSync(demoDataPath);
    console.log('Created demo-data folder.');
    // Create JSON files with user data
    const userFileNames = ['users_1.json', 'users_2.json', 'users_3.json']
    for (const fileName of userFileNames) {
        const filePath = path.join(demoUserFolderPath, fileName)
        const users = generateUsers();
        await writeFile(filePath, JSON.stringify(users, null, 2))
    }
}

function _createDemoFiles() {
    const demoFilesPath = path.join(gRootDemoFolder, 'demo-files')
    fs.mkdirSync(demoFilesPath)
    console.log('`demo-files` Created')
}