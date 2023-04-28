// Require necessary modules
const fs = require('fs');
const path = require('path');

// Define global variable to store user input
let directoryPath = 'D:\\GitHub'//process.cwd() // or '.'

// Define function to print list of folders/directories
function printDirectories() {
    // Use path module to resolve absolute path of directory
    const absPath = path.resolve(directoryPath);

    // Use fs module to read contents of directory
    fs.readdir(absPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        // Filter out non-directory files
        const directories = files.filter(file => file.isDirectory());

        // Print list of directory names
        console.log(`Directories in ${directoryPath}:`);
        directories.forEach(dir => console.log(dir.name));

        // Close stdin stream to end process
        process.stdin.pause();
    });
}

/** Read user input and set global variable */
process.stdin.setEncoding('utf8') // Set encoding for stdin to utf8
// Write prompt message to stdout
process.stdout.write(`Enter directory path (default is ${directoryPath}): `);
// Listen for input on stdin
process.stdin.on('data', input => {
    // Use default directory path if user input is empty
    directoryPath = input.trim() || directoryPath

    // Remove listener to prevent multiple executions
    process.stdin.removeAllListeners('data')

    // Call function to print list of directories
    printDirectories()
})
