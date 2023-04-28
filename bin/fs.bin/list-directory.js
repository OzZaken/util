const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create a readline interface to prompt the user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for the folder path
rl.question('Enter the folder path (press Enter to use the current location): ', folderPath => {
  // If the user just pressed Enter, use the current location
  if (!folderPath.trim()) folderPath = '.';

  // Read the directory contents
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      rl.close();
      return;
    }

    // Print the list of files and directories
    console.log(`Contents of ${folderPath}:`);
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const fileStat = fs.statSync(filePath);
      if (fileStat.isDirectory()) {
        console.log(`${file}/`);
      } else if (fileStat.isFile()) {
        console.log(file);
      }
    }

    // Close the readline interface
    rl.close();
  });
});
