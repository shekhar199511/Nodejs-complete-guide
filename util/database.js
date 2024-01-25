const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    password: 'Cool1992#',
    user: 'root',
    database: 'node-complete'
})

module.exports = pool.promise()