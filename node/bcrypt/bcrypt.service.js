const bcrypt = require('bcrypt')
const SALT_ROUNDS = 14

class BcryptService {
  static async hashPassword(password) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    return await bcrypt.hash(password, salt)
  }

  static async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash)
  }
}

module.exports = BcryptService