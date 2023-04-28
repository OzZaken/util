const fs = require('fs')
const path = require('path')

async function mapRepo() {
  const repoPath = '.'
  const repoStructure = await traverseFolder(repoPath)

  // Save repo structure to file
  const outputFilePath = path.join(__dirname, 'fileStructure.json')
  const outputData = JSON.stringify(repoStructure, null, 2)
  
  if (!fs.existsSync(outputFilePath)) {
    await fs.promises.writeFile(outputFilePath, outputData)
    console.log(`Repo structure saved to ${outputFilePath}`)
  } else {
    console.log(`Repo structure file already exists at ${outputFilePath}`)
  }
}

async function traverseFolder(folderPath) {
  const stats = await fs.promises.stat(folderPath)
    // This is a file, not a folder
  if (!stats.isDirectory())  return path.basename(folderPath)

  // This is a folder, so recursively traverse its contents
  const folderName = path.basename(folderPath)
  const folderStructure = {}
  const contents = await fs.promises.readdir(folderPath)
  for (const name of contents) {
    const childPath = path.join(folderPath, name)
    const childStructure = await traverseFolder(childPath)
    folderStructure[name] = childStructure
  }

  return folderStructure
}

mapRepo().catch((err) => console.error(err))