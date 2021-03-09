const pg = require('pg')

const conn_config = function (db = 'postgres') {
    return {
        host: 'wavevo.com',
        port: 9999,
        user: 'psqadmin',
        password: 'psadmin01',
        database: db
    }
}


const myclient = new pg.Client(conn_config())
let mypool;


const initDb = async function (dbname = 'magaza') {

    try {
        
    } catch (error) {
        
    }

    try {
        const dropResult = await myclient.query(`DROP DATABASE IF EXISTS ${dbname} WITH (FORCE);`)
        console.log(dropResult)
    } catch (e) {
        console.log(e)
    }

    const createDbResult = await myclient.query(`CREATE DATABASE ${dbname}`)
    console.log(createDbResult)

    const createTableResult = await myclient.query(`CREATE TABLE users(
        user_id INT GENERATED ALWAYS AS IDENTITY,
        user_name VARCHAR(50) NOT NULL,
        user_email VARCHAR(100) NOT NULL,
        PRIMARY KEY(user_id)
    );`)
    console.log(createTableResult)
    mypool = new pg.Pool(conn_config())
    mypool.query('sadfkasfsdk').then

}


module.exports = {
    initDb,
    mypool
}
