const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');
/** This CrypterService class uses the crypto module that comes with Node.js
 *  to encrypt and decrypt data using the Advanced Encryption Standard (AES)
 *  with a 256-bit key length in Cipher Block Chaining (CBC) mode.
 *  The class takes a secret key as a parameter and uses it to encrypt and decrypt data.
 * 
 * The secret key is validated to ensure that it's not null or empty and has a minimum length of 32 characters.
 *  A random initialization vector (IV) is generated for each encryption operation to add an additional layer of security.
 * The IV is prepended to the encrypted data and separated by a colon to ensure that the same IV is used during decryption.
 * The Buffer.concat() method is used to concatenate the encrypted or decrypted data to prevent memory leaks or issues with partial data.
 * The toString() method is used to convert the encrypted and decrypted data from Buffer objects to strings.
 */

class CrypterService {
  constructor(secretKey) {
    if (!secretKey) {
      throw new Error('Secret key is required');
    }
    if (secretKey.length < 32) {
      throw new Error('Secret key should be at least 32 characters long');
    }
    this.secretKey = secretKey;
    this.algorithm = 'aes-256-cbc';
  }

  encrypt(data) {
    const iv = randomBytes(16);
    const cipher = createCipheriv(this.algorithm, Buffer.from(this.secretKey), iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
  }

  decrypt(data) {
    const parts = data.split(':');
    const iv = Buffer.from(parts.shift(), 'hex');
    const encrypted = Buffer.from(parts.join(':'), 'hex');
    const decipher = createDecipheriv(this.algorithm, Buffer.from(this.secretKey), iv);
    let decrypted = decipher.update(encrypted);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }
}

module.exports = CrypterService;
