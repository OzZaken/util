const logger = require('../services/logger.service')

module.exports = { log }

// extracts the method and originalUrl properties from the req object and logs them as part of the message.
async function log({ method, originalUrl }, req, res, next) {
  const userId = asyncLocalStorage.getStore()?.get('userId')
  var line = userId ? `User ID: ${userId} |` : ''
  line += `[${method}] ${originalUrl}`
  logger.info(line)
  next()
}