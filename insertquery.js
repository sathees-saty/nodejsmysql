var mysql = require('mysql');
var msg = 'Welcome to SATY Learning';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "testdatabase"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('Google Map', 'London')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});
