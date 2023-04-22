const fs = require('fs')
const path = require('path')
const readline = require('readline')
const infoCyan = '\x1b[36m%s\x1b[0m'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const initData = {
  find: 'Js',
  replace: '.js',
  executeDir: process.cwd()
}

function askUser(callback) {
  rl.question(`Enter the string to find: `, (stringToFind) => {
    if (stringToFind) initData.find = stringToFind
    console.log(infoCyan, 'info |\t stringToFind:', stringToFind)

    rl.question(`Enter the string to replace it with: `, (stringToReplace) => {
      if (stringToReplace) initData.replace = stringToReplace
      console.log(infoCyan, 'info \t stringToReplace:', initData.executeDir)

      rl.question(`Enter the directory to execute in (Enter for ${initData.executeDir}): `, (executeDir) => {
        if (executeDir && executeDir) initData.executeDir = executeDir
        else initData.executeDir = process.cwd()
        console.log(infoCyan, 'info |\t executeDir:', initData.executeDir)

        rl.close()
        callback()
      })
    })
  })
}

function init() {
  const { executeDir, find, replace } = initData
  const regex = new RegExp(find, 'g')
  let foundFiles = 0

  fs.readdir(executeDir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(executeDir, file)

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err)
          return
        }

        if (stats.isFile()) {
          fs.readFile(filePath, 'utf8', (err, data) => {
            console.log(`UT \t data:`, data);
            if (err) {
              console.error(err)
              return
            }

            if (data.match(regex)) {
              foundFiles++
              console.log(`Found '${find}' in '${filePath}'`)

              rl.question(`Do you want to replace it with '${replace}'? (y/n) `, (answer) => {
                if (answer.toLowerCase() === 'y') {
                  const newData = data.replace(regex, replace)

                  fs.writeFile(filePath, newData, (err) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    console.log(`Successfully replaced '${gStringToFind}' with '${replace}' in '${filePath}'`);
                  })
                }
              })
            }
          })
        }
      });
    });
    console.log(`Found ${foundFiles} files with '${gStringToFind}' in '${executeDir}'`)
  })
}

askUser(init)