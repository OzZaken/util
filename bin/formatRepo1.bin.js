const fs = require('fs')
const path = require('path')
const readline = require('readline')

const ignoreRegex = /^(node_modules|.git)$/ // specify files or folders to ignore using regex

const formatName = name => {
    name = name.replace(/_/g, '').replace(/ /g, '') // remove underscores and spaces
    name = name.replace(/(\d+)(?!$)/g, '$1-') // add hyphen before sequence of digits
    name = name.replace(/(?<!^)(\d+)/g, '-$1') // add hyphen after sequence of digits
    return name
}

const prompt = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close()
            resolve(answer)
        })
    })
}
const formatFilesInFolder = async (folderPath, includeSubFolders, formatType, addParentFolder) => {
    const files = fs.readdirSync(folderPath)

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);

        if (
            stats.isDirectory()
            && includeSubFolders
            && !ignoreRegex.test(file)
        ) await formatFilesInFolder(filePath, includeSubFolders, formatType, addParentFolder)

        else {

            if (!ignoreRegex.test(file)) {
                const fileExt = path.extname(filePath)
                const fileName = path.basename(filePath, fileExt)
                let newName = formatName(fileName)

                switch (formatType) {
                    case 'camelFormat':
                        newName = newName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
                        break;
                    case 'snake_format':
                        newName = newName.replace(/-/g, '_')
                        break;
                    case 'kebab-format':
                        // already in kebab-format
                        break;
                    default:
                        // basic format
                        break;
                }

                if (addParentFolder) {
                    const parentFolder = path.basename(path.dirname(filePath))
                    newName += `.[${parentFolder}]`
                }

                newName += fileExt
                const newFilePath = path.join(folderPath, newName)
                fs.renameSync(filePath, newFilePath)
            }
        }
    }
}

const main = async () => {
    const folderPath = await prompt('Enter the path of the folder to format (e.g. C:\\util): ');
    const includeSubFoldersInput = await prompt('Include sub-folders? (yes/no): ');
    const includeSubFolders = includeSubFoldersInput.toLowerCase() === 'yes';
    const formatType = await prompt('Enter the format type (camelFormat/snake_format/kebab-format/basic): ');
    const addParentFolderInput = await prompt('Add parent folder name to file name? (yes/no): ');
    const addParentFolder = addParentFolderInput.toLowerCase() === 'yes';

    await formatFilesInFolder(folderPath, includeSubFolders, formatType, addParentFolder);
    console.log('Formatting complete.');
}

main()