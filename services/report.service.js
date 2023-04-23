const { report, resourceUsage } = require('node:process')
const data = report.getReport();

// console.log('data',data);
console.log('data.header',data.header);
// console.log('nodejsVersion',data.header.nodejsVersion);

// Similar to process.report.writeReport()
// fs.writeFileSync('my-report.log', util.inspect(data), 'utf8')

// console.groupCollapsed('report')
// console.log(`Reports are compact? ${report.compact}`)
// console.log(`Report on signal: ${report.reportOnSignal}`)
// console.log(`Report on fatal error: ${report.reportOnFatalError}`)
// console.log(`Report on exception: ${report.reportOnUncaughtException}`)
// console.log(`Report signal: ${report.signal}`)
// console.log(`Report filename is ${report.filename}`)
// console.log(`Report directory is ${report.directory}`)
// console.log(resourceUsage())
// if (process.getuid) console.log(`Current uid: ${process.getuid()}`)
// console.groupEnd('report')