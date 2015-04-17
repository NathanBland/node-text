var mysql = require('mysql');
var config = require('./database');
var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
connection.query('SELECT FirstName, PhoneNumber from members', function(err, rows, fields) {
    if (err) throw err;

    for (i = 0; i < rows.length; i++) {
        console.log('Name: ', rows[i].FirstName);
        console.log('Number: ', rows[i].PhoneNumber);
    }
});

connection.end();