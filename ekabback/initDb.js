const { response } = require('express');
const { pool } = require('./dbconn.js')

const createTable = function ({populate} = {}) {
    pool.query(`
    DROP TABLE IF EXISTS users;
    CREATE TABLE users(
        id INT GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(90) NOT NULL,
        email VARCHAR(90) NOT NULL,
        PRIMARY KEY(id)
        );`, (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result)
        if (populate == true){
            initialPopulate()
        }
    })
}

const initialPopulate = function () {
    pool.query(`INSERT INTO users(name, email)
    VALUES ('Alex', 'alexoo325@gmail.com'),
    ('Tim', 'timbronk2@bk.ru'),
    ('Jessica', 'jesse932@hotmail.com');
    `, (error, response) => {
        if (error) {
            throw error
        }
        console.log(response)
    })
}

module.exports = {
    createTable,
}