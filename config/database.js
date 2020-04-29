var mysql = require('mysql');

var database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

database.connect(function (err) {
    if (err) throw err;
});

module.exports = database;