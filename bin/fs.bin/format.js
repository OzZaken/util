const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ignoreList = [
  'node_modules',
  'pdf',
  'private',
  'env',
  'demo',
  '.git',
  '.gitignore',
  'README',
  '.vscode',
  '.env',
];

let gFormatType = 'lowerCamelCase';
let gExecuteAtFolderPath = 'C:\\dev\\util\\assets\\demo' //|| process.cwd();
let gIsContainsSubFolder = true;
let gIsAddParentFolder = true;

function formatFolderName(folderName) {
  const pattern = /(?<=^|\.)(?!\d)[a-z0-9]+(?<![-.])|(?<=\d)(?!\.)(?![-.])[a-z0-9]+/g;
  const matches = folderName.match(pattern);

  if (!matches) {
    return folderName.toLowerCase();
  }

  let result = matches.map(match => {
    return match.toLowerCase().replace(/[ _]/g, '-');
  }).join('.');

  if (gIsAddParentFolder) {
    result = path.basename(gExecuteAtFolderPath) + '.' + result;
  }

  return result;
}

function formatFileName(fileName) {
  let [baseName, ...extensions] = fileName.split('.').reverse();
  const pattern = /(?<=^|\.)(?!\d)[a-z0-9]+(?<![-.])|(?<=\d)(?!\.)(?![-.])[a-z0-9]+/g;
  const matches = baseName.match(pattern);

  if (!matches) {
    return fileName.toLowerCase();
  }

  let result = matches.map(match => {
    return match.toLowerCase().replace(/[ _]/g, '-');
  }).join('-');

  if (gIsAddParentFolder) {
    result = path.basename(gExecuteAtFolderPath) + '-' + result;
  }

  if (gFormatType === 'lowerCamelCase') {
    result = result.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
  } else if (gFormatType === 'UpperCamelCase') {
    result = result.replace(/(^|\b)(\w)/g, (_, __, c) => c.toUpperCase());
  } else if (gFormatType === 'snake_case') {
    result = result.replace(/-/g, '_');
  }

  if (extensions.length > 0) {
    result += '.' + extensions.reverse().join('.');
  }

  return result;
}

function formatDir() {
  const allFiles = fs.readdirSync(gExecuteAtFolderPath, { withFileTypes: true });
  const folders = allFiles.filter(file => file.isDirectory() && !ignoreList.includes(file.name));
  const files = allFiles.filter(file => file.isFile() && !ignoreList.includes(file.name));

  folders.forEach(folder => {
    const oldPath = path.join(gExecuteAtFolderPath, folder.name);
    const newName = formatFolderName(folder.name);
    const newPath = path.join(gExecuteAtFolderPath, newName);

    fs.renameSync(oldPath, newPath);

    if (gIsContainsSubFolder) {
      gExecuteAtFolderPath = newPath;
      formatDir();
    } else {
      gExecuteAtFolderPath = path.join(gExecuteAtFolderPath, '..');
    }
  })

  files.forEach(file => {
    const oldPath = path.join(gExecuteAtFolderPath, file.name);
    const newName = formatFileName(file.name);
    const newPath = path.join(gExecuteAtFolderPath, newName);

    fs.renameSync(oldPath, newPath);
  });

  console.log('Files and folders are successfully renamed!');
  rl.close();
}

// rl.question('Enter the format type (lowerCamelCase, UpperCamelCase, or snake_case): ', answer => {
//   gFormatType = answer;
//   rl.question('Enter the folder path (or press Enter to use the current working directory): ', answer => {
//     gExecuteAtFolderPath = answer || process.cwd();
//     rl.question('Do you want to include subfolders? (Y/N): ', answer => {
//       gIsContainsSubFolder = answer.toLowerCase() === 'y';
//       rl.question('Do you want to add parent folder name as prefix? (Y/N): ', answer => {
//         gIsAddParentFolder = answer.toLowerCase() === 'y';
//       });
//     });
//   });
// });
formatDir();
