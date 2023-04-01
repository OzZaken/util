const fs = require('fs')
const path = require('path')
// NOTE: you can always use rimraf  
function deleteNodeModules(directory) {
    // Read the contents of the directory
    fs.readdir(directory, { withFileTypes: true }, (err, files) => {
        if (err) throw err
        // Iterate over the files and directories
        files.forEach(file => {
            const filePath = path.join(directory, file.name)
            // If the item is a directory, call the function recursively
            if (file.isDirectory()) deleteNodeModules(filePath)
            else {
                // If the item is a file, check if it's a node_modules folder
                if (file.name === 'node_modules' && file.isDirectory()) {
                    // If it is, delete the folder
                    fs.rm(filePath, { recursive: true }, (err) => {
                        if (err) throw err
                        console.log(`Deleted ${filePath}`)
                    })
                }
            }
        })
    })
}

// Call the function with the current directory
deleteNodeModules(__dirname)