const mysql = require('mysql2');
const fs = require('fs');
const data = fs.readFileSync( './database.json');
const conf = JSON. parse(data);


const connection = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    database:conf.database
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to database with ID ' + connection.threadId);
});

module.exports = connection;