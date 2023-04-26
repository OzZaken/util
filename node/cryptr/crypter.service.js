const Cryptr = require('cryptr');

class CrypterService {
  constructor(key) {
    this.cryptr = new Cryptr(key);
  }

  encrypt(plainText) {
    return this.cryptr.encrypt(plainText);
  }

  decrypt(cipherText) {
    return this.cryptr.decrypt(cipherText);
  }
}

module.exports = CrypterService;

// ---------------------------------   Usage   ---------------------------------  
//  const CrypterService = require('./crypter.service');

const encryptionKey = 'my secret key';
const crypterService = new CrypterService(encryptionKey);

const plainText = 'Hello, world!';
const cipherText = crypterService.encrypt(plainText);
console.log(cipherText);

const decryptedPlainText = crypterService.decrypt(cipherText);
console.log(decryptedPlainText);
