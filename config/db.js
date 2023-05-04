const mariadb = require('mariadb');
const config = require('./config.js');

const pool = mariadb.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
    port: config.PORT,
    trace : true
})

pool.getConnection((err, connection) => {
    if (err) {
      console.log("not connected due to error: " + err);
    } else {

        if(connection) connection.release();
        console.log("connected ! connection id is " + conn.threadId);
    }
    return;
  });

module.exports = pool;