const mysql = require("mysql2")
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "wsd"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connection is created");
});

module.exports.con = con;