
const storeService = require('./bug-service')

(async () =>{
    const name = 'play'
    const ads = await storeService.query({name})
    console.log('Bugs:', ads);
})()