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
  //update query
  var sql = "DELETE FROM customers WHERE address = 'London'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record deleted, ID: " + result.affectedRows);
  });
});
