const config = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev')

module.exports = config