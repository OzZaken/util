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
  if (!folderPath.trim()) {
    folderPath = '.';
  }

  // Prompt the user for the search string
  rl.question('Enter the search string: ', searchString => {
    // Convert the search string to a regular expression object
    const regex = new RegExp(searchString);

    // An array to store the matches
    const matches = [];

    // A function to recursively search for files in a folder and its subfolders
    function searchForFiles(folderPath, regex) {
      fs.readdirSync(folderPath).forEach(file => {
        const filePath = path.join(folderPath, file);
        const fileStat = fs.statSync(filePath);
        if (fileStat.isDirectory()) {
          // Recursively search for files in subfolders
          searchForFiles(filePath, regex);
        } else if (fileStat.isFile()) {
          // Check if the file name or content matches the regular expression
          const fileContent = fs.readFileSync(filePath, 'utf8');
          let match;
          while ((match = regex.exec(fileContent)) !== null) {
            // Store the match in the matches array
            matches.push({
              fileName: filePath,
              row: (fileContent.substring(0, match.index).match(/\n/g) || []).length + 1,
              column: match.index - fileContent.lastIndexOf('\n', match.index) + 1,
              line: match[0]
            });
          }
        }
      });
    }

    // Call the search function
    searchForFiles(folderPath, regex);

    // Print the matches
    console.log(matches);

    // Close the readline interface
    rl.close();
  });
});
