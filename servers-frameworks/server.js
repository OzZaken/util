const cors = require('cors')
const express = require('express')
const path = require('path')
const app = express()
const cookieParser = require('cookie-parser')
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')
const { setupSocketAPI } = require('./services/socket.service')
const { ansiColors } = require('./services/colors.service')
const logger = require('./services/logger.service')
// const process = require('node:process')
const server = require('http').createServer(app)
const { report } = require('node:process');
const { resourceUsage } = require('node:process');

console.log('...report', { ...report });
// Write reports in a compact format, single-line JSON, more easily consumable by log processing systems than the default multi-line format designed for human consumption.
console.log(`Reports are compact? ${report.compact}`);
console.log(`Report on signal: ${report.reportOnSignal}`);
console.log(`Report on fatal error: ${report.reportOnFatalError}`);
console.log(`Report on exception: ${report.reportOnUncaughtException}`);
console.log(`Report signal: ${report.signal}`);
console.log(`Report filename is ${report.filename}`);
console.log(`Report directory is ${report.directory}`);
console.log(resourceUsage())
// report.writeReport([filename][, err])
// ---------------------------------   use     
app.use(cookieParser())
app.use(express.json())

setupSocketAPI(server)

app.all('*', setupAsyncLocalStorage)

// ---------------------------------   process environments  
// Check if the process has permission to read the README file
process.permission.has('fs.read', './README.md');
// Check if the process has read permission operations
process.permission.has('fs.read');

process.on('uncaughtException', (err, origin) => {
    fs.writeSync(
        process.stderr.fd,
        `Caught exception: ${err}\n` +
        `Exception origin: ${origin}`
    )
})

if (process.env.NODE_ENV === 'production') app.use(express.static(path.resolve(__dirname, 'public')))
else {
    app.get('/favicon.ico', (req, res) => res.status(204))/* ignore favicon missing */
    // Configuring CORS Make sure origin contains the url frontend is running on
    const corsConfig = {
        origin: [
            'http://127.0.0.1:5173',
            'http://127.0.0.1:8080',
            'http://localhost:8080',
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://localhost:3001',
        ],
        credentials: true
    }
    app.use(cors(corsConfig))
}

// ---------------------------------   Routes  
const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const stayRoutes = require('./api/stay/stay.routes')
const orderRoutes = require('./api/order/order.routes')
const reviewRoutes = require('./api/review/review.routes')

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/stay', stayRoutes)
app.use('/api/order', orderRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// ---------------------------------  server
const port = process.env.PORT || 3030
server.listen(port, () => {
    logger.info('Server listening at port', port)
    console.log(`${ansiColors.info}Server listening at port: ${ansiColors.success}${port}${ansiColors.reset}`)
})