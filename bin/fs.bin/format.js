const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the file name format (1 for camelCase, 2 for snake_case, 3 for kebab-case, or custom regex): ', (input) => {
  const folderPath = process.cwd(); // Use the current working directory
  let regex;

  switch (input) {
    case '1':
      regex = /[^A-Za-z0-9]+([A-Za-z0-9])/g;
      break;
    case '2':
      regex = /[^A-Za-z0-9]+([A-Za-z0-9_])/g;
      break;
    case '3':
      regex = /[^A-Za-z0-9]+([A-Za-z0-9-])/g;
      break;
    default:
      try {
        regex = new RegExp(input, 'g');
      } catch (err) {
        console.log('Invalid regex:', err.message);
        rl.close();
        return;
      }
  }

  fs.readdir(folderPath, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      const oldFilePath = path.join(folderPath, file);
      const fileExt = path.extname(file);
      const fileNameWithoutExt = path.basename(file, fileExt);
      const newFileName = fileNameWithoutExt.replace(regex, (_, match) => match.toUpperCase()) + fileExt;
      const newFilePath = path.join(folderPath, newFileName);

      if (newFileName !== file) { // Only rename if file name has changed
        fs.rename(oldFilePath, newFilePath, (err) => {
          if (err) throw err;
          console.log(`Renamed file ${oldFilePath} to ${newFilePath}`);
        });
      }
    });

    rl.close();
  });
});
