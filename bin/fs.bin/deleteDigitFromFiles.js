const fs = require('fs');
const path = require('path');

const folderPath = process.cwd(); // Use the current working directory

fs.readdir(folderPath, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const oldFilePath = path.join(folderPath, file);
    const newFileName = file.replace(/[0-9]/g, '').trim(); // Replace all digits with empty string
    const newFilePath = path.join(folderPath, newFileName);

    if (newFileName !== file) { // Only rename if file name has changed
      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) throw err;
        console.log(`Renamed file ${oldFilePath} to ${newFilePath}`);
      });
    }
  });
});
