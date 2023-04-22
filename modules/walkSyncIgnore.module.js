const fs = require('fs')
const path = require('path')

const walkSync = (dir, ignoredItems = []) => {
  if (fs.existsSync(path.join(dir, '.gitignore'))) {
    fs.readFileSync(path.join(dir, '.gitignore'), 'utf-8').split('\n').forEach(line => {
      if (line && !line.startsWith('#')) {
        ignoredItems.push(line.trim())
      }
    })
  }

  const checkFileOrDir = (filepath) => {
    if (ignoredItems.some(item => filepath.includes(item))) {
      console.log(`${filepath} is listed in '.gitignore' and should not be committed.`);
    }
  }

  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filepath = path.join(dir, file)
    if (fs.statSync(filepath).isDirectory()) walkSync(filepath, ignoredItems);
     else checkFileOrDir(filepath)
  })

  return ignoredItems
}

module.exports = walkSync