const fs = require('fs');
const path = require('path');

function replaceStringInFiles(directory, searchStr, replaceStr, callback) {
  fs.readdir(directory, (error, files) => {
    if (error) {
      return callback(error);
    }
    let remaining = files.length;
    if (!remaining) {
      return callback();
    }
    files.forEach(file => {
      const filePath = path.join(directory, file);
      fs.stat(filePath, (error, stat) => {
        if (error) {
          if (--remaining === 0) {
            callback(error);
          }
          return;
        }
        if (stat.isDirectory()) {
          replaceStringInFiles(filePath, searchStr, replaceStr, error => {
            if (--remaining === 0) {
              callback(error);
            }
          });
        } else if (stat.isFile()) {
          fs.readFile(filePath, 'utf8', (error, content) => {
            if (error) {
              if (--remaining === 0) {
                callback(error);
              }
              return;
            }
            content = content.replace(new RegExp(searchStr, 'g'), replaceStr);
            fs.writeFile(filePath, content, 'utf8', error => {
              if (--remaining === 0) {
                callback(error);
              }
            });
          });
        } else {
          if (--remaining === 0) {
            callback();
          }
        }
      });
    });
  });
}

replaceStringInFiles('.', 'hello', 'world', error => {
  if (error) {
    console.error(error);
  } else {
    console.log('All files have been processed.');
  }
});
