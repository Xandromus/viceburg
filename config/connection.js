require("dotenv").config();
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",

        // username
        user: "root",

        // password
        password: process.env.MYSQLPASSWORD,
        database: "burgers_db"
    });
};

// Make connection.
connection.connect();


module.exports = connection;