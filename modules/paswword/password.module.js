const bcrypt = require('bcrypt');

const SALT_ROUNDS = 12;

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);
  return { salt, hash };
}

async function verifyPassword(password, salt, hash) {
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash === hash;
}

module.exports = {
  hashPassword,
  verifyPassword,
};
