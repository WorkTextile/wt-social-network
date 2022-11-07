//DATABASE CONNECTION
const mysql = require("mysql2");

 const db = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"WorkText22@",
  database:"worktextile_social"
})

module.exports = db;