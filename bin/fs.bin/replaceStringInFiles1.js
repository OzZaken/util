const fs = require('fs/promises')

async function replaceStringInFiles(directory, searchStr, replaceStr) {
  const files = await fs.readdir(directory)
  for (const file of files) {
    const filePath = path.join(directory, file)
    const stat = await fs.stat(filePath)
    if (stat.isDirectory()) {
      await replaceStringInFiles(filePath, searchStr, replaceStr)
    } else if (stat.isFile()) {
      let content = await fs.readFile(filePath, 'utf8')
      content = content.replace(new RegExp(searchStr, 'g'), replaceStr)
      await fs.writeFile(filePath, content, 'utf8')
    }
  }
}

replaceStringInFiles('.', 'hello', 'world')
  .catch(error => console.error(error))