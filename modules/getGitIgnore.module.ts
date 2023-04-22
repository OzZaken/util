import walkSync from './walkSyncIgnore.module'

const getGitIgnore = (dir = '.'): string => {
  const ignoredItems = walkSync(dir)
  return ignoredItems.join('\n')
}

export default getGitIgnore