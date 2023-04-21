const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.js');
const fileContent = fs.readFileSync(filePath, 'utf-8');

const debugRegex = /console\.log\(['"](.*?)['"]\);/g;
const upgradeRegex = /\/\/\s*UPGRADE:\s*(.*?)$/gm;

let debugMatches;
while ((debugMatches = debugRegex.exec(fileContent))) {
  const debugStatement = debugMatches[0];
  const debugMessage = debugMatches[1];
  
  // Check for consistent formatting
  if (debugStatement !== debugStatement.trim()) {
    console.warn(`Debug statement "${debugStatement}" has inconsistent spacing.`);
  }
  
  // Check for consistent quotes
  if (debugStatement.includes('"') && debugStatement.includes("'")) {
    console.warn(`Debug statement "${debugStatement}" has inconsistent quotes.`);
  }
  
  // Check for consistent format
  if (debugMessage[0] === debugMessage[0].toUpperCase()) {
    console.warn(`Debug message "${debugMessage}" should start with a lowercase letter.`);
  }
}

let upgradeMatches;
while ((upgradeMatches = upgradeRegex.exec(fileContent))) {
  const upgradeStatement = upgradeMatches[0];
  const upgradeMessage = upgradeMatches[1];
  
  // Check for consistent formatting
  if (upgradeStatement !== upgradeStatement.trim()) {
    console.warn(`Upgrade statement "${upgradeStatement}" has inconsistent spacing.`);
  }
  
  // Check for consistent format
  if (upgradeMessage[0] === upgradeMessage[0].toLowerCase()) {
    console.warn(`Upgrade message "${upgradeMessage}" should start with an uppercase letter.`);
  }
}
