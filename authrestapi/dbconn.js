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
        await myclient.connect()
        const dbDropResult = await myclient.query(`DROP DATABASE IF EXISTS ${dbname} WITH (FORCE);`)
        console.log(dbDropResult)
        const dbCreateResult = await myclient.query(`CREATE DATABASE ${dbname};`)
        console.log(dbCreateResult)
    } catch (e) {
        console.error('ERROR OCCURED' + e)
    }
    finally {
        myclient.end()
    }
}

const initTable = async function(){
    try{
        
    }
    catch(e){

    }
    finally{

    }
}


module.exports = {
    initDb,
    mypool
}
