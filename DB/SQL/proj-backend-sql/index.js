const bugService = require('./bug-service')

(async () =>{
    const name = 'play'
    const bugs = await bugService.query({name})
    console.log('Bugs:', bugs)
})()