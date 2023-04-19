const STORAGE_KEY = 'userCache'

const userCache = loadFromStorage(STORAGE_KEY) || {}

getUserDetails('OzZaken').then(user => console.log('Got user', user))

setTimeout(() => {
    getUserDetails('OzZaken')
        .then(user => console.log('Got user', user))
}, 1250)


// Get user data from network or cache - return a promise

function getUserDetails(username) {
   
    if (userCache[username]) {
        console.log('No need to fetch, retrieving from Cache')
        // return userCache[username]
        return Promise.resolve(userCache[username])
    }

    const url = 'https://api.github.com/users/'
    return fetch(url + username).then(res => res.json())
        .then((user) => {
            userCache[username] = user
            saveToStorage(STORAGE_KEY, userCache)
            // Cache Invalidation after 5 Seconds
            setTimeout(() => {
                delete userCache[username]
                saveToStorage(STORAGE_KEY, userCache)
            }, 5000)

            return user
        })
        .catch(() => {
            throw new Error('Could not find user: ' + username)
        })
}


