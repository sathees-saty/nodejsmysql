const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
  database:'testdatabase'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to MySql Db');
    return;
  }
  console.log('MySQL Connection established');
});
//Once the connection is established, 
//we’ll use the con variable to execute a query against the database table
con.query('SELECT * FROM employee', (err,rows) => {
  if(err) throw err;

  console.log('Data received from MySQL Db:');
  console.log(rows);
});
//Data returned from the MySQL database can be parsed by simply looping over the rows object
con.query('SELECT * FROM employee', (err,rows) => {
  if(err) throw err;

  console.log('Data received from MySQL Db:');
  rows.forEach( (row) => {
  console.log(`Name: ${row.name} , Salary: ${row.salary}`);
});
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});


