export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany,
}

function query(entityType: string, delay = 200): Promise<any[]> {
    try {
        const entities = JSON.parse(localStorage.getItem(entityType)!)
        return new Promise(resolve => {
            setTimeout(() => resolve(entities), delay)
        })
    } catch (error) {
        return Promise.reject(error)
    }
}

function post(entityType: string, newEntity: any): Promise<any> {
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

function postMany(entityType: string, entities: any[]): Promise<any[]> {
    try {
        _save(entityType, entities)
        return Promise.resolve(entities)
    } catch (error) {
        return Promise.reject(error)
    }
}

function get(entityType: string, entityId: string): Promise<any> {
    try {
        return query(entityType)
            .then((entities) => entities.find((entity) => entity._id === entityId))
    } catch (err) {
        return Promise.reject(err)
    }
}

function put(entityType: string, updatedEntity: any): Promise<any> {
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

function remove(entityType: string, entityId: string): Promise<void> {
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

function _save(entityType: string, entities: any[]) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5): string {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}