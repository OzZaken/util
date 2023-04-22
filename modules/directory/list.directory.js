const fs = require('fs').promises
const path = require('path')

module.exports = async function listDirectory(directory = process.cwd()) {
  try {
    const files = await fs.readdir(directory)
    
    const contents = await Promise.all(files.map(async file => ({
      name: file,
      isDirectory: (await fs.stat(path.join(directory, file))).isDirectory(),
    })))

    return contents
  } catch (error) {
    console.error(`Error listing directory ${directory}:`, error)
    throw error
  }
}