const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readline = require('readline')
const faker = require('faker')
console.log(`UT \t faker:`, faker);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const mkdir = promisify(fs.mkdir)
const exists = promisify(fs.exists)
const writeFile = promisify(fs.writeFile)

async function createDemoFolder() {
    // Prompt user for directory to put the Demo folder
    const folderPathInput = await new Promise((resolve) => {
      rl.question('Enter the path to put the Demo folder (press Enter for current directory): ', resolve);
    });
  
    const folderPath = folderPathInput.trim() === '' ? process.cwd() : folderPathInput;
    const demoFolderPath = path.join(folderPath, 'demo');
    const demoFormatFolderPath = path.join(demoFolderPath, 'demo-format')
    const demoUserFolderPath = path.join(demoFolderPath, 'demo-user');
  
    // Check if Demo folder exists and delete it if it does
    if (await exists(demoFolderPath)) {
      await fs.promises.rm(demoFolderPath, { recursive: true });
      console.log('Existing Demo folder deleted.');
    }
  
    // Create Demo folder and subfolders
    await mkdir(demoFolderPath);
    await mkdir(demoFormatFolderPath);
    await mkdir(demoUserFolderPath);
  
    // Create files with different naming conventions
    const formatFileNames = ['demo_snake_case.txt', 'demo-kebab-case.txt', 'demoCamelCase.txt'];
    for (const fileName of formatFileNames) {
      const filePath = path.join(demoFormatFolderPath, fileName);
      const content = `This is a ${fileName} file.`;
      await writeFile(filePath, content);
    }
  
    // Create JSON files with user data
    const userFileNames = ['users_1.json', 'users_2.json', 'users_3.json'];
    for (const fileName of userFileNames) {
      const filePath = path.join(demoUserFolderPath, fileName);
      const users = generateUsers();
      await writeFile(filePath, JSON.stringify(users, null, 2));
    }
  
    console.log('Demo folder created successfully.');
    rl.close();
  }
  
  function generateUsers() {
    const users = [];
    for (let i = 0; i < 5; i++) {
      const user = {
        id: i + 1,
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        company: faker.company.companyName()
      };
      users.push(user);
    }
    return users;
  }
  

createDemoFolder()