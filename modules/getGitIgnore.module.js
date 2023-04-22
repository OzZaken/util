const walkSync = require('./walkSync')

const getGitIgnore = (dir = '.') => {
  const ignoredItems = walkSync(dir)
  return ignoredItems.join('\n')
}

module.exports = getGitIgnore
