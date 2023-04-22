const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the string to delete from file names: ', (input) => {
  const stringToDelete = input.trim(); // Remove leading/trailing whitespace
  const folderPath = process.cwd(); // Use the current working directory

  fs.readdir(folderPath, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      const oldFilePath = path.join(folderPath, file);
      const newFileName = file.replace(stringToDelete, '');
      const newFilePath = path.join(folderPath, newFileName);

      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) throw err;
        console.log(`Renamed file ${oldFilePath} to ${newFilePath}`);
      });
    });
  });

  rl.close();
});
