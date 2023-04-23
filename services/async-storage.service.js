//The storageService provides functions to work with localStorage and simulate having a backend.
// The functions include CRUD + List operation `query`, `get`, `post`, `put`, `remove`, and `postMany` for intently inserting demo data.

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany,
}

// The get function queries the entities array and returns the entity with the specified ID.
function query(entityType, delay = 200) {
    try {
        const entities = JSON.parse(localStorage.getItem(entityType))
        return new Promise(resolve => {
            setTimeout(() => resolve(entities), delay)
        })
    } catch (error) {
        return Promise.reject(error)
    }
}

// creates an ID for the new entity, adds it to the entities array, and saves it in localStorage
function post(entityType, newEntity) {
    try {
        newEntity._id = _makeId()
        return query(entityType).then((entities) => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
    } catch (error) {
        return Promise.reject(error)
    }
}

// The function 'get' queries for an entity of a given type and returns the entity with the specified ID, or rejects the promise if an error occurs.
function get(entityType, entityId) {
    try {
        return query(entityType)
            .then((entities) => entities.find((entity) => entity._id === entityId))
    } catch (err) {
        return Promise.reject(err)
    }
}

// updates the entity in the entities array and saves it in localStorage.
function put(entityType, updatedEntity) {
    try {
        return query(entityType)
            .then((entities) => {
                const idx = entities.findIndex((entity) => entity._id === updatedEntity._id);
                entities.splice(idx, 1, updatedEntity)
                _save(entityType, entities)
                return updatedEntity
            })
    } catch (err) {
        return Promise.reject(err)
    }
}

// removes the entity from the entities array and saves it in localStorage.
function remove(entityType, entityId) {
    try {
        return query(entityType)
            .then((entities) => {
                const idx = entities.findIndex((entity) => entity._id === entityId)
                entities.splice(idx, 1)
                _save(entityType, entities)
            })
    } catch (err) {
        return Promise.reject(err)
    }
}

// saves the entities array in localStorage.
function postMany(entityType, entities) {
    try {
        _save(entityType, entities)
        return Promise.resolve(entities)
    } catch (error) {
        return Promise.reject(error)
    }
}

// The _save and _makeId functions are private functions used by the other functions.
function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}