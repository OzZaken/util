const fs = require('fs')
const path = require('path')

function walkSync(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  fileList = fileList || []

  files.forEach((file) => {
    const filepath = path.join(dir, file)

    if (fs.statSync(filepath).isDirectory()) fileList = walkSync(filepath, fileList)
     else fileList.push(filepath)
  })

  return fileList
}

module.exports = walkSync