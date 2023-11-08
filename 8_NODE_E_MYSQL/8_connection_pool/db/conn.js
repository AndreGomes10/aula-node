const mysql = require('mysql')

const pool = mysql.createPool({
    // ele vai manter no maximo 10 conexões, apartir disso ele vai 
    // começar a matar as conexões inativas, conexões muito tempo sem receber resposta, 
    //  ele vai fazer essa gerencia
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodemysql2',
})

module.exports = pool