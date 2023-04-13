const fs = require('fs')


const logsDir = './logs'
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

//define the time format
function getTime() {
    let now = new Date()
    return now.toLocaleString()
}

function doLog(level, ...args) {
    const strs = args.map(arg => (typeof arg === 'string') ? arg : JSON.stringify(arg))
    var line = strs.join(' | ')
    line = `${getTime()} - ${level} - ${line}\n`
    console.log(line)
    fs.appendFileSync('./logs/backend.log', line)
}

module.exports = {
    debug(...args) {
        // if (process.env.NODE_NEV === 'production') return
        doLog('DEBUG', ...args)
    },
    info(...args) {
        doLog('INFO', ...args)
    },
    warn(...args) {
        doLog('WARN', ...args)
    },
    error(...args) {
        doLog('ERROR', ...args)
    }
}

// Backend.log
// 1/12/2022, 4:28:54 PM - INFO - Server is running on port: 3030
// 1/16/2022, 11:38:09 AM - DEBUG - auth.service - login with username: admin (sid: X11)
// 1/16/2022, 12:00:23 PM - INFO - Req from: Master Adminov (sid: X11)
// 1/16/2022, 1:21:51 PM - DEBUG - auth.service - signup with username: bubu, fullname: Bubu Bi
// 1/16/2022, 11:37:01 AM - ERROR - while finding user 67iEA | Error: NOT EXIST (sid: X12)