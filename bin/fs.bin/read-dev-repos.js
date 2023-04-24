const fs = require('fs')
const path = require('path')

const rootDir = 'c:/dev'

const isGitIgnoreExists = (folderPath) => {
    const gitignorePath = path.join(folderPath, '.gitignore')
    return fs.existsSync(gitignorePath)
}

const logColor = {
    danger: '\x1b[31m%s\x1b[0m',
    warn: '\x1b[33m%s\x1b[0m',
    info: '\x1b[34m%s\x1b[0m',
}

const log = (msg, color) => console.log(color, msg)

const isDirectory = (path) => fs.statSync(path).isDirectory()
const isExcludedFolder = (folder) => folder === '.git' || folder.startsWith('.')

const folders = fs.readdirSync(rootDir)
    .filter((folder) => isDirectory(path.join(rootDir, folder)))
    .filter((folder) => !isExcludedFolder(folder))

folders.forEach((folder) => {
    const folderPath = path.join(rootDir, folder)

    const currentDir = fs.readdirSync(folderPath)

    const hasNodeModules = currentDir.includes('node_modules')
    const hasPackageJSON = currentDir.includes('package.json')
    const hasPackageLockJSON = currentDir.includes('package-lock.json')
    const hasEnv = currentDir.includes('.env')
    const hasGitIgnore = isGitIgnoreExists(folderPath)

    const reposFiles = ['node_modules', 'package.json', 'package-lock.json', '.env', '.gitignore']
    const hasRepoFile = reposFiles.some((file) => currentDir.includes(file))


    if (hasRepoFile) {
        log(`repository [${folderPath}] ready to push`, logColor.info)
        if (hasNodeModules) log(`[${folderPath}] contains node_modules folder`, logColor.danger)
        if (!hasGitIgnore) log(`[${folderPath}] does not have a .gitignore file`, logColor.warn)
        if (!hasEnv) log(`[${folderPath}] does not have a .env file`, logColor.warn)
        if (!hasPackageJSON) log(`[${folderPath}] does not have a .env file`, logColor.danger)
        if (!hasPackageLockJSON) log(`[${folderPath}] does not have a package-lock.json file`)
    }
    else log(`[${folderPath}] not include any of basics repository file.`, logColor.info)
})
