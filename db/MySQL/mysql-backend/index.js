const bugService = require('./bug-mysql.service')

(async () =>{
    console.log('start')
    const name = 'play'
    const bugs = await bugService.query({name})
    console.log('Bugs:', bugs)
})()