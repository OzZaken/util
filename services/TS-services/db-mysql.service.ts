import mysql, { Connection } from 'mysql'
// `Connection`, `MysqlError`: generic type come with mysql.
// add `QueryFunction`

const DATA_BASE = 'bug_db' // replace DATA_BASE value.

const connection: Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: DATA_BASE,
    insecureAuth: true,
})


connection.connect((err: mysql.MysqlError) => { 
    if (err) throw new Error(`mySql failed  connect: ${DATA_BASE} data base.`)
    console.log('connected to SQL server')
})


function runSQL(sqlCommand: string): Promise<any> {
    return new Promise((resolve, reject) => {
        connection.query(sqlCommand, (error: mysql.MysqlError | null, results?: any[]) => {
            if (error) reject(error)
            else resolve(results)
        })
    })
}

// connection.end();
export default { runSQL }