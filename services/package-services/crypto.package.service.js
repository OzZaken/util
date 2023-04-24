const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');

function encrypt(data, secretKey) {
  if (!secretKey) {
    throw new Error('Secret key is required');
  }
  if (secretKey.length < 32) {
    throw new Error('Secret key should be at least 32 characters long');
  }
  const iv = randomBytes(16);
  const cipher = createCipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(data, secretKey) {
  if (!secretKey) {
    throw new Error('Secret key is required');
  }
  if (secretKey.length < 32) {
    throw new Error('Secret key should be at least 32 characters long');
  }
  const parts = data.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encrypted = Buffer.from(parts.join(':'), 'hex');
  const decipher = createDecipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

module.exports = { encrypt, decrypt };
