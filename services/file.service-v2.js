const fs = require('fs-extra');
const path = require('path');

class FileService {
  constructor() {
    this.basePath = './files';
  }

  async createDirectory(directoryName) {
    const directoryPath = this.getDirectoryPath(directoryName);
    await fs.ensureDir(directoryPath);
  }

  async writeFile(directoryName, fileName, data) {
    const filePath = this.getFilePath(directoryName, fileName);
    await fs.writeFile(filePath, data);
  }

  async readFile(directoryName, fileName) {
    const filePath = this.getFilePath(directoryName, fileName);
    const data = await fs.readFile(filePath);
    return data.toString();
  }

  async deleteFile(directoryName, fileName) {
    const filePath = this.getFilePath(directoryName, fileName);
    await fs.unlink(filePath);
  }

  async deleteDirectory(directoryName) {
    const directoryPath = this.getDirectoryPath(directoryName);
    await fs.remove(directoryPath);
  }

  async emptyDirectory(directoryName) {
    const directoryPath = this.getDirectoryPath(directoryName);
    await fs.emptyDir(directoryPath);
  }

  async copyFile(sourceDirectory, sourceFileName, destinationDirectory, destinationFileName) {
    const sourceFilePath = this.getFilePath(sourceDirectory, sourceFileName);
    const destinationFilePath = this.getFilePath(destinationDirectory, destinationFileName);
    await fs.copyFile(sourceFilePath, destinationFilePath);
  }

  async moveFile(sourceDirectory, sourceFileName, destinationDirectory, destinationFileName) {
    const sourceFilePath = this.getFilePath(sourceDirectory, sourceFileName);
    const destinationFilePath = this.getFilePath(destinationDirectory, destinationFileName);
    await fs.move(sourceFilePath, destinationFilePath);
  }

  getDirectoryPath(directoryName) {
    return path.join(this.basePath, directoryName);
  }

  getFilePath(directoryName, fileName) {
    return path.join(this.basePath, directoryName, fileName);
  }
}

module.exports = FileService;