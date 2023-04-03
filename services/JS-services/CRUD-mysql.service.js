const DBService = require('./db-mysql.service')


/** // TODO: 4 steps CRUD.
 *  01 ENTITY: replace `ENTITY`, `${ENTITY}`, `entityId`, `entity` with your entity.
 *  02 query: update the query.
 * :03 add: ENTITY criteria
 *  04. update: ENTITY criteria
 */

const ENTITY = 'bug'

function query(criteria = {}) {
    var namePart = criteria.name || ''
    var query = `
    SELECT * FROM ${ENTITY}
    WHERE ${ENTITY}.name
    LIKE '%${namePart}%'
    OR ${ENTITY}.description 
    LIKE '%${namePart}%'`

    return DBService.runSQL(query)
}

async function getById(entityId) {
    var query = `SELECT * FROM ${ENTITY} WHERE ${ENTITY}._id = ${entityId}`

    var entities = await DBService.runSQL(query)
    if (entities.length === 1) return entities[0]
    throw new Error(`${ENTITY} id ${entityId} not found`)
}

function add(entity) {
    var sqlCmd =
        `INSERT INTO ${ENTITY} (name, description, severity, creator) 
                VALUES ("${entity.name}",
                        "${entity.description}",
                        "${entity.severity}",
                        "${entity.creator}")`

    return DBService.runSQL(sqlCmd)
}

async function update(entity) {
    var query = `UPDATE ${ENTITY} 
    set name = "${entity.name}",
    description = "${entity.description}",
    severity = ${entity.severity}

    WHERE ${ENTITY}._id = ${entity._id}`

    var okPacket = await DBService.runSQL(query)
    if (okPacket.affectedRows !== 0) return okPacket

    throw new Error(`No ${ENTITY} updated - ${ENTITY} id ${entity._id}`)
}

function remove(entityId) {
    var query = `DELETE FROM ${ENTITY} WHERE ${ENTITY}._id = ${entityId}`

    return DBService.runSQL(query)
        .then(okPacket => okPacket.affectedRows === 1
            ? okPacket
            : Promise.reject(new Error(`No ${ENTITY} deleted - ${ENTITY} id ${entityId}`)))
}

module.exports = {
    query,
    getById,
    add,
    update,
    remove
}