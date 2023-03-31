const fs = require('fs').promises
const path = require('path')

const GITHUB_USERNAME = 'OzZaken'

const IGNORE = ['.git', 'node_modules', 'public', '.gitignore', '.vscode']

console.log(path.resolve('.'))

// typeLink: [${fileName}](${link}) | <a href="${link}" target="_blank">${fileName}</a>


const REPO_NAME =  path.basename(path.resolve('.'))

const GITHUB_URL = `https://github1s.com/${GITHUB_USERNAME}/${REPO_NAME}/blob/main`


const ignoreRegex = new RegExp(`^(${IGNORE.join('|')})$`)

async function traverseFolder(folderPath, prefix = '', isLastItem = true) {
  const stats = await fs.stat(folderPath)

  if (!stats.isDirectory()) {
    const fileName = path.basename(folderPath)
    const filePath = path.relative(process.cwd(), folderPath)
    const link = `${GITHUB_URL}/${filePath}`
    return `${prefix}${isLastItem ? '└── ' : '├── '}<a href="${link}" target="_blank">${fileName}</a>\n`
  }

  const folderName = path.basename(folderPath)

  const contents = await fs.readdir(folderPath)
  let folderStructure = `${prefix}${isLastItem ? '└── ' : '├── '}${folderName}/\n`

  for (let i = 0; i < contents.length; i++) {
    const name = contents[i]

    if (ignoreRegex.test(name)) continue

    const childPath = path.join(folderPath, name)
    const isLastChild = i === contents.length - 1
    const childPrefix = `${prefix}${isLastItem ? '    ' : '│   '}`
    const childStructure = await traverseFolder(childPath, childPrefix, isLastChild)

    folderStructure += childStructure
  }

  return folderStructure
}

async function generateFileStructure() {
  const structureFilePath = './structure.md'

  try {
    await fs.unlink(structureFilePath)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }

  const folderPath = process.cwd()
  const folderName = path.basename(folderPath)
  const folderStructure = await traverseFolder(folderPath)

  await fs.writeFile(structureFilePath, `# ${folderName} Structure/\n\n<pre>\n${folderStructure}</pre>\n`)
  console.log(`Structure file generated successfully at ${structureFilePath}.`)
}

generateFileStructure()
