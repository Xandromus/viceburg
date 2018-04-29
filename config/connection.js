require("dotenv").config();
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3000,

    // username
    user: "root",

    // password
    password: process.env.MYSQLPASSWORD,
    database: "burgers_db"
});

// Make connection.
connection.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;