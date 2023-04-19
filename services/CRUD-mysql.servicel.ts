import DBService from './db-mysql.service'

/** // TODO: 7 steps CRUD:
 *  01 ENTITY: replace `ENTITY`, `${ENTITY}`, `entityId`, `entity` with your entity.
 *  02.QueryCriteria: create ENTITY interface, and update QueryCriteria.
 *  03.query: replace any[] with `your created interface`[], and update the query.
 *  04.getById: replace Promise<any> to Promise<`your created interface`>, and update query.
 *  05.add: replace `entity: any` to `your created interface`, replace Promise<string> to `your created interface.id`, and update sqlCmd.
 *  06.update: replace `entity: any` to `your created interface`, replace Promise<string> to `your created interface.id`, and update query.
 *  07.remove: replace `entityId: string` to `your created interface.id`
 */

const ENTITY = 'bug'

interface QueryCriteria {
    name?: string;
}

function query(criteria: QueryCriteria = {}): Promise<any[]> {
    const namePart = criteria.name || ''
    const query = `
     SELECT * FROM ${ENTITY}
     WHERE ${ENTITY}.name
     LIKE '%${namePart}%'
     OR ${ENTITY}.description
     LIKE '%${namePart}%'`

    return DBService.runSQL(query)
}

async function getById(entityId: string): Promise<any> {
    const query = `SELECT * FROM ${ENTITY} WHERE ${ENTITY}._id = ${entityId}`;

    const entities = await DBService.runSQL(query);
    if (entities.length === 1) return entities[0];
    throw new Error(`${ENTITY} id ${entityId} not found`);
}


function add(entity: any): Promise<string> {
    const sqlCmd = `INSERT INTO ${ENTITY} (name, description, severity, creator) 
                  VALUES ("${entity.name}",
                          "${entity.description}",
                          "${entity.severity}",
                          "${entity.creator}")`;

    return DBService.runSQL(sqlCmd);
}

async function update(entity: any): Promise<any> {
    const query = `
     UPDATE ${ENTITY}
     set name = "${entity.name}",
     description = "${entity.description}",
     severity = ${entity.severity}
     WHERE ${ENTITY}._id = ${entity._id}`

    const okPacket = await DBService.runSQL(query)

    if (okPacket.affectedRows !== 0) return okPacket

    throw new Error(`No ${ENTITY} updated - ${ENTITY} id ${entity._id}`)
}

function remove(entityId: string): Promise<any> {
    const query = `DELETE FROM ${ENTITY} WHERE ${ENTITY}._id = ${entityId}`

    return DBService.runSQL(query)
        .then((okPacket) =>
            okPacket.affectedRows === 1
                ? okPacket
                : Promise.reject(new Error(`No ${ENTITY} deleted - ${ENTITY} id ${entityId}`))
        )
}

export default {
    query,
    getById,
    add,
    update,
    remove,
}