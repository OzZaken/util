const _ = require('lodash')


function getRandomScore() {
    return Math.round(Math.random() * 100)
}
var result = _.times(5, getRandomScore)
console.log('result', result)
// result => [64, 70, 29, 10, 23]


var posts = [
    { id: '1abc', title: 'First blog post', content: '...' },
    { id: '2abc', title: 'Second blog post', content: '...' },
]
var postMap = _.keyBy(posts, 'id')
var post = postMap['2abc']

console.log('postMap', postMap)
//  console.log('post', post)
 // '2abc’ -> { id: '2abc', title: 'Second blog post', content: '...' }
