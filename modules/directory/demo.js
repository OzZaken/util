const { listDirectory } = require('./list.directory')

(async () => {
  try {
    const contents = await listDirectory()
    console.log(contents)
  } catch (error) {
    console.error(error)
  }
})()