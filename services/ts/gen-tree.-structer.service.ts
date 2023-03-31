import { promises as fs } from 'fs'
import * as path from 'path'

const IGNORE = ['.git', 'node_modules'] // put the files to ignore

// convert the array to a regular expression
const ignoreRegex = new RegExp(`^(${IGNORE.join('|')})$`)

async function traverseFolder(
  folderPath: string,
  prefix = '',
  isLastItem = true,
): Promise<string> {
  const stats = await fs.stat(folderPath)

  // This is a file, not a folder
  if (!stats.isDirectory()) {
    return `${prefix}${isLastItem ? '└── ' : '├── '}${path.basename(folderPath)}\n`
  }

  // This is a folder, so recursively traverse its contents
  const folderName = path.basename(folderPath)

  const contents = await fs.readdir(folderPath)
  let folderStructure = `${prefix}${isLastItem ? '└── ' : '├── '}${folderName}/\n`

  for (let idx = 0; idx < contents.length; idx++) {
    const name = contents[idx]

    // Skip ignored files and folders
    if (ignoreRegex.test(name)) continue

    const childPath = path.join(folderPath, name)
    const isLastChild = idx === contents.length - 1
    const childPrefix = `${prefix}${isLastItem ? '    ' : '│   '}`
    const childStructure = await traverseFolder(childPath, childPrefix, isLastChild)

    folderStructure += childStructure
  }

  return folderStructure
}

async function generateFileStructure(): Promise<void> {
  const structureFilePath = './structure.md'
  try {
    // Delete the file if it already exists
    await fs.unlink(structureFilePath)
  } catch (error) {
    // Ignore the error if the file doesn't exist
    if (error.code !== 'ENOENT') throw error
  }

  const folderPath = path.dirname(process.argv[1])
  const folderName = path.basename(folderPath)
  const folderStructure = await traverseFolder(folderPath)

  await fs.writeFile(structureFilePath, `# ${folderName} Structure/\n${folderStructure}`)
  console.log('Structure file generated successfully.')
}

generateFileStructure()
