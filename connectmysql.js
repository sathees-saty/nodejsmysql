const mysql = require('mysql');
var msg = 'Welcome to SATY Learning';

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to MySql Db');
    return;
  }
  console.log(msg);
  console.log('MySQL Connection established');
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});