const Pool = require('pg').Pool
const pool = new Pool({
    user: 'psqadmin',
    host: '167.99.43.151', //use service name declared in docker-compose file when connecting inside docker system
    port: 9999, //when connecting from host system, use 5432 when connecting inside docker system
    password: 'psadmin01',
    database: 'postgres'
})

module.exports = {
    pool
}
