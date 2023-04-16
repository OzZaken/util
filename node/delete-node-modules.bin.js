const fs = require('fs')
const path = require('path')

function deleteNodeModules(directory) {
    fs.readdir(directory, { withFileTypes: true }, (err, files) => {
        if (err) throw err
        files.forEach(file => {
            const filePath = path.join(directory, file.name)
            if (file.isDirectory()) {
                deleteNodeModules(filePath)
            } else {
                if (file.name === 'node_modules' && file.isDirectory()) {
                    fs.rm(filePath, { recursive: true }, (err) => {
                        if (err) throw err
                        console.log(`Deleted node_modules folder located at ${filePath}`)
                    })
                }
            }
        })
        console.log(`Finished deleting node_modules folders in ${directory}`)
    })
}

deleteNodeModules(__dirname)