const fs = require('fs').promises
const path = require('path')

var gIsLinkShowAsVsCode = false // update

const GITHUB_USERNAME = 'OzZaken' // update

const IGNORE = ['pdf','socket.io-examples','env','demo','.git', 'node_modules', 'public', '.gitignore', '.vscode','.env'] 

const REPO_NAME = path.basename(path.resolve('.'))

// typeLink: [${fileName}](${link}) | <a href="${link}" target="_blank">${fileName}</a>

console.log('Creating repo tree:', REPO_NAME)

const VISUAL_CODE_VIEW = gIsLinkShowAsVsCode ? '1s' : ''

const GITHUB_URL = `https://github${VISUAL_CODE_VIEW}.com/${GITHUB_USERNAME}/${REPO_NAME}/blob/main`

const IGNORE_REGEX = new RegExp(`^(${IGNORE.join('|')})$`)

async function traverseFolder(folderPath, prefix = '', isLastItem = true, count = { files: 0, folders: 0 }) {
  const stats = await fs.stat(folderPath)

  if (!stats.isDirectory()) {
    const fileName = path.basename(folderPath)
    const filePath = path.relative(process.cwd(), folderPath)
    const link = `${GITHUB_URL}/${filePath}`
    const isMdFile = path.extname(fileName) === '.md'
    const fileNameTag = isMdFile ? `<em>${fileName}</em>` : fileName
    count.files++
    return `${prefix}${isLastItem ? '└── ' : '├── '}<a href="${link}" target="_blank">${fileNameTag}</a>\n`
  }

  const folderName = path.basename(folderPath)
  const folderNameTag = `<strong>${folderName}</strong>`
  count.folders++
  const contents = await fs.readdir(folderPath)
  let folderStructure = `${prefix}${isLastItem ? '└── ' : '├── '}${folderNameTag}\n`

  for (let i = 0; i < contents.length; i++) {
    const name = contents[i]

    if (IGNORE_REGEX.test(name)) continue

    const childPath = path.join(folderPath, name)
    const isLastChild = i === contents.length - 1
    const childPrefix = `${prefix}${isLastItem ? '    ' : '│   '}`
    const childStructure = await traverseFolder(childPath, childPrefix, isLastChild, count)

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
  const count = { files: 0, folders: 0 }
  const folderStructure = await traverseFolder(folderPath, '', true, count)

  await fs.writeFile(
    structureFilePath, 
    `# ${folderName} Tree Structure:\n\n<pre>\n${folderStructure}</pre>\n\n${count.files} files in ${count.folders} folders.`
  )
  console.log(`Structure file generated successfully at ${structureFilePath}.`)
}

generateFileStructure()