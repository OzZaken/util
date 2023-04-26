const ansService = require('./services/ans.service')

// console.log('ansSErvice', ansService)

global.userName = 'Puki'


console.log('__dirname', __dirname)

ansService.sayHello()

ansService.getAns()
    .then(ans => {
        console.log('Ans:', ans)
    })
