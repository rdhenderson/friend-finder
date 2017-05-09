var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    console.log("Loading jaws DB", process.env.JAWSDB_URL);
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    console.log("Did not locate JawsDB");
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "friends_db"
    });
}


connection.connect(function(err) {
  if (err) console.error("error connecting: " + err.stack);
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
